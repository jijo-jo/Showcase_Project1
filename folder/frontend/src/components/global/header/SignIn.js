import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Button } from 'antd';


const SignIn = (props) =>  {
    const handlelogout = ()=>{
        localStorage.clear();
        window.location = '/'
    }
    return (
        <div style={{paddingLeft:'10px'}}>
            <Button onClick={handlelogout}>SignOut</Button>
        </div>
          
    )
}

export default SignIn;