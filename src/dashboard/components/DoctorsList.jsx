import React, { useState ,useEffect} from 'react';
import InfoCard from './infocard'; // Import the new component
import axios from 'axios';

const DoctorsList = () => {
  const [doctorsList, setDoctorsList] = useState([]);
  async function getDoctors() {
    const {data} = await axios.get('http://localhost:3000/api/getDoctors');
    setDoctorsList(data);
  }
  useEffect(()=>{
    getDoctors();
  },[]);

  return (
    
    <div className='w-full h-screen  mx-6 mt-16 overflow-x-hidden overflow-y-auto flex flex-wrap  justify-center pb-10'>
      
      {
        doctorsList && doctorsList.map((e)=>
          <InfoCard firstname={e.Nom} lastname={e.Prenom} role={e.role} id={e._id} avatar={e.avatar} />
        )
      }  


    </div>
  );
};


export default DoctorsList;
