import React from "react";
import logo from "../images/header-logo.svg";

function Header() {
  return (
    <header className='header section page__header'>
      <img className='header__logo' src={logo} alt='Логотип места России.' />
    </header>
  );
}

export default Header;
