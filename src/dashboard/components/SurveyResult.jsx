import React,{useState,useEffect} from 'react'
import { deleteIcon ,addUser,groupusers,updatequestions,scoreOfPrediction,doctor} from '../assets/assets'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SurveyResult = () => {
    const {id} = useParams();
    const [userData, setUserData] = useState(null);
    const [answers, setanswers] = useState(null)
    async function getUser(){
        const {data} = await axios.get('http://localhost:3000/api/getUser/'+id)
        setUserData(data)
        //console.log(data)
    }
    async function getUserAnswer(){
        const {data} = await axios.get('http://localhost:3000/api/newQstRes/'+id)
        setanswers(data)
        console.log(data)
        console.log(answers)
        //console.log(data)
    }
    useEffect(()=>{
        getUser()
        getUserAnswer()
    },[])
    function handleCommentChange(newComment){
        setanswers([{...answers[0],comment:newComment}])
    }
    async function updateComment(userId,comment){
        const {data} = await axios.post('http://localhost:3000/api/update/comment/'+userId,{comment})
        console.log(data)
    }
  return (
    <div className='w-11/12 h-[90vh] bg-[#171825] rounded-[30px] custom-shadow px-6 sm:overflow-hidden overflow-auto'>
    {(answers && answers.length > 0 ) ? <><div className='flex flex-wrap py-6 items-center gap-4 '>
        <img src={userData && userData.avatar} className='w-[170px] h-[170px] bg-gray-500 rounded-xl'/>
        <div>
            <h1 className='text-white text-4xl'>{userData && userData.Nom} {userData && userData.Prenom}</h1>
            <p className='text-[#ADABAB]'>{userData && userData.email}</p>
            <h2 className='text-[#ADABAB] text-2xl pt-2'>{userData && userData.role}</h2>
        </div>
    </div>
    <div className='flex  flex-wrap justify-between py-4 items-start'>
        <div className='flex flex-col items-center'>
            <div className='w-[140px] h-[140px]  rounded-full border-4 border-white flex justify-center items-center white-shadow  mb-2'>
                <p className='text-5xl text-white'>{answers && answers[0].result && answers[0].result}</p>
            </div>
            <div className=' text-white mb-2 '>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <img src={doctor} alt="" className='w-8 pb-1' />
                        <h2 className='text-xl'>My doctor's review</h2>
                    </div>
                    <img src={updatequestions} alt="" className='cursor-pointer' onClick={()=>updateComment(userData._id,answers[0].comment)}/>
                </div>
                <textarea  onChange={(e)=>handleCommentChange(e.currentTarget.value)} value={answers && answers[0].comment} className='w-[350px] h-[140px] bg-[#2A2C44] rounded-lg  p-2 overflow-y-auto '>

                </textarea>
            </div>
        </div>

        <div className=' '>
             <div className='flex justify-between items-center text-white mb-2'>
                <p   className=' text-xl bg-transparent rounded-lg outline-none' >
                    My answers
                </p>
                <img src={scoreOfPrediction} alt="" className='w-10'/>
            </div>
            <div className='overflow-auto h-[270px] w-[310px]'>
                {
                    answers && answers[0].patientAnswers.map((e)=>(
                    <div className='w-[300px] h-[100px] overflow-y-auto bg-[#2A2C44] flex rounded-lg flex-col justify-between p-2 mb-2 text-white text-sm'>
                        <p>Q : {e.question.slice(0,e.question.length-1)}</p>
                        <p>Ans : {e.answer}</p>
                    </div>
                    )
                    
                )}   
            </div>

        </div>
        
    </div></> : <div className='w-full h-full text-white flex items-center justify-center'>
        <p className='text-4xl text-center'>you didn't answer the survey yet </p>
        </div>}
</div>
  )
}

export default SurveyResult