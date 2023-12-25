import React,{ useState ,useEffect} from 'react';
import InfoCard from './infocard'; // Import the new component
import axios from 'axios';

const PatientsList = () => {
  const [patientsList, setpatientsList] = useState([]);
  async function getPatients() {
    const {data} = await axios.get('http://localhost:3000/api/getPatients');
    setpatientsList(data);
  }
  useEffect(()=>{
    getPatients();
  },[]);

  return (
    <div className='w-full h-screen  mx-6 mt-16 overflow-x-hidden overflow-y-auto flex flex-wrap  justify-center pb-10'>
      {
        patientsList && patientsList.map((e)=>
          <InfoCard firstname={e.Nom} lastname={e.Prenom} role={e.role} id={e._id} avatar={e.avatar} />
        )
      }  
      
    </div>
  );
};


export default PatientsList;
