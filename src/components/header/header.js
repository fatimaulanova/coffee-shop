import React from 'react';
import {BsFillCartCheckFill} from "react-icons/bs";

const Header = () => {
    return (
        <header id='header'>
            <div className="container">
                <div className="header">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, temporibus.</h1>
                    <BsFillCartCheckFill/>
                </div>
            </div>

        </header>
    );
};

export default Header;