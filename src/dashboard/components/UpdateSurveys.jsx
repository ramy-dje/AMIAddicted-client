import React,{useState,useEffect} from 'react'
import {X,add,updatequestions} from '../assets/assets'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UpdateSurveys = () => {
  const [surveyList, setsurveyList] = useState([])
  async function getSurvey(){
    const {data} = await axios.get(`${import.meta.env.VITE_API}/api/getNewQst`)
    setsurveyList(data[0].surveysList)
  }
  async function addSurvey() {
    const {data} = await axios.post(`${import.meta.env.VITE_API}/api/createNewQst`,{listName:'new survey',list:[]})
    console.log(data)
  } 
  useEffect(()=>{
    getSurvey();
  },[surveyList])
  return (
    <div className='h-screen sm:w-4/5 w-full p-5'>
        <div className='flex justify-end pt-8 pb-10'>
            <img src={add} alt="" className='w-8 custom-shadow rounded-full cursor-pointer' onClick={addSurvey}/>
        </div>
        {
          surveyList && surveyList.map((e)=><div className='flex items-center justify-between px-5 h-[75px] bg-[#171825] rounded-lg custom-shadow text-white mb-8'>
            <p>{e.listName}</p>
            <div className='flex items-center gap-2'>
                <Link to={'UpdateQuestions/'+e.listName}><img src={updatequestions} alt="" className='w-6'/></Link>
                <img src={X} alt="" className='w-10 hover:cursor-pointer'/>
            </div>
          </div>
        )}


      

       
        
    </div>
  )
}

export default UpdateSurveys