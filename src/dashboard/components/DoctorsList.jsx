import React, { useState ,useEffect} from 'react';
import InfoCard from './infocard'; // Import the new component
import axios from 'axios';
import { Link } from 'react-router-dom';

const DoctorsList = () => {
  const [doctorsList, setDoctorsList] = useState([]);
  async function getDoctors() {
    const {data} = await axios.get('http://localhost:3000/api/getDoctors');
    setDoctorsList(data);
    console.log(data)
  }
 
  useEffect(()=>{
    getDoctors();
  },[]);

  return (
    
    <div className='w-full h-screen  mx-6 mt-16 overflow-x-hidden overflow-y-auto flex flex-wrap  justify-center pb-10'>
      
      {
        doctorsList && doctorsList.map((e)=>
         <Link to={'MyDoctor/'+e._id}> <InfoCard firstname={e.Nom} lastname={e.Prenom} role={e.role} id={e._id} avatar={e.avatar} /> </Link>
        )
      }  


    </div>
  );
};


export default DoctorsList;
