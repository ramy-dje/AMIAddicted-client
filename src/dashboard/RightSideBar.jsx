import React from 'react'
import {rightSideBarIcons} from './constants/Dashboard'
const RightSideBar = () => {
  return (
    <div className='flex h-screen flex-col px-4'>
        <div className='flex justify-between border-b border-gray-700 text-white h-8 p-1'>
            {
                rightSideBarIcons.map((e)=>(
                    <img src={e.icon} />
                ))
            }
        </div>
        <div className='flex justify-center items-center h-3/12'>
            <div className='text-center pt-2'>
                <p className='w-full h-28 w-28 bg-slate-500' style={{clipPath:'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></p>
                <p className='text-white text-lg'>ramy dje</p>
                <p className='text-gray-600'>ramy@gmail.com</p>
            </div>
        </div>
        <div className='w-full h-5/12 overflow-hidden '>
            <div className='flex justify-between text-gray-500 mb-2'>
                <p>My Contacts</p>
                <p className='cursor-pointer'>see all</p>
            </div>
            <div className='h-[88%] pr-1 overflow-auto'>
                <div className='flex gap-2 p-3 bg-[#2a2c44] rounded-md mb-2'>
                    <div className='w-10 h-10 bg-blue-800 rounded-full'></div>
                    <div>
                        <p className=' text-white'>Ramy dje</p>
                        <p className='text-gray-500 text-xs mt-[-5px]'>Client</p>
                    </div>
                </div>
                <div className='flex gap-2 p-3 bg-[#2a2c44] rounded-md mb-2'>
                    <div className='w-10 h-10 bg-blue-800 rounded-full'></div>
                    <div>
                        <p className=' text-white'>Ramy dje</p>
                        <p className='text-gray-500 text-xs mt-[-5px]'>Client</p>
                    </div>
                </div>
                <div className='flex gap-2 p-3 bg-[#2a2c44] rounded-md mb-2'>
                    <div className='w-10 h-10 bg-blue-800 rounded-full'></div>
                    <div>
                        <p className=' text-white'>Ramy dje</p>
                        <p className='text-gray-500 text-xs mt-[-5px]'>Client</p>
                    </div>
                </div>
                <div className='flex gap-2 p-3 bg-[#2a2c44] rounded-md mb-2'>
                    <div className='w-10 h-10 bg-blue-800 rounded-full'></div>
                    <div>
                        <p className=' text-white'>Ramy dje</p>
                        <p className='text-gray-500 text-xs mt-[-5px]'>Client</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-3/12 overflow-hidden'>
            <div className='flex justify-between text-gray-500 mb-2'>
                <p>Notifications</p>
                <p className='cursor-pointer'>see all</p>
            </div>
            <div className='w-full h-full pr-1 overflow-auto'>
                <div className='p-3 bg-[#2a2c44] rounded-md mb-2 relative overflow-hidden'>
                    <p className=' text-white pb-1'>notification number </p>
                    <p className='text-gray-500 text-xs mt-[-5px] absolute bottom-1 right-2'>Client</p>
                    <p className='text-gray-500 text-xs mt-[-5px] absolute bottom-1 left-2'>25 min</p>
                </div>
                <div className='p-3 bg-[#2a2c44] rounded-md mb-2 relative overflow-hidden'>
                    <p className=' text-white pb-1'>notification number </p>
                    <p className='text-gray-500 text-xs mt-[-5px] absolute bottom-1 right-2'>Client</p>
                    <p className='text-gray-500 text-xs mt-[-5px] absolute bottom-1 left-2'>25 min</p>
                </div>
                <div className='p-3 bg-[#2a2c44] rounded-md mb-2 relative overflow-hidden'>
                    <p className=' text-white pb-1'>notification number </p>
                    <p className='text-gray-500 text-xs mt-[-5px] absolute bottom-1 right-2'>Client</p>
                    <p className='text-gray-500 text-xs mt-[-5px] absolute bottom-1 left-2'>25 min</p>
                </div>
                <div className='p-3 bg-[#2a2c44] rounded-md mb-2 relative overflow-hidden'>
                    <p className=' text-white pb-1'>notification number </p>
                    <p className='text-gray-500 text-xs mt-[-5px] absolute bottom-1 right-2'>Client</p>
                    <p className='text-gray-500 text-xs mt-[-5px] absolute bottom-1 left-2'>25 min</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightSideBar