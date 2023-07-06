import React from "react";

import "./Header.css";
import menu from "../../assets/menu.svg";
import user from "../../assets/user.svg";

function Header() {
  return (
    <div className='header__container'>
      <div className='header__menu '>
        <img className='textbtn' src={menu}></img>
      </div>
      <div className='header__left'>
        <div className='header__title textbtn'>Home</div>
        <div className='header__title textbtn'>Plans</div>
      </div>
      <div className='header__right'>
        <img className='textbtn' src={user}></img>
      </div>
    </div>
  );
}

export default Header;
