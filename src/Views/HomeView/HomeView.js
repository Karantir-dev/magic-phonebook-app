import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import authSelectors from '../../Redux/auth/auth-selectors';

import s from './HomeView.module.css';

function HomeView() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <>
      {isAuthenticated ? (
        <NavLink className={s.linkContacts} to="/contacts">
          Open My Contacts
        </NavLink>
      ) : (
        <p className={s.text}>
          To get started with your contacts,{' '}
          <NavLink className={s.link} to="/login">
            Log In
          </NavLink>{' '}
          or{' '}
          <NavLink className={s.link} to="/register">
            Register
          </NavLink>
        </p>
      )}
    </>
  );
}

export default HomeView;
