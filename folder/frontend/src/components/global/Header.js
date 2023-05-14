import React from 'react';

import Logo from './header/Logo';
import Navigation from './header/Navigation';
import Basket from './header/Basket';
import SignIn from './header/SignIn';

const Header = () =>  {
    var role = localStorage.getItem("Role");
    return (
        <header>
            <div className="header-wrapper">
                <Logo />

                <div className="menu">
                    <Navigation />
                    {role =='User' && <Basket />}
                    <SignIn />
                </div>
            </div>
        </header>
    )
}

export default Header;