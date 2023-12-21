import React from 'react'
import RightSideBar from './RightSideBar'
import LeftSideBare from './LeftSideBare'

const Dashboard = () => {
  return (
    <div className='w-full h-full flex'>
        <div className='w-1/5 bg-gradient-to-br from-[#202275] to-[#6C6DA9] h-[100vh] min-w-[50px] '>
          <LeftSideBare />
        </div>
        <div className='md:w-3/5  w-4/5 bg-[#1D203E] h-[100vh]'></div>
        <div className='w-1/5 bg-[#171825] h-[100vh] hidden md:block'>
          <RightSideBar />
        </div>
    </div>
  )
}

export default Dashboard