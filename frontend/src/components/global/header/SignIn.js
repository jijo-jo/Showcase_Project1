import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Button } from 'antd';


const SignIn = (props) =>  {
    const handlelogout = ()=>{
        localStorage.clear();
        window.location = '/'
    }
    return (
          <Button onClick={handlelogout}>SignOut</Button>
    )
}

export default SignIn;