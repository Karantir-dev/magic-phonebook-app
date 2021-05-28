import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import Loader from 'react-loader-spinner';

import authSelectors from '../../Redux/auth/auth-selectors';
import authActions from '../../Redux/auth/auth-actions';

import s from './RegisterView.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [regSuccess, setRegSuccess] = useState(false);

  const onChangeName = e => {
    setName(e.currentTarget.value);
  };
  const onChangeEmail = e => {
    setEmail(e.currentTarget.value);
  };
  const onChangePassword = e => {
    setPassword(e.currentTarget.value);
  };

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    if (password.length < 8) {
      dispatch(
        authActions.registerError('Password must be at least 8 characters.'),
      );
    } else {
      dispatch(authActions.registerRequest());

      axios
        .post('users/signUp', { name, email, password })
        .then(() => {
          dispatch(authActions.registerSuccess());
          setRegSuccess(true);
        })
        .catch(err => {
          dispatch(authActions.registerError(err.response.data.message));
        });

      setName('');
      setEmail('');
      setPassword('');
    }
  };

  const btnActive = Boolean(name && email && password);
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
      ) : regSuccess ? (
        <div className={s.successMessage}>
          You have successfully registered. Now{' '}
          <NavLink className={s.link} to="/login">
            Log into
          </NavLink>{' '}
          your account to get started with your contacts
        </div>
      ) : (
        <div className={s.container}>
          <h2>Registration page</h2>

          <form onSubmit={onSubmit}>
            <label className={s.label}>
              Name
              <input
                autoFocus
                className={s.input}
                type="name"
                name="name"
                placeholder="Alexander Repeta"
                value={name}
                onChange={onChangeName}
              />
            </label>

            <label className={s.label}>
              Email
              <input
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
                placeholder="min 8 characters"
                value={password}
                onChange={onChangePassword}
              />
            </label>
            <p>
              If you already have an account,{' '}
              <NavLink className={s.link} to="/login">
                Log In
              </NavLink>
              .
            </p>
            <button className={s.btn} disabled={!btnActive} type="submit">
              Register
            </button>
          </form>
        </div>
      )}
    </>
  );
}
