import React,{useState,useEffect} from 'react'
import {X,add} from '../assets/assets'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const UpdateQuestions = () => {
    const [surveyQuestions,setsurveyQuestions] = useState(null);
    const {listName} = useParams();
    const [name, setname] = useState(listName);

    function handleChangeName(newName){
      setname(newName)
    }

    useEffect(()=>{
      axios.get('http://localhost:3000/api/getOneNewQst/'+listName).then((res)=>{console.log(res.data.list);setsurveyQuestions(res.data.list)})

    },[])
    const [responses, setresponses] = useState([]);
    
    function handleChangeAnswers(value,itr,i){
        let temp = [...surveyQuestions];
        temp[itr].answers[i].answer=value;
        setsurveyQuestions(temp);
    }
    function handleChangeValues(value,itr,i){
        let temp = [...surveyQuestions];
        temp[itr].answers[i].value=value;
        setsurveyQuestions(temp);
  }
  
  function addQuestion(){
    setsurveyQuestions((e)=>[...e,{question:"you can add a new question here", answers: [{answer:'answer 1',value:0}]}])
  } 
  function deleteAnswer(i,j){
    const temp = surveyQuestions[i].answers.filter((e,ii)=>ii != j);
    const r = [...surveyQuestions];
    r[i].answers = temp
    setsurveyQuestions(r)  
    console.log(r)
  }    
 async function handleUpdateSurvey(){
  const updatedSurvey = {
    listName,
    newListName:name,
    list : [...surveyQuestions]
  }
    const data = await axios.post('http://localhost:3000/api/updateNewQst',updatedSurvey);
    console.log(data)
 }


  return (
    <div className='w-full h-screen sm:p-4 pt-2 flex flex-col items-center overflow-y-auto'>
        <input className='my-5 text-2xl text-white outline-none border-none bg-transparent' onChange={(e)=>handleChangeName(e.target.value)} value={name}/>
        {
            surveyQuestions && surveyQuestions.map((e,ii)=>(
                <QuestionCard key={ii} question={e.question} answers={e.answers} questionNumber={ii} surveyQuestions={surveyQuestions} setsurveyQuestions={setsurveyQuestions}/>
            ))
        }
        <img src={add} alt="" className='w-12 cursor-pointer'  onClick={addQuestion}/>
        <div className='flex justify-end w-full mt-8'>
          <button onClick={handleUpdateSurvey} className='border-none bg-gradient-to-br from-[#6D54BF] to-[#1E2F7D] text-lg rounded-lg text-white px-6 py-2'>Update changes</button>
        </div>
    </div>
  )
}
function QuestionCard({question,answers,questionNumber,surveyQuestions,setsurveyQuestions}) {
    function handleChangeAnswers(value,itr,i){
        let temp = [...surveyQuestions];
        temp[itr].answers[i].answer=value;
        setsurveyQuestions(temp);
    }
    function handleChangeValues(value,itr,i){
        let temp = [...surveyQuestions];
        temp[itr].answers[i].value=value;
        setsurveyQuestions(temp);
    }
    function deleteQuestion(question){
        const temp = surveyQuestions.filter((e)=>e.question != question)
        setsurveyQuestions(temp)
        console.log(temp)
    }
    function addAnswer(i){
        const r = [...surveyQuestions];
        r[i].answers.push({answer:'nouveau chois',value:0})
        setsurveyQuestions(r)  
        console.log(r)
    }
    function deleteAnswer(i,j){
        const temp = surveyQuestions[i].answers.filter((e,ii)=>ii != j);
        const r = [...surveyQuestions];
        r[i].answers = temp
        setsurveyQuestions(r)  
        console.log(r)
    }
    function handleChangeQuestion(value,itr) {  
        let temp =surveyQuestions.map((e,i)=>(i==itr) ? {...e,question:value}:e)
         setsurveyQuestions(temp)  
    };
    function deleteQuestion(question){
        const temp = surveyQuestions.filter((e)=>e.question != question)
        setsurveyQuestions(temp)
        console.log(temp)
      }        
    return (
      <div className='w-10/12 min-h-[220px] bg-gradient-to-br from-[#6D54BF] to-[#1E2F7D] rounded-lg sm:p-4 p-1 sm:pt-4 pt-4 text-white custom-shadow mb-6  relative group'>
            <input  className='w-full bg-transparent outline-none text-lg border-b-2 border-gray-400 text-md' value={question} placeholder='the question' onChange={(e)=>handleChangeQuestion(e.target.value,questionNumber)}/>
            {answers && answers.map((ans,i)=>(<div key={i} className='flex justify-between items-center text-white text-sm'>
                <input type="text" className='bg-transparent outline-none w-full mr-4 '  placeholder='answer' onChange={(e)=>handleChangeAnswers(e.target.value,questionNumber,i)} value={ans.answer}/>
                <div className='flex items-center'>
                    <input type="number" min={0} max={5} value={ans.value} className='bg-transparent outline-none sm:w-12 w-9 m-0' placeholder='value' onChange={(e)=>handleChangeValues(e.target.value,questionNumber,i)}/>
                    <img src={X} alt="" className='cursor-pointer w-7' onClick={()=>deleteAnswer(questionNumber,i)}/>
                </div>
            </div>))}
            <img src={add} alt="" className='cursor-pointer w-4' onClick={()=>addAnswer(questionNumber)} />
            <img src={X} alt="" className='cursor-pointer  absolute top-[-15px] right-[-15px] w-0 group-hover:w-10 transition-all duration-300' onClick={()=>deleteQuestion(question)} />
      </div>
    )
  }

export default UpdateQuestions