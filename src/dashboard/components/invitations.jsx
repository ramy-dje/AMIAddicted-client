import React,{useState} from 'react'
import { roundedAccept,roundedX} from '../assets/assets'
const Invitations = () => {
  return (
   <div className='h-screen sm:w-4/5 w-full p-5'>
        <Invitation />
        <Invitation />
   </div>
  )
}

function Invitation() {
    const [extended, setextended] = useState(false)
  return (
    <div 
    onClick={()=>setextended((e)=>!e)}
    className={`flex ${extended ? 'items-start': 'items-center'} justify-between px-5 pt-1 min-h-[75px] h-fit bg-[#171825] rounded-lg custom-shadow text-white mb-8 cursor-pointer`}
    >
        <div  className={`flex ${extended ? 'gap-4 p-3 items-start' : 'gap-2 items-center'} `}>
            <p className={`w-full ${extended ? 'h-24 w-24':'h-16 w-16'} bg-slate-500`} style={{clipPath:'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></p>
            <div>
                {
                    extended ? <div className='text-xl'>
                    <p>User : ramy djebeli</p>
                    <p>Role : doctor</p>
                    <p>Gender : Male</p>
                    <p>age : 20 </p>
                    <p>email : ramy@gmail.com</p>
                    </div> :<div>
                        <p>User : ramy djebeli</p>
                        <p>Role : doctor</p>
                    </div>                        
                }
            </div>
        </div>
        <div className='flex '>
            <img src={roundedAccept} alt="" className='w-8 fill-red-600 '/>
            <img src={roundedX} alt=""  className='w-8'/>
        </div>
    </div>
  )
}


export default Invitations