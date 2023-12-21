import React from 'react'
import {sendMessage,threeDots} from '../assets/assets'

const GeneralChat = () => {
    const messages =[
        {
            user :'amine',
            msg:'hello man sdsd sdsdsdsdsdsdsds sd sd sd  sdsds'
        },
        {
            user :'ramy',
            msg:'hello amine'
        },
        {
            user :'amine',
            msg:'fine and you'
        },
        {
            user :'ramy',
            msg:'i am  doing great'
        },
        {
            user :'amine',
            msg:'hello man sdsd sdsdsdsdsdsdsds sd sd sd  sdsds'
        },
        {
            user :'ramy',
            msg:'hello amine'
        },
        {
            user :'amine',
            msg:'fine and you'
        },
        {
            user :'ramy',
            msg:'i am  doing great'
        },
        {
            user :'amine',
            msg:'hello man sdsd sdsdsdsdsdsdsds sd sd sd  sdsds'
        },
        {
            user :'ramy',
            msg:'hello amine'
        },
        {
            user :'amine',
            msg:'fine and you'
        },
        {
            user :'ramy',
            msg:'i am  doing great'
        },
        {
            user :'amine',
            msg:'hello man sdsd sdsdsdsdsdsdsds sd sd sd  sdsds'
        },
        {
            user :'ramy',
            msg:'hello amine'
        },
        {
            user :'amine',
            msg:'fine and you'
        },
        {
            user :'ramy',
            msg:'i am  doing great'
        },
        {
            user :'amine',
            msg:'hello man sdsd sdsdsdsdsdsdsds sd sd sd  sdsds'
        },
        {
            user :'ramy',
            msg:'hello amine'
        },
        {
            user :'amine',
            msg:'fine and you'
        },
        {
            user :'ramy',
            msg:'i am  doing great'
        },
    ]
  return (
    <div className='w-11/12 h-5/6 bg-[#171825] rounded-[30px] custom-shadow px-6 pt-2 sm:overflow-hidden overflow-auto'>
        <div className='h-5/6 w-full overflow-auto pr-1'>
            {messages.map((e)=>(<div className={`flex ${e.user =='amine' ? 'justify-start':' flex-row-reverse'} gap-2 mb-2  text-white group`}>
                <div className='w-12 h-12 bg-gray-500 rounded-lg'></div>
                <div 
                className={`p-2 max-w-[300px] ${e.user == 'amine' ? 'bg-gradient-to-r from-indigo-700 to-indigo-400 rounded-tl-[85px] rounded-tr-[100px] rounded-br-[100px]' : 'rounded-tl-[100px] rounded-bl-[100px] rounded-br-[85px] bg-[#2C2F48]'}`}
                > {e.msg}</div>
                <img src={threeDots} className='hidden group-hover:block w-4  cursor-pointer' />
            </div>))}
        </div>
        <div className='h-[55px] w-full mr-8 ml-2  rounded-tr-lg rounded-full relative'>
            <input 
            type="text" 
            className='outline-none w-full h-full rounded-tr-lg rounded-full mt-2 bg-[#1D203E] pr-14 p-2 text-white ' />
            <img src={sendMessage} alt="" className='w-12 absolute top-3 right-1 border border-white p-1 rounded-full'/>
        </div>
    </div>
  )
}

export default GeneralChat