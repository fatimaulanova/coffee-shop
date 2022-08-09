import React from 'react';
import b1 from "../../asets/img/b1.png";
import b2 from "../../asets/img/b2.png";
import b3 from "../../asets/img/b3.png";
import b4 from "../../asets/img/b4.png";
import b5 from "../../asets/img/b5.png";
import b6 from "../../asets/img/b6.png";
import b7 from "../../asets/img/b7.png";
import b8 from "../../asets/img/b8.png";
import b9 from "../../asets/img/b9.png";
import b10 from "../../asets/img/b10.png";

const Breakfast = () => {
    return (
        <section id="breakfast">
            <div className="container">
                <div className="breakfast-general">
                    <div className="breakfast-general__slide">
                        <a href="#" className="breakfast-general__a">на главную</a>
                        <a href="#" className="breakfast-general__a" >завтраки</a>
                        <a href="#" className="breakfast-general__a" >coffee</a>
                        <a href="#" className="breakfast-general__a" >напитки</a>
                        <a href="#" className="breakfast-general__a" >суп</a>
                        <a href="#" className="breakfast-general__a" >чай</a>
                        <a href="#" className="breakfast-general__a" >салаты</a>
                        <a href="#" className="breakfast-general__a" >десерты</a>
                    </div>
                    <div className="breakfast-general__gen">
                        <div className="breakfast-general__block">
                            <img src={b1} alt=""/>
                            <h1>Блинчики с семгой</h1>
                            <h2>цена: 350 сом 3 шт</h2>
                            <div className="breakfast-general__btn">
                                <button className="breakfast-general__basket">в корзину</button>
                                <button className="breakfast-general__num">-</button>
                                <div className="breakfast-general__sum">
                                    1
                                </div>
                                <button className="breakfast-general__num">+</button>
                            </div>
                        </div>
                        <div className="breakfast-general__block">
                            <img src={b2} alt=""/>
                            <h1>Блинчики с мясом </h1>
                            <h2>цена: 350 сом 3 шт</h2>
                            <div className="breakfast-general__btn">
                                <button className="breakfast-general__basket">в корзину</button>
                                <button className="breakfast-general__num">-</button>
                                <div className="breakfast-general__sum">
                                    1
                                </div>
                                <button className="breakfast-general__num">+</button>
                            </div>
                        </div>
                        <div className="breakfast-general__block">
                            <img src={b3} alt=""/>
                            <h1>Блинчики творогом</h1>
                            <h2>цена: 350 сом 3 шт</h2>
                            <div className="breakfast-general__btn">
                                <button className="breakfast-general__basket">в корзину</button>
                                <button className="breakfast-general__num">-</button>
                                <div className="breakfast-general__sum">
                                    1
                                </div>
                                <button className="breakfast-general__num">+</button>
                            </div>
                        </div>
                        <div className="breakfast-general__block">
                            <img src={b4} alt=""/>
                            <h1>шоколадные панкейки</h1>
                            <h2>цена: 350 сом 3 шт</h2>
                            <div className="breakfast-general__btn">
                                <button className="breakfast-general__basket">в корзину</button>
                                <button className="breakfast-general__num">-</button>
                                <div className="breakfast-general__sum">
                                    1
                                </div>
                                <button className="breakfast-general__num">+</button>
                            </div>
                        </div>
                        <div className="breakfast-general__block">
                            <img src={b5} alt=""/>
                            <h1>омлет из двух яиц</h1>
                            <h2>цена: 350 сом 3 шт</h2>
                            <div className="breakfast-general__btn">
                                <button className="breakfast-general__basket">в корзину</button>
                                <button className="breakfast-general__num">-</button>
                                <div className="breakfast-general__sum">
                                    1
                                </div>
                                <button className="breakfast-general__num">+</button>
                            </div>
                        </div>
                        <div className="breakfast-general__block">
                            <img src={b6} alt=""/>
                            <h1>гренки</h1>
                            <h2>цена: 350 сом 3 шт</h2>
                            <div className="breakfast-general__btn">
                                <button className="breakfast-general__basket">в корзину</button>
                                <button className="breakfast-general__num">-</button>
                                <div className="breakfast-general__sum">
                                    1
                                </div>
                                <button className="breakfast-general__num">+</button>
                            </div>
                        </div>
                        <div className="breakfast-general__block">
                            <img src={b7} alt=""/>
                            <h1>каша гречневая</h1>
                            <h2>цена: 350 сом 3 шт</h2>
                            <div className="breakfast-general__btn">
                                <button className="breakfast-general__basket">в корзину</button>
                                <button className="breakfast-general__num">-</button>
                                <div className="breakfast-general__sum">
                                    1
                                </div>
                                <button className="breakfast-general__num">+</button>
                            </div>
                        </div>
                        <div className="breakfast-general__block">
                            <img src={b8} alt=""/>
                            <h1>блинчики с икрой</h1>
                            <h2>цена: 350 сом 3 шт</h2>
                            <div className="breakfast-general__btn">
                                <button className="breakfast-general__basket">в корзину</button>
                                <button className="breakfast-general__num">-</button>
                                <div className="breakfast-general__sum">
                                    1
                                </div>
                                <button className="breakfast-general__num">+</button>
                            </div>
                        </div>
                        <div className="breakfast-general__block">
                            <img src={b9} alt=""/>
                            <h1>Блинчики класические</h1>
                            <h2>цена: 350 сом 3 шт</h2>
                            <div className="breakfast-general__btn">
                                <button className="breakfast-general__basket">в корзину</button>
                                <button className="breakfast-general__num">-</button>
                                <div className="breakfast-general__sum">
                                    1
                                </div>
                                <button className="breakfast-general__num">+</button>
                            </div>
                        </div>
                        <div className="breakfast-general__block">
                            <img src={b10} alt=""/>
                            <h1>панкейки класические</h1>
                            <h2>цена: 350 сом 3 шт</h2>
                            <div className="breakfast-general__btn">
                                <button className="breakfast-general__basket">в корзину</button>
                                <button className="breakfast-general__num">-</button>
                                <div className="breakfast-general__sum">
                                    1
                                </div>
                                <button className="breakfast-general__num">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breakfast;