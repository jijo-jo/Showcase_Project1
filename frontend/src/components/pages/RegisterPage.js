import React from 'react'
import { Link } from 'react-router-dom'

import './UserRegSignIn.css'

export default function RegisterPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Name</label><br/>
                    <input type="text" name="name" required />
                </p>
                <p>
                    <label>Dateofbirth</label><br/>
                    <input type="date" name="dto" id="date_timepicker_end"></input>
                </p>
                <p>
                    <label>Email</label><br/>
                    <input type="email" name="email"></input>
                </p>
                <p>
                    <label>Gender</label><br/>
                    <label>
                       <input type="radio" name="gender" value="male"/>Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female"/>Female                       
                    </label>
                    <label>
                        <input type="radio" name="gender" value="others"/>Others
                    </label>
                    
                </p>
                <p>
                    <label>House name</label><br/>
                    <input type="text" name="housename" required />
                </p>
                <p>
                    <label>pincode</label><br/>
                    <input type="text" name="pincode" pattern="[0-9]{6}" maxlength="6"></input>
                </p>
                <p>
                    <label>Post</label><br/>
                    <input type="text" name="post" required />
                </p>
                <p>
                    <label>District</label><br/>
                    <input type="text" name="district" required />
                </p>
                <p>
                    <label>Phone number</label><br/>
                    <input type="text" name="phonenumber" pattern="[0-9]{10}" maxlength="10"></input>
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="confirm password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
            
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}