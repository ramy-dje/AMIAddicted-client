import React, { useState, useEffect } from "react";
import './Edit.css';
import img from '/tst.jpg'
import axios from "axios";


function Edit() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    birthday: "",
    password: "",
    avatar: ""
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    if(data){ 
    setValues({ id: data._id, firstname: data.Nom, lastname: data.Prenom, birthday: data.dt_Naiss, password: data.password, avatar: data.avatar })
    console.log(data)
    }
  }, []);

  const handleChange = (e) => {
    const newObj = { ...values, [e.target.name]: e.target.value }
    setValues(newObj);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.put(`http://localhost:3000/api/updateUser/${values.id}`, {
      Nom: values.firstname,
      Prenom: values.lastname,
      password: values.password,
      dt_Naiss: values.birthday,
      avatar: values.avatar
    })
    // localStorage.setItem('user',data.user)
    console.log(data.user);

    const localData = JSON.parse(localStorage.getItem('user'))
    if (localData && data.user) {
      localData.Nom = values.firstname,
        localData.Prenom = values.lastname,
        localData.password = values.password,
        localData.dt_Naiss = values.birthday,
        localData.avatar = values.avatar
      localStorage.setItem('user', JSON.stringify(localData))
    }
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

    <section className="main">
      <div className="container">

        <p>Change <br />picture</p>

        <div className="form">

          <form action="" onSubmit={handleSubmit}>

            <div className="image">
              <label className="userImage" htmlFor="avatar"> <img className="pic" src={ values.avatar} alt="" /> </label>
              <input className="userImage" type="file" id="avatar" hidden onChange={handleFileChange} />

              {console.log('avatar:' + values.avatar)}

            </div>

            <div className="column">

              <h1>Update Profile</h1>
              <div className="input-inside">
                <input type="text" value={values.firstname} name="firstname" onChange={handleChange} required />
                <label className="f-label" htmlFor="">First Name</label>

              </div>

              <div className="input-outside">
                <input type="text" value={values.lastname} name="lastname" onChange={handleChange} required />
                <label className="f-label" htmlFor="">Last Name</label>
              </div>

              <div className="input-outside">
                <input type="password" value={values.password} name="password" onChange={handleChange} required />
                <label className="f-label" htmlFor="" >Password</label>
              </div>

              <div className="input-inside">
                <input type="date" value={values.birthday} name="birthday" onChange={handleChange} required />
                <label className="last-label" htmlFor="" >Birthday</label>
              </div>

              <div className="button-sub">
                <input type="submit" value="Update" />
              </div>

            </div>

          </form>

        </div>

      </div>

    </section>

  );
}

export default Edit;
