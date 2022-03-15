import React from "react";
import AuthForm from "./AuthForm";

// Функциональный компонент PopupWithForm
function Login(props) {
  return (
    <main className='page__content'>
      <AuthForm name='signup' title='Вход' buttonText='Войти'>
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
    </main>
  );
}

export default Login;
