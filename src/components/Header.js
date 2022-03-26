import React from "react";
import logo from "../images/header-logo.svg";
import { Route, Link, useHistory } from "react-router-dom";

function Header(props) {
  let { email } = props.userData;
  const history = useHistory();
  function signOut() {
    localStorage.removeItem("jwt");
    history.push("/sign-in");
  }

  return (
    <header className='header section page__header'>
      <img className='header__logo' src={logo} alt='Логотип места России.' />
      <div className='header__info'>
        <p className='header__text'>{email}</p>
        <Route path='/sign-up'>
          <Link className='header__text link' to='/sign-in'>
            Войти
          </Link>
        </Route>
        <Route path='/sign-in'>
          <Link className='header__text link' to='/sign-up'>
            Регистрация
          </Link>
        </Route>
        <Route exact path='/'>
          <a className='header__button link' onClick={signOut}>
            Выйти
          </a>
        </Route>
      </div>
    </header>
  );
}

export default Header;
