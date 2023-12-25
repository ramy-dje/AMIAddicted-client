import React,{useState,useEffect} from 'react'
import './chatPage.css';
import axios from 'axios';

const ChatPage = () => {
  const [messages, setmessages] = useState([])
  const [myfrs,setmyfrs]=useState([
    {
      name : 'aaaa'
    },
    {
      name : 'aaaa'
    },
    {
      name : 'aaaa'
    },
  ])
  const [userData, setuserData] = useState({});
  const [fetchedMessages, setfetchedMessages] = useState(null);
 /* useEffect(()=>{
    const d = JSON.parse(localStorage.getItem('user'));
    axios.get('http://localhost:3000/api/message').then((res)=>{console.log(res.data);setfetchedMessages(res.data)}) 
    console.log(d.contacts);
    setuserData(d);  
  },[fetchedMessages])*/
  const [selectedFreind, setselectedFreind] = useState({});
  const [message, setmessage] = useState('')
  async function sendMessages(sender,reciver,msg) {
    console.log(sender,reciver)
    console.log(msg);
    axios.post('http://localhost:3000/api/message',{sender:sender,reciver:reciver,msg:msg}).then((res)=>{
      console.log(res.data)
    });

  }

  return (
    <section className='chat'>
      <div className='cardHeader'></div>

      <div className='contacts'>
        
      {
        userData.contacts && userData.contacts.map((e)=>(
          <div onClick={()=>{setselectedFreind({name:e.Nom,id:e._id});console.log(selectedFreind)}} className='mon-contact'>
              <p  style={{width:'30px',height:'30px',textAlign:'center',background:'blue',borderRadius:'1000px'}}>{e.Nom[0]}</p>
              <p>{e.Nom}</p>
          </div>  
        ))
      }
   
      </div>

      <div className='chat-container'>
        <div className='freind'>
          {selectedFreind.name}
        </div>
        <div className='messages'>
          {
           fetchedMessages && fetchedMessages.map((e)=>(
              <div style={{width:'100%',padding:'10px 10px',display:'flex',justifyContent: e.id_Exéditeur == userData._id ?'flex-end':'flex-start'}}>
                <p className={e.id_Exéditeur == userData._id ? 'me':'notme'}>{e.contennues}</p> 
              </div>
            ))
          }
        </div>
        <form onSubmit={(e)=>{e.preventDefault();sendMessages(userData._id,selectedFreind.id,message)}} >
          <input type="text" placeholder='send message' onChange={(e)=>setmessage(e.target.value)} />
          <button  ><i class="fa-solid fa-paper-plane"></i></button>
        </form>
      </div>
      
      {
        userData.contacts && userData.contacts.map((e)=>(
          <div onClick={()=>{setselectedFreind({name:e.Nom,id:e._id});console.log(selectedFreind)}} className='mon-contact'>
              <p  style={{width:'30px',height:'30px',textAlign:'center',background:'blue',borderRadius:'1000px'}}>{e.Nom[0]}</p>
              <p>{e.Nom}</p>
          </div>  
        ))
      }

      {selectedFreind.name && <div className='chat-container'>

        <div className='freind'>
          {selectedFreind.name}
        </div>
        
        <div className='messages'>
          {
           fetchedMessages && fetchedMessages.map((e)=>(
              <div style={{width:'100%',padding:'10px 10px',display:'flex',justifyContent: e.id_Exéditeur == userData._id ?'flex-end':'flex-start'}}>
                <p className={e.id_Exéditeur == userData._id ? 'me':'notme'}>{e.contennues}</p> 
              </div>
            ))
          }
        </div>
        <form onSubmit={(e)=>{e.preventDefault();sendMessages(userData._id,selectedFreind.id,message)}} >
          <input type="text" placeholder='send message' onChange={(e)=>setmessage(e.target.value)} />
          <button  ><i className="fa-solid fa-paper-plane"></i></button>
        </form>
      </div>}
    </section>
  );
};

export default ChatPage;
