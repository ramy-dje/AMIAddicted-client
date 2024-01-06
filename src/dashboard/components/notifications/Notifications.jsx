import React,{useState,useEffect} from 'react'
import './notifications.css'
import axios from 'axios'
import timeago from 'time-ago'

const Notifications = () => {
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
    <section className='notification h-screen overflow-y-auto'>
       {notifications && notifications.map((e)=> <Notification
        message={e.notification}
        time={timeago.ago(e.date_alert)}
        seen={e.vue + ''}
        />)}
        
       
    </section>
  )
}


const Notification = ({message,time,seen}) => {
  return (
    <div className='notif custom-shadow'>
      <p className='message'>{message}</p>
      <div className='desc'>
        <p className='time'>{time}</p>
        <p className='seen'>{seen?'seen':'not seen'}</p>
      </div>
    </div>
  )
}



export default Notifications