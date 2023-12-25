import React, { useState } from "react";
import mannetteImage from './assets/mannette.png';
import './Sign.css'

import axios from "axios";


function SignUp({ setActiveLink }) {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    birthday: "",
    role: "",
    email: "",
    password: "",
    avatar: ""
  });

  const handleChange = (e) => {
    const newObj = { ...values, [e.target.name]: e.target.value }
    setValues(newObj);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const { firstname: Nom, lastname: Prenom, gender: Gener, birthday: dt_Naiss, role: Autorisation, email, password, avatar } = values
    let res = null;
    if (Autorisation == 'admin') {
      res = await axios.post('http://localhost:3000/api/register/admin', { Nom, Prenom, Gener, dt_Naiss, Autorisation, email, password, avatar });
    } else if (Autorisation == 'medcin') {
      res = await axios.post('http://localhost:3000/api/register/doctor', { Nom, Prenom, Gener, dt_Naiss, Autorisation, email, password, avatar });
    } else if (Autorisation == 'patient') {
      res = await axios.post('http://localhost:3000/api/register/patient', { Nom, Prenom, Gener, dt_Naiss, Autorisation, email, password, avatar });

    }
    console.log(res.data)
    
  }

  async function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (reader.readyState == 2) {
          console.log(reader.result);
          const newObj = { ...values, avatar: reader.result }
          setValues(newObj);

        }
      }
      reader.readAsDataURL(file);
    }
  }

  return (
    <section className='main'>

      <div className='blue-box'>

        <div className="text-pink-box">
          <p>
            there is one Day <br /> and <br />there is Day One
          </p>
        </div>
        <img src={mannetteImage} className="mannette-1EL" alt="mannette" />

      </div>


      <div className='white-box'>

        <div className="content">

          <h2>Create Account</h2>

          <div className="form">

            <form action="" onSubmit={handleSubmit}>

              <div className="inputpic">
                <label htmlFor="">Add<br/>Picture</label>
                <input type="file" name="avatar" onChange={handleFileChange} accept="image/*" className="circle-input" />
              </div>

              {values.avatar && (
                <div className="inputpic">
                  <img className="circle-input" src={values.avatar} alt="Avatar Preview" />
                </div>
              )}


              <div className="flex_inputs">
                <div className="inputA">
                  <label htmlFor="" className="form-label">First Name</label>
                  <input type="text" className="form-input" name="firstname" onChange={handleChange} required />
                </div>

                <div className="inputA">
                  <label htmlFor="" className="form-label">Last Name</label>
                  <input type="text" className="form-input" name="lastname" onChange={handleChange} required />
                </div>
              </div>


              <div className="flex_inputs">

                <div className="inputA">
                  <label htmlFor="" className="form-label">Gender</label>
                  <select name="gender" onChange={handleChange} >
                    <option value="man">Male</option>
                    <option value="woman">Female</option>
                  </select>
                </div>

                <div className="inputA">
                  <label htmlFor="" className="form-label">Birthday</label>
                  <input type="date" name="birthday" onChange={handleChange} required />
                </div>

              </div>

              <div className="inputA">
                <label htmlFor="" className="form-label">Role</label>
                <select name="role" onChange={handleChange}>
                  <option value="admin">Admin</option>
                  <option value="patient">Patient</option>
                  <option value="medcin">Doctor</option>
                </select>

              </div>


              <div className="inputA">
                <label htmlFor="" className="form-label">Email</label>
                <input type="email" name="email" onChange={handleChange} required />
              </div>

              <div className="inputA">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" name="password" onChange={handleChange} required />
              </div>

              <div className="button_sub">
                <input type="submit" value="Sign Up" />
              </div>

            </form>

          </div>

          <div className="User">
            <p>Already have an account ?  <a href="#" onClick={() => setActiveLink('login')}>Login</a></p>
          </div>

        </div>

      </div>

    </section>


  );
}

export default SignUp;
