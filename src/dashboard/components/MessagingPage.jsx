import React,{useState,useEffect} from 'react'
import {sendMessage,threeDots} from '../assets/assets'
import axios from 'axios'

const MessagingPage = () => {
    /*const [generalChat, setgeneralChat] = useState([])
    const [userData, setuserData] = useState(null)
    const [currentMsg, setcurrentMsg] = useState();
    function handleMessageChange(value){
        setcurrentMsg(value)
    }
    async function getMessages(){
        const {data} = await axios.get('http://localhost:3000/api/generalChat')
        setgeneralChat(data)
    }
    async function sendMessages(sender,msg){
        const {data} = await axios.post('http://localhost:3000/api/generalChat',{contennues:msg,id_Exéditeur:sender})
        console.log(data);
        setcurrentMsg('')
        console.log('message send')
    }*/
    const [userData, setuserData] = useState({});
    const [fetchedMessages, setfetchedMessages] = useState(null);
    useEffect(()=>{
      const d = JSON.parse(localStorage.getItem('user'));
      axios.get(`${import.meta.env.VITE_API}/api/message`).then((res)=>{console.log(res.data);setfetchedMessages(res.data)}) 
      console.log(d.contacts);
      setuserData(d);  
    },[fetchedMessages])
    const [selectedFreind, setselectedFreind] = useState(null);
    const [message, setmessage] = useState('')

    async function sendMessages(sender,reciver,msg) {
      console.log(sender,reciver)
      console.log(msg);
      axios.post(`${import.meta.env.VITE_API}/api/message`,{sender:sender,reciver:reciver,msg:msg}).then((res)=>{
        console.log(res.data)
      });
      setmessage('')
    }
    async function deleteMessage(msgId,userID){
        console.log('clicked')
        const {data} = await axios.delete(`${import.meta.env.VITE_API}/api/mymessage/${userID}/${msgId}`)
        console.log(data)
    }
    function handleMessageChange(value){
        setmessage(value)
    }
    const messages =[
        {
            user :'amine',
            msg:'hello man sdsd sdsdsdsdsdsdsds sd sd sd  sdsds'
        },
        {
            user :'ramy',
            msg:'hello amine'
        },
        {
            user :'amine',
            msg:'fine and you'
        },
        {
            user :'ramy',
            msg:'i am  doing great'
        },
        {
            user :'amine',
            msg:'hello man sdsd sdsdsdsdsdsdsds sd sd sd  sdsds'
        },
        {
            user :'ramy',
            msg:'hello amine'
        },
        {
            user :'amine',
            msg:'fine and you'
        },
        {
            user :'ramy',
            msg:'i am  doing great'
        },
        {
            user :'amine',
            msg:'hello man sdsd sdsdsdsdsdsdsds sd sd sd  sdsds'
        },
        {
            user :'ramy',
            msg:'hello amine'
        },
        {
            user :'amine',
            msg:'fine and you'
        },
        {
            user :'ramy',
            msg:'i am  doing great'
        },
        {
            user :'amine',
            msg:'hello man sdsd sdsdsdsdsdsdsds sd sd sd  sdsds'
        },
        {
            user :'ramy',
            msg:'hello amine'
        },
        {
            user :'amine',
            msg:'fine and you'
        },
        {
            user :'ramy',
            msg:'i am  doing great'
        },
        {
            user :'amine',
            msg:'hello man sdsd sdsdsdsdsdsdsds sd sd sd  sdsds'
        },
        {
            user :'ramy',
            msg:'hello amine'
        },
        {
            user :'amine',
            msg:'fine and you'
        },
        {
            user :'ramy',
            msg:'i am  doing great'
        },
    ]
  return (
   <div className='h-screen w-full flex items-center gap-4 justify-center pt-8 '>
        <div className='h-[90%] w-16 bg-[#171825] rounded-[30px] hidden sm:block custom-shadow overflow-visible'>
            {
                userData.contacts && userData.contacts.map((e,i)=>(
                    <img src={e.avatar} className='w-16 h-16 rounded-full bg-slate-400 my-4'
                     onClick={()=>setselectedFreind(e)}
                     />                   
                ))
            }
        </div>
        <div className='h-screen sm:w-9/12 w-11/12 '>
            <div className='w-full h-16 bg-[#171825] rounded-[30px] mb-4 custom-shadow hidden sm:block'>
                {
                    selectedFreind && 
                        <div className='flex gap-4 ml-4 items-center text-white text-lg '>
                            <img src={selectedFreind.avatar} alt="" className='w-16 h-16 rounded-full '/>
                            <p>{selectedFreind.Nom} {selectedFreind.Prenom}</p>
                        </div>
                    
                }
            </div>
            <div className='w-full h-16 bg-[#171825] rounded-[30px] mb-4 custom-shadow block flex gap-4 px-4 sm:hidden '>
            {
                userData.contacts && userData.contacts.map((e,i)=>(
                    <img src={e.avatar} className='w-16 h-16 rounded-full bg-slate-400 sm:my-4'
                     onClick={()=>setselectedFreind(e)}
                     />                   
                ))
            }
        </div>
            <div className='w-full h-5/6 bg-[#171825] rounded-[30px] custom-shadow px-6 pt-2 sm:overflow-hidden '>
                <div className='h-5/6 w-full overflow-auto pr-1'>
                    {fetchedMessages && selectedFreind && fetchedMessages.map((e,i)=>(/*e.id_Exéditeur == userData._id && e.id_Destnataire == selectedFreind._id &&*/ <div key={i} className={`flex ${e.id_Exéditeur == userData._id ? 'justify-start':' flex-row-reverse'} gap-2 mb-2  text-white group`}>
                        <img src={e.id_Exéditeur == userData._id ? userData.avatar : selectedFreind.avatar} className='sm:w-12 sm:h-12 w-8 h-8  bg-gray-500 rounded-lg' />
                        <p 
                        className={`p-2 sm:max-w-[300px] max-w-[150px] text-sm sm:text-lg ${e.id_Exéditeur == userData._id ? 'bg-gradient-to-r from-indigo-700 to-indigo-400 rounded-tl-[85px] rounded-tr-[100px] rounded-br-[100px]' : 'rounded-tl-[100px] rounded-bl-[100px] rounded-br-[85px] bg-[#2C2F48]'}`}
                        > {e.contennues}</p>
                        {e.id_Exéditeur == userData._id && <img src={threeDots} className={`hidden group-hover:block w-4  cursor-pointer`}  onClick={()=>deleteMessage(e._id,userData._id)} />}
                    </div>))}
                </div>
                <div className='h-[55px] w-full mr-8 ml-2  rounded-tr-lg rounded-full relative'>
                    <input 
                    type="text" 
                    className='outline-none w-full h-full rounded-tr-lg rounded-full mt-2 bg-[#1D203E] pr-14 p-2 text-white '
                    value={message}
                    onChange={(e)=>handleMessageChange(e.currentTarget.value)}
                    />
                    <img src={sendMessage} alt="" className='w-12 absolute top-3 right-1 border border-white p-1 rounded-full'
                    onClick={()=>{sendMessages(userData._id,selectedFreind._id,message)}}/>
                </div>
            </div>
        </div>
   </div>
  )
}

export default MessagingPage