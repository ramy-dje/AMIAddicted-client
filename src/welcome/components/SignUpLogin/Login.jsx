import React, { useState } from "react";
import mannetteImage from './assets/mannette.png';
import axios from "axios";
import './Login.css'
import X from './assets/blackX.svg'
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const newObj = { ...values, [e.target.name]: e.target.value }
    setValues(newObj);
  }
  const handleSubmit = async (e) => {

    e.preventDefault();
    console.log(values);
    const {email,password} = values;
    const {data} = await axios.post(`${import.meta.env.VITE_API}/api/login`,{email,password});
    console.log(data);
    if(data){
      navigate('/')
    }
    const StringifiedUser = JSON.stringify({...data.user});
    localStorage.setItem('user',JSON.stringify({...data.user}));
    localStorage.setItem('session',JSON.stringify(data.session))
   
  }
  return (
    <section className='login relative'>
      <img src={X} alt="" className="absolute top-2 right-0 z-10 cursor-pointer" onClick={()=>navigate('/welcome')}/>
      <div className='blue-box'>
        <svg className="first-svg" xmlns="http://www.w3.org/2000/svg" width="644" height="613" viewBox="0 0 644 613" fill="none">
          <g filter="url(#filter0_f_6_44)">
            <path d="M276.939 42.623C381.439 172.623 93.4388 323.123 47.4388 250.623C-170.061 122.623 -215.561 160.123 -170.061 42.623C-253.061 -90.377 -44.5612 -244.877 93.4388 -161.377C147.939 -81.877 276.939 -72.2522 276.939 42.623Z" fill="#146B9C" />
          </g>
          <defs>
            <filter id="filter0_f_6_44" x="-532.4" y="-528.4" width="1175.41" height="1141.32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="171.7" result="effect1_foregroundBlur_6_44" />
            </filter>
          </defs>
        </svg>
        <div className="text-pink-box">
          <p>
            there is one Day <br /> and <br />there is Day One
          </p>
        </div>
        <img src={mannetteImage} className="mannette-1EL" alt="mannette" />

        <svg className="second-svg" xmlns="http://www.w3.org/2000/svg" width="676" height="667" viewBox="0 0 676 667" fill="none">
          <g filter="url(#filter0_f_6_42)">
            <path d="M308.939 571.623C413.439 701.623 125.439 852.123 79.4388 779.623C-138.061 651.623 -183.561 689.123 -138.061 571.623C-221.061 438.623 -12.5612 284.123 125.439 367.623C179.939 447.123 308.939 456.748 308.939 571.623Z" fill="#146B9C" />
          </g>
          <defs>
            <filter id="filter0_f_6_42" x="-500.4" y="0.600006" width="1175.41" height="1141.32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="171.7" result="effect1_foregroundBlur_6_42" />
            </filter>
          </defs>
        </svg>

      </div>


      <div className='white-box'>
        <svg className="first-svg-white" xmlns="http://www.w3.org/2000/svg" width="393" height="612" viewBox="0 0 393 612" fill="none">
          <g filter="url(#filter0_f_17_9)">
            <path d="M220.395 50.3494C315.353 175.053 53.65 319.422 11.8502 249.875C-185.79 127.09 -227.136 163.062 -185.79 50.3494C-261.212 -77.232 -71.7495 -225.438 53.65 -145.339C103.174 -69.0783 220.395 -59.8457 220.395 50.3494Z" fill="#146B9C" />
          </g>
          <defs>
            <filter id="filter0_f_17_9" x="-546.4" y="-511.4" width="1130.8" height="1122.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="171.7" result="effect1_foregroundBlur_17_9" />
            </filter>
          </defs>
        </svg>

        <svg className="second-svg-white" xmlns="http://www.w3.org/2000/svg" width="393" height="640" viewBox="0 0 393 640" fill="none">
          <g filter="url(#filter0_f_17_37)">
            <path d="M441.939 571.623C546.439 701.623 258.439 852.123 212.439 779.623C-5.06116 651.623 -50.5612 689.123 -5.06116 571.623C-88.0612 438.623 120.439 284.123 258.439 367.623C312.939 447.123 441.939 456.748 441.939 571.623Z" fill="#146B9C" />
          </g>
          <defs>
            <filter id="filter0_f_17_37" x="-367.4" y="0.600006" width="1175.41" height="1141.32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="171.7" result="effect1_foregroundBlur_17_37" />
            </filter>
          </defs>
        </svg>


        <div className="content">

          <h2>Log In</h2>

          <div className="form">

            <form action="" onSubmit={handleSubmit}>

              <div className="inputA">
                <label htmlFor="" className="form-label">Email</label>
                <input type="email" name="email" onChange={handleChange} required />
              </div>

              <div className="inputA">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" name="password" onChange={handleChange} required />
              </div>

              <div className="button_sub">
                <input type="submit" value="Log in" />
              </div>

            </form>

          </div>

          <div className="User">
            <p>Don't have an account ? <span className="cursor-pointer" onClick={()=>navigate('/signup')}> Signup</span></p>
          
          </div>

        </div>

      </div>

    </section>


  );
}

export default Login;

