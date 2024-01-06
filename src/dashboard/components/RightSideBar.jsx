import React,{useEffect,useState} from 'react'
import {rightSideBarIcons} from '../constants/Dashboard'
import { Link } from 'react-router-dom'
import axios  from 'axios'
import timeago from 'time-ago'

const RightSideBar = () => {
    const [notifications, setnotifications] = useState([]);
    const [userData, setuserData] = useState(null)
    async function getUserData(){
        const parsedData =await JSON.parse(localStorage.getItem('user'))
        setuserData(parsedData)
        console.log(parsedData)
        getNotifications(parsedData._id)
    }
    async function getNotifications (id){
      const {data} = await axios.get('http://localhost:3000/api/getNotifications/'+id)
      data && setnotifications(data);
      console.log(data);
    }
  
    useEffect(()=>{
      getUserData()
    },[]);
    
  return (
    <div className='flex h-screen flex-col px-4'>
        <div className='flex justify-between border-b border-gray-700 text-white h-8 p-1'>
            {
                rightSideBarIcons.map((e,i)=>(
                    <Link to={e.link}>
                        <img src={e.icon} key={i}/>
                    </Link>
                  
                ))
            }
        </div>
        <div className='flex justify-center items-center h-3/12'>
            {userData && <div className='text-center pt-2'>
                <img src={userData.avatar} className='w-full h-28 w-28 bg-slate-500' style={{clipPath:'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}/>
                <p className='text-white text-lg'>{userData.Nom} {userData.Prenom}</p>
                <p className='text-gray-600'>{userData.email}</p>
            </div>}
            
        </div>
        <div className='w-full h-[550px] overflow-hidden '>
            <div className='flex justify-between text-gray-500 mb-2'>
                <p>My Contacts</p>
                <Link to={'/ChatPage'}><p className='cursor-pointer'>see all</p></Link>
            </div>
            <div className='h-[88%] pr-1 overflow-auto'>
                {
                userData  && userData.contacts.map((e)=> <div className='flex gap-2 p-2 bg-[#2a2c44] rounded-md mb-2'>
                    <img src={e.avatar} alt='' className='w-10 h-10 bg-slate-500 rounded-full'/>
                    <div>
                        <p className=' text-white'>{e.Nom} {e.Prenom}</p>
                        <p className='text-gray-500 text-xs mt-[-5px]'>{e.role}</p>
                    </div>
                </div>
                )
                }
                
            </div>
        </div>
        <div className='w-full h-3/12 overflow-hidden'>
            <div className='flex justify-between text-gray-500 mb-2'>
                <p>Notifications</p>
                <Link to={'/Notifications'}><p className='cursor-pointer'>see all</p></Link>
            </div>
            <div className='w-full h-full pr-1 overflow-auto'>
                {notifications && notifications.map((e,i)=>(<div className='p-3 bg-[#2a2c44] rounded-md mb-2 relative overflow-hidden'>
                    <p className=' text-white pb-1'>{e.notification} </p>
                    <p className='text-gray-500 text-xs mt-[-5px] absolute bottom-1 right-2'>Client</p>
                    <p className='text-gray-500 text-xs mt-[-5px] absolute bottom-1 left-2'>{timeago.ago(e.date_alert)}</p>
                </div>))}
                
            </div>
        </div>
    </div>
  )
}

export default RightSideBar