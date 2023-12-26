import React,{useState,useEffect} from 'react';
import axios from 'axios';


const Questions = () => {
    const [arr,setArr] = useState([]);
    const [survey, setsurvey] = useState(null);
    const [surveyList, setsurveyList] = useState(null);
    const [current, setcurrent] = useState(1);
    const [responses, setresponses] = useState([]);

    function calculateNbrOfPages(quesionsList){
        if(arr.length  <= 0){
            for(let i = 1 ; i <= quesionsList.length/4 ; i++){
                setArr((e)=>[...e,i])
            }
        }    
    }
   
    
    useEffect(()=>{
      axios.get('http://localhost:3000/api/getNewQst').then((res)=>{setsurvey(res.data[0].list)})
      survey && calculateNbrOfPages(survey);
      //survey && arrayToMatrix(survey,4)
    },[survey]);


  return (
    <div className='flex flex-col gap-2 px-6 pt-6 pb-2 h-screen items-center overflow-y-auto '>
        <div className='flex'>
            {
                arr.map((e,i)=>(
                    <div  key={i} className='flex items-center text-white cursor-pointer' onClick={()=>setcurrent(e)}>
                        <p className={`w-12 h-12 ${current == e ? 'bg-[#6D54BF] pink-shadow':'bg-[#1E2F7D] custom-shadow'} rounded-full text-center text-4xl`}>{e}</p>
                        {i < arr.length -1 && <div className={`w-6 h-2 ${current == e ? 'bg-gradient-to-r from-[#6D54BF] to-[#1E2F7D]':'bg-[#1E2F7D]'}`}></div>}
                        
                    </div>
                ))
            }
        </div>
        <div className='flex flex-wrap gap-8 justify-center mt-8 overflow-y-auto pb-6 pr-4'>
        {survey && survey.slice((current-1)*4,current*4).map((e,i)=>
            (
                <QuestionCard question={e.question} answers={e.answers} key={i} setresponses={setresponses} responses={responses}/>
            )
        )}
         
        </div>
      {arr && current == arr.length && <div className='flex justify-end w-full items-end'>
          <button  className='border-none bg-gradient-to-br from-[#6D54BF] to-[#1E2F7D] text-lg rounded-lg text-white px-6 py-2'>Update changes</button>
        </div>}
    </div>
  )
}


function QuestionCard({question,answers,setresponses,responses}) {

    function handleChange(value,question) {  
        const tempData = responses;
        let found =false ;
        tempData && tempData.map((e,i)=>{
            if(e.question == question){
                found = true
                e.value = value
            } 
        })
        setresponses((prev)=>(found ? setresponses(tempData):[...prev,{question:question,value:value}]))
        console.log(responses)
        isFilled(question)
    };
    return (
      <div className='w-[350px] h-[220px] bg-gradient-to-br from-[#6D54BF] to-[#1E2F7D] rounded-lg p-3 text-white custom-shadow'>
          <p className='text-sm border-b-2 border-gray-400 mb-2'>{question}</p>
          {
          answers && answers.map((e,i)=>{
            return (
            <div className='flex gap-1 items-center' key={i}>
                <input type="radio" onChange={(s)=>{handleChange(s.target.value,question)}}  name={question} value={e.value} />
                <label >{e.answer}</label>
            </div>
            )
          } 
          )
          }
      </div>
    )
  }


export default Questions