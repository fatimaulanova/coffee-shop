import React from 'react';
import g1 from "../../asets/img/g1.png";
import g2 from "../../asets/img/g2.png";
import g3 from "../../asets/img/g3.png";
import g4 from "../../asets/img/g4.png";
import g5 from "../../asets/img/g5.png";
import g6 from "../../asets/img/g6.png";
import g7 from "../../asets/img/g7.png";
import g8 from "../../asets/img/g8.png";

const All = () => {
    return (
        <section id="all">
            <div className="container">
                <div className="all-general">
                    <div className="all-general__g1">
                        <img src={g1} alt=""/>
                    </div>
                    <div className="all-general__gen">
                        <div className="all-general__bg">
                            <img src={g2} alt=""/>
                            <div className="all-general__bg1">
                                <a href="#">На завтрак</a>
                            </div>
                        </div>
                        <div className="all-general__bg">
                            <img src={g3} alt=""/>
                            <div className="all-general__bg1">
                                <a href="#">Coffee</a>
                            </div>
                        </div>
                        <div className="all-general__bg">
                            <img src={g4} alt=""/>
                            <div className="all-general__bg1">
                                <a href="#">Напитки</a>
                            </div>
                        </div>
                        <div className="all-general__bg">
                            <img src={g5} alt=""/>
                            <div className="all-general__bg1">
                                <a href="#">Суп</a>
                            </div>
                        </div>
                    </div>
                    <div className="all-general__gen2">
                        <div className="all-general__bg">
                            <img src={g6} alt=""/>
                            <div className="all-general__bg1">
                                <a href="#">Чай</a>
                            </div>
                        </div>
                        <div className="all-general__bg">
                            <img src={g7} alt=""/>
                            <div className="all-general__bg1">
                                <a href="#">Салаты</a>
                            </div>
                        </div>
                        <div className="all-general__bg">
                            <img src={g8} alt=""/>
                            <div className="all-general__bg1">
                                <a href="#">Десерты</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default All;