import React,{useEffect,useState} from 'react'
import {admin,doctor,myPatients} from '../assets/assets'
import {XAxis,YAxis,Bar,AreaChart,ResponsiveContainer,Label,LabelList,Tooltip, Area,BarChart} from 'recharts';
import axios from 'axios'

const Statistics = () => {
    const [analyticsData, setanalyticsData] = useState([]);
    const [doctorsNumber, setdoctorsNumber] = useState(0);
    const [patientNumber, setpatientNumber] = useState(0);
    const [adminsNumber, setadminsNumber] = useState(0);
    useEffect(()=>{
        axios.get('http://localhost:3000/api/getAnalytics').then((res)=>{setanalyticsData(res.data);console.log(res.data)})
        axios.get('http://localhost:3000/api/getDoctors').then((res)=>setdoctorsNumber(res.data.length))
        axios.get('http://localhost:3000/api/getPatients').then((res)=>setpatientNumber(res.data.length))
        axios.get('http://localhost:3000/api/getAdmins').then((res)=>setadminsNumber(res.data.length))
    },[])
  
      let minValue= 0 ;
  return (
    <div className='w-full h-screen p-4 pb-16 flex flex-col  overflow-y-auto' >
        <div className='flex gap-4 items-center justify-center flex-wrap   '>
            <StatisticsCard img={admin} thisMonth={2} title={'admin'} total={adminsNumber}/>
            <StatisticsCard img={doctor} thisMonth={5} title={'doctor'} total={doctorsNumber}/>
            <StatisticsCard img={myPatients} thisMonth={15} title={'client'} total={patientNumber}/>
        </div>
        <div className='w-full mt-5 flex gap-4 h-fit flex-wrap '>
            <div className=' h-[300px] p-3  w-full sm:w-[60%]  bg-[#171825] custom-shadow rounded-lg'>
                <h1 className='text-white sm:text-xl text-lg pb-3'>Subscriptions in the last 12 months</h1>
                {analyticsData && <ResponsiveContainer width='100%' height='100%' >
                    <BarChart width={150} height={300} data={analyticsData}>
                        <XAxis dataKey='month'>
                        <Label offset={0} position='insideBottom'/>
                        </XAxis>
                        <YAxis domain={[minValue,'auto']}/>
                        <Bar dataKey='count' fill='white'>
                        <LabelList dataKey='uv' position='top'/>
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>}
            </div>
            <div className='md:w-[35%] w-full  bg-[#171825] custom-shadow rounded-lg text-white p-3'>
                <h1 className='sm:text-xl text-lg pb-3'>Admins List</h1>
                <div className='flex flex-col items-center'>
                    <div className='w-[90%] h-[50px]  bg-[#2A2C44] flex rounded-lg items-center justify-between pr-2 mb-2'>
                        <div className='h-full flex items-center gap-2'>
                            <img src='' className='w-12 h-full bg-gray-400 rounded-tr-full'/>
                            <div className='text-white'>
                                <p>ramy dje</p>
                                <p className='text-sm mt-[-4px] text-[#989898]'>email@gmai.com</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[90%] h-[50px]  bg-[#2A2C44] flex rounded-lg items-center justify-between pr-2 mb-2'>
                        <div className='h-full flex items-center gap-2'>
                            <img src='' className='w-12 h-full bg-gray-400 rounded-tr-full'/>
                            <div className='text-white'>
                                <p>ramy dje</p>
                                <p className='text-sm mt-[-4px] text-[#989898]'>email@gmai.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
      
        
    </div>
   )
}


function StatisticsCard({img,total,thisMonth,title}) {
  return (
    <div className='w-[250px] h-fit rounded-lg custom-shadow bg-[#171825] relative p-4 text-white '>
        <img src={img} className='absolute right-2 top-2 w-7'/>
        <div className=' flex w-full h-fit items-end gap-1'>
            <div className='w-[80px] h-[80px] border-white white-shadow border-[10px] rounded-full flex items-center justify-center '>
                <p className='text-3xl'>{total}</p>
            </div>
            <p className='text-xs'> {thisMonth} new {title}s</p>
        </div>
        <p className='text-[25px] mt-4'>{title}</p>
    </div>
  )
}


export default Statistics