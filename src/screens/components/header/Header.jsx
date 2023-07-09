import React from "react";

import "./Header.css";
import menu from "../../../assets/menu.svg";
import user from "../../../assets/user.svg";
import User from "../user/User";

import { useState } from "react";

function Header() {
  const [userModal, setUserModal] = useState(false);
  return (
    <>
      <div className='header__container'>
        <div className='header__menu '>
          <img className='textbtn' src={menu}></img>
        </div>
        <div className='header__left'>
          <a href='/' className='header__title textbtn'>
            Home
          </a>
          <a href='/plans' className='header__title textbtn'>
            Plans
          </a>
        </div>
        <div className='header__right'>
          <img
            className='textbtn'
            src={user}
            onClick={() => {
              setUserModal(!userModal);
            }}></img>
        </div>
      </div>
      <User showHide={userModal} />
    </>
  );
}

export default Header;
