import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.css';

function AuthNav() {
  return (
    <nav className={s.nav}>
      <NavLink className={s.link} activeClassName={s.activeLink} to="/login">
        Log In
      </NavLink>
      <NavLink className={s.link} activeClassName={s.activeLink} to="/register">
        Register
      </NavLink>
    </nav>
  );
}

export default AuthNav;
