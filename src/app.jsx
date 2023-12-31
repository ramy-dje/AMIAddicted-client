import React,{useEffect,useState,useLayoutEffect} from 'react'
import Dashboard from './dashboard/Dashboard';
import Welcome from './welcome/welcomePage';
import SignUp from './welcome/components/SignUpLogin/Sign'
import Login from './welcome/components/SignUpLogin/Login'
import {Route,Routes,useNavigate} from 'react-router-dom'

const app = () => {
    const navigate = useNavigate();
    const [userData, setuserData] = useState(null)
    async function getUserData(){
        const data = await JSON.parse(localStorage.getItem('user'));
        setuserData(data)
        console.log(data)
    }
    useLayoutEffect(()=>{
        getUserData()
        if(userData){
            navigate('/')
        }else{
            navigate('/welcome')
        }
    },[userData])
    return (
        <div>
            <Routes>
                <Route path='welcome' Component={Welcome } />
                <Route path='/*'  Component={Dashboard} />
                <Route path='signup' Component={SignUp} />
                <Route path='login' Component={Login} />
            </Routes>

        </div>
    )
}

export default app