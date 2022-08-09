import React from 'react';
import logo from '../../asets/img/revo.svg'
import search from '../../asets/img/search.svg'
import basket from '../../asets/img/basket.svg'
import dark from '../../asets/img/dark.png'

const Header = () => {
    return (
        <header id='header'>
            <div className="container">
                <div className="header-general">
                   <div className="header-general__head">
                       <div className="header-general__logo">
                           <img src={logo} alt=""/>
                       </div>
                       <div className="header-general__search">
                           <input type="search" placeholder="search" />
                       </div>
                       <div className="header-general__btn">
                           <button>
                               <img src={search} alt=""/>
                           </button>
                       </div>
                        <div className="header-general__basket">
                            <img src={basket} alt="" className="header-general__basket" />
                        </div>
                       <div className="header-general__dark">
                           <img src={dark} alt="" className="header-general__dark"/>
                       </div>
                   </div>
                </div>
            </div>
        </header>
    );
};

export default Header;