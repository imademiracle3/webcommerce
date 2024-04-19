import React from "react";
// import { images } from "../constant";
// import image from '../../constants/image';
import { NavLink } from "react-router-dom";

import './header.css'
import image from "../constants/image";


const Header = () => {
    return (
        <div className="main-container">
            <div className="item-container">
                <div className="logo">
                <h1>Shortly</h1>

               
                </div>

                <div className="link">
                
               
                <NavLink
                        className="navbar-item"
                        activeClassName="is-active"
                        to="/home"
                        exact
                    >
                        Resources
                    </NavLink>

                    <NavLink
                        className="navbar-item"
                        activeClassName="is-active"
                        to="/home"
                        exact
                    >
                        Features
                    </NavLink>

                    <NavLink
                        className="navbar-item"
                        activeClassName="is-active"
                        to="/home"
                        exact
                    >
                        Pricing
                    </NavLink>


                </div>

                <div className="button">
                <NavLink
                        className="navbar"
                        activeClassName="is-active"
                        to="/home"
                        exact
                    >
                        login
                    </NavLink>

                    <button className="sign"> signUp</button>

                </div>
                
            </div>

            <div className="container2">
               <div className="container3">
               <p className="bigger-text">More than</p>
                <p className="bigger-text">just Short</p>
                <p className="bigger-text">Link</p>
                <p>Building more brand recognition <br /> detailed insights on how your links are <br /> performing</p>
                
                 <button className="get-btn">Get Started</button>
               </div>
               <img src={image.pic1} alt="logo" className="pic" />
            </div>

            <div className="Toda">
                <div className="Box">
                    <input type="text" placeholder="shorten a link here..." className="shorten" />
                    <button className="short">shorten it</button>

                </div>

                <div className="Advance">
                    <h1>Advanced Statistic</h1>
                    <p>Track how you are link performing across the board cross the board</p>
                    <p>Advanced Statistic dashboard</p>
                </div>

                <div className="Boox">
                    <div className="Brand">
                        <h1>Brand Recognition</h1>
                        <p className="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ratione numquam fugit nostrum exercitationem quia culpa iste <br /> repellendus iusto at excepturi.</p>
                    </div>
                    <div className="Brand">
                        <h1>Brand Recognition</h1>
                        <p className="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ratione numquam fugit nostrum exercitationem quia culpa iste <br /> repellendus iusto at excepturi.</p>
                    </div>
                    <div className="Brand">
                        <h1>Brand Recognition</h1>
                        <p className="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ratione numquam fugit nostrum exercitationem quia culpa iste <br /> repellendus iusto at excepturi.</p>
                    </div>

                </div>
                
                <div className=" classMon">
                <h1 className="stat">Advanced Statistics</h1>
                <button className="button1">Get Started</button>
 
            </div>

            </div>

            <div className="buttom">
                <h1 className="headx">Shortly</h1>

                <div className="features">
                    <h2 className="headx">feature</h2>
                    <p>iterm</p>
                    <p>iterm</p>
                    <p>iterm</p>
                </div>
                <div className="features">
                    <h2 className="headx">feature</h2>
                    <p>iterm</p>
                    <p>iterm</p>
                    <p>iterm</p>
                </div>
                <div className="features">
                    <h2 className="headx">feature</h2>
                    <p>iterm</p>
                    <p>iterm</p>
                    <p>iterm</p>
                </div>


          

            </div>
            <p className="heade">Task by  frontend Tutor. code by Imaded</p>




            


            
        </div>
    )
}

export default Header