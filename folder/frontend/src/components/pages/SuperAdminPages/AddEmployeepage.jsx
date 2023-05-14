import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getallroles } from '../../api';
import { register } from '../../api';

import '../UserRegSignIn.css'

const initialValues = {
    name: "",
    email: "",
    pincode: "",
    post: "",
    username: "",
    housename: "",
    district: "",
    phonenumber: "",
    password: "",
    confirm_password: ""
};
export default function AddEmployeepage() {

    const [roles, setRoles] = useState();
    const [values, setValues] = useState(initialValues);
    const [gender, setGender] = useState("");
    const [selectedDate, setSelectedDate] = useState(null)
    const [adderr, setadderr] = useState(false);
    const [roleSelected,setRoleselected]=useState()

    useEffect(() => {
        getallroles()
            .then((response) => {
                let allroles = [];
                response.data.map((item) => {
                    allroles.push({ "id": item.Id, "role": item.Rolename })
                })
                console.log(allroles);
                setRoles(allroles);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const addEmployees= async()=>{
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
            roleId:parseInt(roleSelected)
       };
       console.log(regdetails);
       await register(regdetails)
       .then((response)=>{
        setadderr(false);
        window.location = '/employeelist'

      })
      .catch((err)=>{
        setValues(initialValues);
        setadderr(true);
        console.log(err);

      })
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Add Employees</h2>
            {adderr && <div><h3>Registration error try once more</h3></div>}
            <form>
                <p>
                    <label>Name</label><br />
                    <input type="text" name="name" value={values.name}
                        onChange={handleInputChange} required />
                </p>
                <p>
                    <label>Dateofbirth</label><br />
                    <input type='date' onChange={e => { setSelectedDate(e.target.value) }} />
                </p>
                <p>
                    <label>Email</label><br />
                    <input type="email" name="email" value={values.email}
                        onChange={handleInputChange}></input>
                </p>
                <p>
                    <label>Gender</label><br />
                    <label>
                        <input type="radio" name="gender" value="male" onChange={(e) => { setGender(e.target.value) }} />Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female" onChange={(e) => { setGender(e.target.value) }} />Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="others" onChange={(e) => { setGender(e.target.value) }} />Others
                    </label>
                </p>
                <p>
                    <label>House name</label><br />
                    <input type="text" name="housename" value={values.housename}
                        onChange={handleInputChange} required />
                </p>
                <p>
                    <label>pincode</label><br />
                    <input type="text" name="pincode" pattern="[0-9]{6}" maxlength="6" value={values.pincode}
                        onChange={handleInputChange}></input>
                </p>
                <p>
                    <label>Post</label><br />
                    <input type="text" name="post" required value={values.post}
                        onChange={handleInputChange} />
                </p>
                <p>
                    <label>District</label><br />
                    <input type="text" name="district" value={values.district}
                        onChange={handleInputChange} required />
                </p>
                <p>
                    <label>Phone number</label><br />
                    <input type="text" name="phonenumber" pattern="[0-9]{10}" maxlength="10" value={values.phonenumber}
                        onChange={handleInputChange} required></input>
                </p>
                <p>
                    <label>Username</label><br />
                    <input type="text" name="username" value={values.username}
                        onChange={handleInputChange} required />
                </p>
                <p>
                    <label>Password</label><br />
                    <input type="password" name="password" value={values.password}
                        onChange={handleInputChange} requiredc />
                </p>
                <p>
                    <label>Confirm Password</label><br />
                    <input type="password" name="confirm_password" value={values.confirm_password}
                        onChange={handleInputChange} requiredc />
                </p>
                <p>
                    <label for="role">Choose the role:</label>

                    <select name="role" id="role" onChange={(e)=>{setRoleselected(e.target.value)}}>
                         {roles?.map((item)=>{
                            return(<option value={item.id}>{item.role}</option>)
                         })}
                    </select>
                </p>
                <p>
                    <button id="sub_btn" type="button" onClick={addEmployees}>AddEmployee</button>
                </p>
            </form>
        </div>
    )

}