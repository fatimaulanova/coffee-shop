import React from 'react';
import {BsFillCartFill} from "react-icons/bs";

const Header = () => {
    return (
        <header id='header'>
            <div className="container">
                <div className="header">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, temporibus.</h1>
                    <BsFillCartFill/>
                </div>
            </div>

        </header>
    );
};

export default Header;