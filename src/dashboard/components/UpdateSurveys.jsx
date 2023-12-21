import React from 'react'
import {X,add,updatequestions} from '../assets/assets'

const UpdateSurveys = () => {
  return (
    <div className='h-screen sm:w-4/5 w-full p-5'>
        <div className='flex justify-end pt-8 pb-10'>
            <img src={add} alt="" className='w-8 custom-shadow rounded-full cursor-pointer'/>
        </div>
        <div className='flex items-center justify-between px-5 h-[75px] bg-[#171825] rounded-lg custom-shadow text-white mb-8'>
            <p>question numero 1</p>
            <div className='flex items-center gap-2'>
                <img src={updatequestions} alt="" className='w-6'/>
                <img src={X} alt="" className='w-10'/>
            </div>
        </div>

        <div className='flex items-center justify-between px-5 h-[75px] bg-[#171825] rounded-lg custom-shadow text-white mb-8'>
            <p>question numero 1</p>
            <div className='flex items-center gap-2'>
                <img src={updatequestions} alt="" className='w-6'/>
                <img src={X} alt="" className='w-10'/>
            </div>
        </div>

       
        
    </div>
  )
}

export default UpdateSurveys