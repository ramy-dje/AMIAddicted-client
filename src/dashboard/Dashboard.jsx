import React from 'react'
import RightSideBar from './components/RightSideBar'
import LeftSideBare from './components/LeftSideBare'
import MyDoctor from './components/MyDoctors'
import MyPatient from './components/MyPatient'
import GeneralChat from './components/GeneralChat'
import Questions from './components/Questions'
import UpdateQuestions from './components/UpdateQuestions'
import UpdateSurveys from './components/UpdateSurveys'
import Invitations from './components/invitations'
import ChatPage from './components/chatPage/ChatPage'
import Notifications from './components/notifications/Notifications'
import Edit from './components/Update/edit'
import DoctorsList from './components/DoctorsList'
import PatientsList from './components/PatientsList'
import {Route,Routes} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='w-full h-screen flex overflow-hidden'>
        <div className='sm:w-1/5 bg-gradient-to-br from-[#202275] to-[#6C6DA9] h-[100vh] w-[50px]  '>
          <LeftSideBare />
        </div>
        <div className='md:w-3/5  w-full bg-[#1D203E] h-[100vh] flex items-center justify-center'>
          <Routes>
            <Route path='doctorsList/MyDoctor' Component={MyDoctor}/>
            <Route path='PatientsList/MyPatient' Component={MyPatient}/>
            <Route path='GeneralChat' Component={GeneralChat}/>
            <Route path='Questions' Component={Questions}/>
            <Route path='UpdateSurveys/UpdateQuestions' Component={UpdateQuestions}/>
            <Route path='UpdateSurveys' Component={UpdateSurveys}/>
            <Route path='Invitations' Component={Invitations}/>
            <Route path='ChatPage' Component={ChatPage}/>
            <Route path='Notifications' Component={Notifications}/>
            <Route path='Edit' Component={Edit}/>
            <Route path='PatientsList' Component={PatientsList}/>
            <Route path='doctorsList' Component={DoctorsList}/>
          </Routes>
          
        </div>
        <div className='w-1/5 bg-[#171825] h-[100vh] hidden md:block'>
          <RightSideBar />
        </div>
    </div>
  )
}

export default Dashboard