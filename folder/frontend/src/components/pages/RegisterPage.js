import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { register } from '../api';

import './UserRegSignIn.css'
const initialValues = {
    name: "",
    email: "",
    pincode: "",
    post: "",
    username:"",
    housename:"",
    district: "",
    phonenumber: "",
    password:"",
    confirm_password:""

};

export default function RegisterPage() {
    const [values, setValues] = useState(initialValues);
    const [gender,setGender] = useState("");
    const [selectedDate, setSelectedDate] = useState(null)
    const [registererr,setRegistererr] =useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };
    const handleregister = async()=>{
        let regdetails={
            name:values.name,
            dob:selectedDate,
            gender:gender ,
            email:values.email,
            housename:values.housename,
            pincode:values.pincode,
            postoffice:values.post,
            district:values.district,
            phone:values.phonenumber,
            username:values.username,
            password:values.password,
            roleId:4
       };
       console.log(regdetails);
       await register(regdetails)
       .then((response)=>{
        setRegistererr(false);
        window.location = '/'

      })
      .catch((err)=>{
        setValues(initialValues);
        setRegistererr(true);
        console.log(err);

      })

    }
    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            {registererr && <div><h3>Registration error try once more</h3></div>}
            <form action="/home">
                <p>
                    <label>Name</label><br/>
                    <input type="text" name="name" value={values.name}
                     onChange={handleInputChange} required/>
                </p>
                <p>
                    <label>Dateofbirth</label><br/>
                    <input type='date' onChange={e=>{setSelectedDate(e.target.value)}}/>
                </p>
                <p>
                    <label>Email</label><br/>
                    <input type="email" name="email" value={values.email}
            onChange={handleInputChange}></input>
                </p>
                <p>
                    <label>Gender</label><br/>
                    <label>
                       <input type="radio" name="gender" value="male" onChange={(e)=>{setGender(e.target.value)}} />Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female" onChange={(e)=>{setGender(e.target.value)}}/>Female                       
                    </label>
                    <label>
                        <input type="radio" name="gender" value="others" onChange={(e)=>{setGender(e.target.value)}}/>Others
                    </label>
                </p>
                <p>
                    <label>House name</label><br/>
                    <input type="text" name="housename" value={values.housename}
            onChange={handleInputChange} required />
                </p>
                <p>
                    <label>pincode</label><br/>
                    <input type="text" name="pincode" pattern="[0-9]{6}" maxlength="6" value={values.pincode}
            onChange={handleInputChange}></input>
                </p>
                <p>
                    <label>Post</label><br/>
                    <input type="text" name="post" required value={values.post}
            onChange={handleInputChange}/>
                </p>
                <p>
                    <label>District</label><br/>
                    <input type="text" name="district" value={values.district}
            onChange={handleInputChange} required />
                </p>
                <p>
                    <label>Phone number</label><br/>
                    <input type="text" name="phonenumber" pattern="[0-9]{10}" maxlength="10" value={values.phonenumber}
            onChange={handleInputChange} required></input>
                </p>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="username" value={values.username}
                     onChange={handleInputChange} required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password"  value={values.password}
            onChange={handleInputChange} requiredc />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="confirm_password" value={values.confirm_password}
            onChange={handleInputChange} requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
            
                <p>
                    <button id="sub_btn" type="button" onClick={handleregister}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/home">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}