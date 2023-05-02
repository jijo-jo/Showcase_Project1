import React from 'react';

import Logo from './header/Logo';
import Navigation from './header/Navigation';
import Basket from './header/Basket';
import SignIn from './header/SignIn';

const Header = () =>  {
    return (
        <header>
            <div className="header-wrapper">
                <Logo />

                <div className="menu">
                    <Navigation />
                    <Basket />
                    <SignIn />
                </div>
            </div>
        </header>
    )
}

export default Header;