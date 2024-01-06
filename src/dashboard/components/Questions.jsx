import React,{useState,useEffect} from 'react';
import axios from 'axios';


const Questions = () => {
    const [arr,setArr] = useState([]);
    const [survey, setsurvey] = useState(null);
    const [surveyName, setsurveyName] = useState(null);
    const [current, setcurrent] = useState(1);
    const [responses, setresponses] = useState([]);
   const [userData, setuserData] = useState();  

    function calculateNbrOfPages(quesionsList){
        if(arr.length  <= 0){
            for(let i = 1 ; i <= quesionsList.length/4 ; i++){
                setArr((e)=>[...e,i])
            }
        }    
    }


    async function sendResponse(){
        console.log(responses)
        let res = 0
        responses.forEach((e)=>{res +=Number(e.value) })
        const {data} = await axios.post('http://localhost:3000/api/create/newQstRes',{
            surveyName,
            patient:userData._id,
            patientAnswers:responses,
            result:res ,
            comment:''
        })
       
        console.log(res)
    }

    async function getUserData(){
        const parsedData = JSON.parse(localStorage.getItem('user'))
        getUserSurvey(parsedData._id)
        setuserData(parsedData)
        console.log(parsedData)
    }

    async function getUserSurvey(userId){
        const {data} = await axios.get('http://localhost:3000/api/get/SurveyToUser/'+userId)
        //setuserSurvey(data)
        console.log(data[0].survey)
        setsurvey(data[0].survey.list)
        setsurveyName(data[0].survey.listName)
    }
    
    useEffect(()=>{
       /* axios.get('http://localhost:3000/api/getNewQst').then((res)=>{setsurvey(res.data[0].surveysList[2].list);console.log(res.data[0].
        surveysList[2].list
        )})*/
        getUserData()
      
    },[]);
    useEffect(()=>{
        survey && calculateNbrOfPages(survey);
    },[survey])
 

  return (
    <div className='flex flex-col gap-2 px-6 pt-6 pb-2 h-screen items-center overflow-y-auto '>
        <div className='flex'>
            {
                arr && arr.map((e,i)=>(
                    <div  key={i} className='flex items-center text-white cursor-pointer' onClick={()=>setcurrent(e)}>
                        <p className={`w-12 h-12 ${current >= e ? 'bg-[#6D54BF] pink-shadow':'bg-[#1E2F7D] custom-shadow'} rounded-full text-center text-4xl`}>{e}</p>
                        {i < arr.length -1 && <div className={`w-6 h-2 ${current >= e ? 'bg-gradient-to-r from-[#6D54BF] to-[#1E2F7D]':'bg-[#1E2F7D]'}`}></div>}
                        
                    </div>
                ))
            }
        </div>
        <div className='flex flex-wrap gap-8 justify-center mt-8 overflow-y-auto pb-6 pr-4'>
        {survey && survey./*slice((current-1)*4,current*4).*/map((e,i)=>
            (
                <div key={i} style={{display:(current-1)*4 <= i && (current*4) > i ? 'block' :'none' }}>
                    <QuestionCard current={current} arr={arr} setcurrent={setcurrent} question={e.question} answers={e.answers}  setresponses={setresponses} responses={responses} />
                </div>
            )
        )}
         
        </div>
      {arr && current == arr.length && <div className='flex justify-end w-full items-end'>
          <button  
          onClick={sendResponse}
          className='border-none bg-gradient-to-br from-[#6D54BF] to-[#1E2F7D] text-lg rounded-lg text-white px-6 py-2'>Send answers</button>
        </div>}
    </div>
  )
}


function QuestionCard({question,answers,setresponses,responses,setcurrent,arr,current}) {

    function handleChange(value,question,answer) {  
        const tempData = responses;
        let found =false ;
        tempData && tempData.map((e,i)=>{
            if(e.question == question){
                found = true
                e.value = value
                e.answer = answer
            } 
        })
        setresponses((prev)=>(found ? setresponses(tempData):[...prev,{question:question,value:value,answer:answer}]))
        current != arr.length && setcurrent(Math.floor((responses.length+1)/4 +1) )
        console.log(arr.length)
        console.log(responses)
        
    };
    return (
      <div className='w-[350px] h-[220px] bg-gradient-to-br from-[#6D54BF] to-[#1E2F7D] rounded-lg p-3 text-white custom-shadow'>
          <p className='text-sm border-b-2 border-gray-400 mb-2'>{question}</p>
          {
          answers && answers.map((e,i)=>{
            return (
            <div className='flex gap-1 items-center' key={i}>
                <input id={i+question} type="radio" onChange={(s)=>{handleChange(s.target.value,question,e.answer);}}  name={question} value={e.value} />
                <label htmlFor={i+question}>{e.answer}</label>
            </div>
            )
          } 
          )
          }
      </div>
    )
  }


export default Questions