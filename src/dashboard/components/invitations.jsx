import React from 'react'
import {roundedAccept,roundedX} from '../assets/assets'
const Invitations = () => {
  return (
   <div className='h-screen sm:w-4/5 w-full p-5'>
        <Invitation />
        <Invitation />
   </div>
  )
}

function Invitation() {
  return (
    <div className='flex items-center justify-between px-5 h-[75px] bg-[#171825] rounded-lg custom-shadow text-white mb-8 cursor-pointer'>
        <div  className='flex items-center gap-2'>
            <p className='w-full h-16 w-16 bg-slate-500' style={{clipPath:'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></p>
            <div>
                <p>User : ramy djebeli</p>
                <p>Role : doctor</p>
            </div>
        </div>
        <div className='flex'>
            <img src={roundedAccept} alt="" className='w-8'/>
            <img src={roundedX} alt=""  className='w-8'/>
        </div>
    </div>
  )
}


export default Invitations