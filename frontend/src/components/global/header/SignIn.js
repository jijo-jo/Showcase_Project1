import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';


const SignIn = (props) =>  {
    return (
        <div className="menu-item login">
            <NavLink to="/login#app">
                <span className="login">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                </span>
            </NavLink>
        </div>
    )
}

export default SignIn;