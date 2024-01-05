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
import MessagingPage from './components/MessagingPage'
import Statistics from './components/Statistics'
import SurveyResult from './components/SurveyResult'
import {Link, Route,Routes} from 'react-router-dom'
import { rightSideBarIcons } from './constants/Dashboard'

const Dashboard = () => {
  return (
    <div className='w-full h-screen flex overflow-hidden'>
        <div className='sm:w-1/5 bg-gradient-to-br from-[#202275] to-[#6C6DA9] h-[100vh] w-[50px]  '>
          <LeftSideBare />
        </div>
        <div className='md:w-3/5  w-full bg-[#1D203E] h-[100vh] flex items-center justify-center relative'>
          <Routes>
            <Route path='doctorsList/MyDoctor/:id' Component={MyDoctor}/>
            <Route path='PatientsList/MyPatient/:id' Component={MyPatient}/>
            <Route path='GeneralChat' Component={GeneralChat}/>
            <Route path='SurveyResult/:id' Component={SurveyResult}/>
            <Route path='Questions' Component={Questions}/>
            <Route path='UpdateSurveys/UpdateQuestions/:listName' Component={UpdateQuestions}/>
            <Route path='UpdateSurveys' Component={UpdateSurveys}/>
            <Route path='Invitations' Component={Invitations}/>
            <Route path='ChatPage' Component={MessagingPage}/>
            <Route path='Notifications' Component={Notifications}/>
            <Route path='Edit' Component={Edit}/>
            <Route path='PatientsList' Component={PatientsList}/>
            <Route path='doctorsList' Component={DoctorsList}/>
            <Route path='MyStatistics' Component={Statistics}/>
          </Routes>
          <div className='w-full bg-transparent flex justify-center h-fit  md:hidden absolute bottom-0'>
              <div className='w-10/12 h-12 mb-2 bg-gradient-to-l from-[#20217581] to-[#6c6da986] flex justify-between items-center px-3 rounded-full'>
                {
                  rightSideBarIcons.map((e,i)=>(
                      <Link to={e.link}>
                          <img src={e.icon} key={i} className='w-8'/>
                      </Link>
                    
                  ))
                }
              </div>
          </div>
        </div>
        <div className='w-1/5 bg-[#171825] h-[100vh] hidden md:block'>
          <RightSideBar />
        </div>
    </div>
  )
}

export default Dashboard