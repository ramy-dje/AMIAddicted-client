import React from 'react'
import { deleteIcon ,addUser,groupusers} from '../assets/assets'
const MyPatient = () => {
  return (
   <div className='w-11/12 h-5/6 bg-[#171825] rounded-[30px] custom-shadow px-6 sm:overflow-hidden overflow-auto'>
        <div className='flex flex-wrap py-6 items-center gap-4 '>
            <div className='w-[200px] h-[200px] bg-gray-500 rounded-xl'></div>
            <div>
                <h1 className='text-white text-4xl'>Taki Djerafi</h1>
                <p className='text-[#ADABAB]'>taki@gmail.com</p>
                <h2 className='text-[#ADABAB] text-2xl pt-2'>Patient</h2>
            </div>
        </div>
        <div className='flex  flex-wrap justify-between py-4 items-start'>
            <div>
                <div className='flex gap-5 items-center text-white mb-2'>
                    <img src={groupusers} alt="" className='w-10' />
                    <h2 className='text-2xl'>My doctors</h2>
                </div>
                <div className='overflow-auto h-[210px] pr-1'>
                   <DoctorCard />
                   <DoctorCard />
                   <DoctorCard />
                   <DoctorCard />
                   <DoctorCard />
                   <DoctorCard />
                </div>
            </div>

            <div className=' '>
                 <div className='flex  items-center text-white mb-2'>
                    <input 
                    type="text"  
                    className='w-[220px] h-[50px]  text-xl bg-transparent rounded-lg outline-none' 
                    placeholder='type the doctor name' />
                    <img src={addUser} alt="" className='w-10'/>
                </div>
                <div className='overflow-auto h-[200px]'>
                    <DoctorCard />
                   <DoctorCard />
                   <DoctorCard />
                   <DoctorCard />
                   <DoctorCard />
                   <DoctorCard />
                   <DoctorCard />
                   <DoctorCard />
                   <DoctorCard />
                </div>

            </div>
            
        </div>
   </div>
  )
}

function DoctorCard() {
  return (
    <div className='w-[250px] h-[50px]  bg-[#2A2C44] flex rounded-lg items-center justify-between pr-2 mb-2'>
        <div className='h-full flex items-center gap-2'>
            <div className='w-12 h-full bg-gray-400 rounded-tr-full'></div>
            <div className='text-white'>
                <p>Ramy Djebeli</p>
                <p className='text-sm mt-[-4px] text-[#989898]'>ramy@gmail.com</p>
            </div>
        </div>
        <img src={deleteIcon} alt="" className='cursor-pointer'/>
    </div>
  )
}


export default MyPatient