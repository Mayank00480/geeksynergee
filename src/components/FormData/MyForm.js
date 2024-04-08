import React, { useState } from 'react';
import {useNavigate }from 'react-router-dom'
const professions = ['Engineer', 'Doctor', 'Teacher', 'Artist', 'Lawyer'];

const MyForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phoneNumber: '',
    profession: '',
  });
  const [login , setLogin] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {


    e.preventDefault();
    if(!login){
      localStorage.setItem('login' , JSON.stringify(formData));
      setLogin(true)
    }
    else{
      const data = localStorage.getItem('login');
      const realData = JSON.parse(data);
      console.log(realData , 'data from local Storage');
      console.log(formData , 'current Data');
      if(realData.password === formData.password && realData.name === formData.name){
        console.log('loggedIn SuccessFully');
        navigate('/loggedIn')
      }
    }
     setFormData({
      name: '',
      password: '',
      email: '',
      phoneNumber: '',
      profession: '',
    })
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Profession:</label>
          <select
            name="profession"
            value={formData.profession}
            onChange={handleChange}
          >
            <option value="">Select Profession</option>
            {professions.map((profession, index) => (
              <option key={index} value={profession}>
                {profession}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">{login ? 'LogIn' : 'SignUp'}</button>
      </form>
    </div>
  );
};

export default MyForm;
