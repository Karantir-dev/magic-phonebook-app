import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Loader from 'react-loader-spinner';

import authOperations from '../../Redux/auth/auth-operations';
import authSelectors from '../../Redux/auth/auth-selectors';

import s from './LoginView.module.css';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  function onChangeEmail(e) {
    setEmail(e.currentTarget.value);
  }
  function onChangePassword(e) {
    setPassword(e.currentTarget.value);
  }

  const btnActive = Boolean(email && password);
  const isLoading = useSelector(authSelectors.getIsLoadding);

  return (
    <>
      {isLoading ? (
        <Loader
          style={{ margin: '50px' }}
          type="Oval"
          color="#00BFFF"
          width={'60px'}
        />
      ) : (
        <div className={s.container}>
          <h2>Log In page</h2>

          <form onSubmit={onSubmit}>
            <label className={s.label}>
              Email
              <input
                autoFocus
                className={s.input}
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={onChangeEmail}
              />
            </label>

            <label className={s.label}>
              Password
              <input
                className={s.input}
                type="password"
                name="password"
                value={password}
                onChange={onChangePassword}
              />
            </label>
            <p>
              Or if you don`t have an account,{' '}
              <NavLink className={s.link} to="/register">
                Register
              </NavLink>
              .
            </p>
            <button className={s.btn} disabled={!btnActive} type="submit">
              Log In
            </button>
          </form>
        </div>
      )}
    </>
  );
}
