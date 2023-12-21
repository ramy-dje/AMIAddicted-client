import React,{useState} from 'react'
import {generalChat,home,invitations,myDoctors,myPatients,questions,scoreOfPrediction,statistics,updatequestions} from './assets/assets'
import {leftSideBarIcons} from './constants/Dashboard'

const LeftSideBare = () => {
  const [ActiveElement, setActiveElement] = useState('Home')
  return (
    <div className='flex h-screen flex-col px-1 sm:px-2 lg:px-4'>
      <div className='flex justify-between border-b border-gray-700 text-white h-8 p-1'>
        <p className='text-sm sm:text-lg'>Explore</p>
      </div>
      <div className='flex flex-col gap-2 pt-3'>
       {
        leftSideBarIcons.map((e,i)=>( 
          <div 
            className={`flex items-center gap-2 text-white px-2 sm:px-4 py-2 rounded-lg mb-1 cursor-pointer ${e.title == ActiveElement && 'bg-[#1D203E]'}`}
            onClick={()=>setActiveElement(e.title)}  
          >
            <img src={e.icon} alt="" className='text-xl'/>
            <p className='hidden sm:block'>{e.title}</p> 
          </div>
        ))
       }
      </div>
    </div>
  )
}

export default LeftSideBare