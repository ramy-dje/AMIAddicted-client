import React,{useState,useEffect} from 'react'
import { deleteIcon ,addUser,groupusers} from '../assets/assets'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const MyDoctor = () => {
    const {id} = useParams();
    const [userData, setUserData] = useState(null);
    async function getUser(){
        const {data} = await axios.get('http://localhost:3000/api/getUser/'+id);
        setUserData(data)
        console.log(data)
    }
    const [patientsList, setpatientsList] = useState([])
    async function getPatients(){
    axios.get('http://localhost:3000/api/getPatients').then((res)=>{
      console.log(res.data)
      setpatientsList(res.data);
    });
    }
    useEffect(()=>{
        getUser();
        getPatients();
    },[])
   
      async function sendData(Doc,Patient) {
        const res = await axios.put('http://localhost:3000/api/addPatientContact',{Doc,Patient});
        console.log(res);
        console.log('c es bon')
       
      }  
  return (
   <div className='w-11/12 h-5/6 bg-[#171825] rounded-[30px] custom-shadow px-6 sm:overflow-hidden overflow-auto'>
        <div className='flex flex-wrap py-6 items-center gap-4 '>
            <img src={userData && userData.avatar} className='w-[200px] h-[200px] bg-gray-500 rounded-xl'/>
            <div>
                <h1 className='text-white text-4xl'>{userData && userData.Nom} {userData && userData.Prenom}</h1>
                <p className='text-[#ADABAB]'>{userData && userData.email}</p>
                <h2 className='text-[#ADABAB] text-2xl pt-2'>{userData && userData.role}</h2>
            </div>
        </div>
        <div className='flex  flex-wrap justify-between py-4 items-start'>
            <div>
                <div className='flex gap-5 items-center text-white mb-2'>
                    <img src={groupusers} alt="" className='w-10' />
                    <h2 className='text-2xl'>My patients</h2>
                </div>
                <div className='overflow-auto h-[215px]'>                   
                    {
                        userData && userData.contacts.map((e,i)=>(
                            <PatientCard key={i} userData={userData} patient={e} isDelete={true} />
                        ))
                    }
                </div>
            </div>

            <div className=' '>
                 <div className='flex  items-center text-white mb-2'>
                    <input 
                    type="text"  
                    className='w-[220px] h-[50px]  text-xl bg-transparent rounded-lg outline-none' 
                    placeholder='type the patient name' />
                    <img src={addUser} alt="" className='w-10'/>
                </div>
                <div className='overflow-auto h-[200px]'>
                {
                        patientsList && patientsList.map((e,i)=>(
                            <div onClick={()=>sendData(userData,e)}><PatientCard key={i} userData={userData} patient={e} isDelete={false} /></div>
                        ))
                     }  
                </div>

            </div>
            
        </div>
   </div>
  )
}

function PatientCard({patient,isDelete,userData}) {
    async function deletePatients(Doc,Patient){
        const res = await axios.put('http://localhost:3000/api/deletePatientContact',{Doc,Patient});
        console.log(res);
        console.log('c es bon')
      }
  return (
    <div className='w-[250px] h-[50px]  bg-[#2A2C44] flex rounded-lg items-center justify-between pr-2 mb-2'>
        <div className='h-full flex items-center gap-2'>
            <img src={patient.avatar} className='w-12 h-full bg-gray-400 rounded-tr-full'/>
            <div className='text-white'>
                <p>{patient.Nom} {patient.Prenom}</p>
                <p className='text-sm mt-[-4px] text-[#989898]'>{patient.email}</p>
            </div>
        </div>
        {isDelete && <img src={deleteIcon} onClick={()=>deletePatients(userData,patient)} alt="" className='cursor-pointer'/>}
    </div>
  )
}


export default MyDoctor