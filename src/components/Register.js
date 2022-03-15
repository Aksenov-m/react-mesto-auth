import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";

// Функциональный компонент PopupWithForm
function Register(props) {
  return (
    <main className='page__content'>
      <AuthForm name='signup' title='Регистрация' buttonText='Зарегистрироваться'>
        <input
          id='email'
          name='email'
          className='authform__input popup__input_string_email'
          type='text'
          placeholder='Email'
          required
          autoComplete='off'
          minLength='2'
          maxLength='40'
        />
        <span className='popup__input-error popup__email-error'></span>
        <input
          id='password'
          name='password'
          className='authform__input popup__input_string_password'
          type='text'
          placeholder='Пароль'
          required
          autoComplete='off'
          minLength='2'
          maxLength='200'
        />
        <span className='popup__input-error popup__password-error'></span>
      </AuthForm>
      <Link className='button_type_to-in link' to='/sign-in'>
        Уже зарегистрированы? Войти
      </Link>
    </main>
  );
}

export default Register;
