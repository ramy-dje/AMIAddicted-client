import React from 'react'
import {admin,doctor,myPatients} from '../assets/assets'
import {XAxis,YAxis,Bar,AreaChart,ResponsiveContainer,Label,LabelList,Tooltip, Area,BarChart} from 'recharts';

const Statistics = () => {
    const analyticsData = [
        {name:'Jun 2023',uv: 3},
        {name:'July 2023',uv: 2},
        {name:'Augut 2023',uv: 5},
        {name:'Sept 2023',uv: 7},
        {name:'Oct 2023',uv: 3},
        {name:'Nov 2023',uv: 4},
        {name:'Dicem 2023',uv: 7},
        {name:'Jun 2023',uv: 3},
        {name:'July 2023',uv: 2},
        {name:'Augut 2023',uv: 5},
        {name:'Sept 2023',uv: 7},
        {name:'Oct 2023',uv: 3},
        {name:'Nov 2023',uv: 4},
        {name:'Dicem 2023',uv: 7},
      ]
      let minValue= 0 ;
  return (
    <div className='w-full h-screen p-4 pb-16 flex flex-col  overflow-y-auto' >
        <div className='flex gap-4 items-center justify-center flex-wrap   '>
            <StatisticsCard img={admin} thisMonth={2} title={'admin'} total={6}/>
            <StatisticsCard img={doctor} thisMonth={5} title={'doctor'} total={12}/>
            <StatisticsCard img={myPatients} thisMonth={15} title={'client'} total={30}/>
        </div>
        <div className='w-full mt-5 flex gap-4 h-fit flex-wrap '>
            <div className=' h-[300px] p-3  w-full sm:w-[60%]  bg-[#171825] custom-shadow rounded-lg'>
                <h1 className='text-white sm:text-xl text-lg pb-3'>Subscriptions in the last 12 months</h1>
                <ResponsiveContainer width='100%' height='100%' >
                    <BarChart width={50} height={100} data={analyticsData}>
                        <XAxis dataKey='name'>
                        <Label offset={0} position='insideBottom'/>
                        </XAxis>
                        <YAxis domain={[minValue,'auto']}/>
                        <Bar dataKey='uv' fill='white'>
                        <LabelList dataKey='uv' position='top'/>
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
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