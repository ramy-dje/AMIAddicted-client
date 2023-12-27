import React,{useState,useEffect} from 'react'
import {sendMessage,threeDots} from '../assets/assets'
import axios from 'axios'

const GeneralChat = () => {
    const [generalChat, setgeneralChat] = useState([])
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
    }

    
    useEffect(()=>{
        getMessages();
        const parsedData = JSON.parse(localStorage.getItem('user'))
        setuserData(parsedData)
    },[])
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
    <div className='w-11/12 h-5/6 bg-[#171825] rounded-[30px] custom-shadow px-6 pt-2 sm:overflow-hidden '>
        <div className='h-5/6 w-full overflow-auto pr-1'>
            {generalChat && generalChat.map((e,i)=>(<div key={i} className={`flex ${e.id_Exéditeur == userData._id ? 'justify-start':' flex-row-reverse'} gap-2 mb-2  text-white group`}>
                <div className='sm:w-12 sm:h-12 w-8 h-8  bg-gray-500 rounded-lg'></div>
                <p 
                className={`p-2 sm:max-w-[300px] max-w-[150px] text-sm sm:text-lg ${e.id_Exéditeur == userData._id ? 'bg-gradient-to-r from-indigo-700 to-indigo-400 rounded-tl-[85px] rounded-tr-[100px] rounded-br-[100px]' : 'rounded-tl-[100px] rounded-bl-[100px] rounded-br-[85px] bg-[#2C2F48]'}`}
                > {e.contennues}</p>
                <img src={threeDots} className='hidden group-hover:block w-4  cursor-pointer' />
            </div>))}
        </div>
        <div className='h-[55px] w-full mr-8 ml-2  rounded-tr-lg rounded-full relative'>
            <input 
            type="text" 
            className='outline-none w-full h-full rounded-tr-lg rounded-full mt-2 bg-[#1D203E] pr-14 p-2 text-white '
            value={currentMsg}
            onChange={(e)=>handleMessageChange(e.currentTarget.value)}
            />
            <img src={sendMessage} alt="" className='w-12 absolute top-3 right-1 border border-white p-1 rounded-full'
             onClick={()=>sendMessages(userData._id,currentMsg)}/>
        </div>
    </div>
  )
}

export default GeneralChat