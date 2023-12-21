import React from 'react'
import RightSideBar from './components/RightSideBar'
import LeftSideBare from './components/LeftSideBare'
import MyDoctor from './components/MyDoctors'
import MyPatient from './components/MyPatient'

const Dashboard = () => {
  return (
    <div className='w-full h-full flex'>
        <div className='w-1/5 bg-gradient-to-br from-[#202275] to-[#6C6DA9] h-[100vh] min-w-[50px] '>
          <LeftSideBare />
        </div>
        <div className='md:w-3/5  w-4/5 bg-[#1D203E] h-[100vh] flex items-center justify-center'>
          <MyPatient />
        </div>
        <div className='w-1/5 bg-[#171825] h-[100vh] hidden md:block'>
          <RightSideBar />
        </div>
    </div>
  )
}

export default Dashboard