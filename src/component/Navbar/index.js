import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <>
          <div className="container">
            <div className ={style.wrapper}>
                <div className={style.logoWrap}>
                  <Link to="/">  <img src="./images/logo.png" alt="Logo"/> </Link>
                </div>
                <div className={style.listWrap}>
                    <ul>
                       <Link to="/">  <li> Home </li></Link>
                       <Link to="/">  <li> Menu </li></Link>
                       <Link to="/">  <li> Our Story </li></Link>
                       <Link to="/">  <li> Contact Us </li></Link>
                    </ul>
                </div>
            </div>
          </div>
        </>
    )
}

export default Navbar;
