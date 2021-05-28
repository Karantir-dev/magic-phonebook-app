import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import Icon from '../Icon';

import authSelectors from '../../Redux/auth/auth-selectors';

import s from './AppBar.module.css';

export default function AppBar() {
  const [showMenu, setShowMenu] = useState(false);
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  function onCloseMobMenu(e) {
    if (e.target === e.currentTarget) {
      setShowMenu(false);
    }
  }
  return (
    <div className={s.container}>
      <NavLink exact to="/">
        <h1 className={s.title}>Phonebook</h1>
      </NavLink>

      {isAuthenticated && (
        <button className={s.burgerBtn} onClick={() => setShowMenu(!showMenu)}>
          <Icon name={showMenu ? 'cross' : 'menu'} size={25} />
        </button>
      )}

      {isAuthenticated && (
        <>
          <div className={s.menuDesktop}>
            <NavLink
              to="/contacts"
              className={s.link}
              activeClassName={s.activeLink}
            >
              Contacts
            </NavLink>

            <UserMenu />
          </div>

          {showMenu && (
            <div className={s.overlay} onClick={onCloseMobMenu}>
              <div className={s.menuMobile}>
                <UserMenu />
              </div>
            </div>
          )}
        </>
      )}

      {!isAuthenticated && (
        <div className={s.authNav}>
          <AuthNav />
        </div>
      )}
    </div>
  );
}
