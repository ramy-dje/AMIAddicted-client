import React,{useState,useEffect} from 'react'
import { deleteIcon ,addUser,groupusers,settings,scoreOfPrediction} from '../assets/assets'
import axios from 'axios'
import { useParams ,useNavigate} from 'react-router-dom'



const MyPatient = () => {
    const {id} = useParams();
    const [userData, setUserData] = useState(null);
    const [isChangingDoctor, setisChangingDoctor] = useState(true)
    const [surveyList, setsurveyList] = useState([])
    const [userSurvey, setuserSurvey] = useState(null)
    
    const navigate = useNavigate()

    const [myAccount, setmyAccount] = useState(null)
    async function getMe(){
        const parsedData =await JSON.parse(localStorage.getItem('user'))
        setmyAccount(parsedData)
        console.log(parsedData)
        
    }
    async function createNotification(idUser,notification){
        const {data} = await axios.post(`${import.meta.env.VITE_API}/api/createNotification`,{idUser,notification})
        console.log(data)
    }

    async function AddSurveyToPatient(userId,survey){

        const {data} = await axios.post(`${import.meta.env.VITE_API}/api/create/SurveyToUser`,{userId,survey});
        console.log(data)
        createNotification(userId,'new survey is added for you')
    }
    async function getUserSurvey(userId){
        const {data} = await axios.get(`${import.meta.env.VITE_API}/api/get/SurveyToUser/${userId}`)
        setuserSurvey(data)
        console.log(data)
    }
    async function deleteUserSurvey(id){
        const {data} = await axios.delete(`${import.meta.env.VITE_API}/api/delete/SurveyToUser/${id}`)
        console.log(data)
        createNotification(id,'a survey is deleted ')
    }


    async function getSurvey(){
      const {data} = await axios.get(`${import.meta.env.VITE_API}/api/getNewQst`)
      setsurveyList(data[0].surveysList)
    } 
    async function getUser(){
        const {data} = await axios.get(`${import.meta.env.VITE_API}/api/getUser/${id}`);
        setUserData(data)
        console.log(data)
    }
    const [doctorsList, setDoctorsList] = useState([]);
    async function getDoctors() {
        const {data} = await axios.get(`${import.meta.env.VITE_API}/api/getDoctors`);
        setDoctorsList(data);
       // console.log(data)
    }
    
      async function sendData(Doc,Patient) {
        const res = await axios.put(`${import.meta.env.VITE_API}/api/addDoctorContact`,{Doc,Patient});
        const res2 = await axios.put(`${import.meta.env.VITE_API}/api/addPatientContact`,{Doc,Patient});
        createNotification(Doc._id,'a new patient is added for you ')
        createNotification(Patient._id,'a new doctor is added for you ')
        console.log(res);
        console.log(res2);
        console.log('c es bon')
       
      }
    useEffect(()=>{
        getMe();
    },[])  
    useEffect(()=>{
      getUser();
      getDoctors();
      getSurvey();
      userData && getUserSurvey(userData._id)
    },[userData])  
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
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-5 items-center text-white mb-2'>
                            <img src={groupusers} alt="" className='w-10' />
                            <h2 className='text-2xl'>My doctors</h2>
                        </div>
                        <img src={settings} alt="" className='cursor-pointer'  onClick={()=>setisChangingDoctor(true)}/>
                    </div>    
                    <div className='overflow-y-auto overflow-x-hidden h-[90px] pr-1 pb-2 '>
                        {
                            userData && userData.contacts.map((e,i)=>(
                                <DoctorCard key={i} userData={userData} doctor={e} isDelete={true}  myAccount={myAccount}/>
                            ))
                        }
                    
                    </div>
                    <div>
                        <div className='flex justify-between items-end'>
                            <h2 className='text-white text-2xl'>My survey</h2>
                            <img src={settings} alt="" className='cursor-pointer' onClick={()=>setisChangingDoctor(false)}/>
                        </div>
                        {userSurvey && userSurvey.map((e)=><div  className=' w-[250px] text-white p-2 h-[50px] mt-2 bg-[#2A2C44] flex rounded-lg items-center justify-between pr-2 mb-2'>
                            {e.survey.listName}
                            <div className='flex items-center gap-1'>
                                <img src={scoreOfPrediction} onClick={()=>navigate('/SurveyResult/'+userData._id)} alt="" className='cursor-pointer w-4' /> 
                                <img src={deleteIcon} onClick={()=>deleteUserSurvey(e._id)} alt="" className='cursor-pointer' /> 
                            </div>
                        </div>)}
                    </div>
                </div>

               {/*(myAccount && myAccount.role == 'medcin' ) && (isChangingDoctor */myAccount && myAccount.role != 'medcin'? <div className=' '>
                    <div className='flex  items-center text-white mb-2'>
                        <input 
                        type="text"  
                        className='w-[220px] h-[50px]  text-xl bg-transparent rounded-lg outline-none' 
                        placeholder='type the doctor name' />
                        <img src={addUser} alt="" className='w-10'/>
                    </div>
                    <div className='overflow-auto h-[200px]'>
                     {
                        doctorsList && doctorsList.map((e,i)=>(
                            <div onClick={()=>sendData(e,userData)}><DoctorCard key={i} userData={userData} doctor={e} isDelete={false} /></div>
                        ))
                     }   
                    
                    
                    </div>

                    </div> 
                    : 
                    <div className='overflow-y-auto h-[300px] '>
                        <div className='flex  items-center text-white mb-2'>
                            <input 
                            type="text"  
                            className='w-[220px] h-[50px]  text-xl bg-transparent rounded-lg outline-none' 
                            placeholder='type the survey name' />
                            <img src={scoreOfPrediction} alt="" className='w-10'/>
                        </div>
                    {
                          surveyList && surveyList.map((e)=>(
                            <div 
                            onClick={()=>AddSurveyToPatient(userData._id,e)}
                            className='w-[250px] cursor-pointer text-white p-2 h-[50px] mt-2 bg-[#2A2C44] flex rounded-lg items-center justify-between pr-2 mb-2'>
                                {e.listName}
                            </div>)
                          )
                    }
                    </div>//)
                }
                
            </div>
    </div>
    )
    }

    function DoctorCard({doctor,isDelete,userData,myAccount}) {
    async function deletePatients(Doc,Patient){
        const res = await axios.put(`${import.meta.env.VITE_API}/api/deleteDoctorContact`,{Doc,Patient});
        const res2 = await axios.put(`${import.meta.env.VITE_API}/api/deletePatientContact`,{Doc,Patient});
        console.log(res);
        console.log('c es bon')
    }
    return (
        <div className='w-[250px] h-[50px]  bg-[#2A2C44] flex rounded-lg items-center justify-between pr-2 mb-2'>
            <div className='h-full flex items-center gap-2'>
                <img src={doctor.avatar} className='w-12 h-full bg-gray-400 rounded-tr-full'/>
                <div className='text-white'>
                    <p>{doctor.Nom} {doctor.Prenom}</p>
                    <p className='text-sm mt-[-4px] text-[#989898]'>{doctor.email}</p>
                </div>
            </div>
            {(myAccount && myAccount.role == 'admin') && <img src={deleteIcon} onClick={()=>deletePatients(doctor,userData)} alt="" className='cursor-pointer'/>}
        </div>
    )
}


export default MyPatient