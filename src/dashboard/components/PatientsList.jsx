import React,{ useState ,useEffect} from 'react';
import InfoCard from './infocard'; // Import the new component
import axios from 'axios';
import { Link } from 'react-router-dom';

const PatientsList = () => {
  const [patientsList, setpatientsList] = useState([]);
  async function getPatients() {
    const {data} = await axios.get(`${import.meta.env.VITE_API}/api/getPatients`);
    setpatientsList(data);
  }
  useEffect(()=>{
    getPatients();
  },[]);

  return (
    <div className='w-full h-screen  mx-6 mt-16 overflow-x-hidden overflow-y-auto flex flex-wrap  justify-center pb-10'>
      {
        patientsList && patientsList.map((e)=>
          <Link to={'MyPatient/'+e._id}> <InfoCard firstname={e.Nom} lastname={e.Prenom} role={e.role} id={e._id} avatar={e.avatar} /> </Link>
        )
      }  
      
    </div>
  );
};


export default PatientsList;
