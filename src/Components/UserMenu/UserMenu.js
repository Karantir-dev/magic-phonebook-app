import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';

import defaultAvatar from './default-avatar.png';
import Icon from '../Icon.js';

import authOperations from '../../Redux/auth/auth-operations';
import authSelectors from '../../Redux/auth/auth-selectors';

import s from './UserMenu.module.css';

export default function UserMenu() {
  // const [img, setImg] = useState(null);

  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);

  function onLogout() {
    dispatch(authOperations.logout());
  }

  return (
    <div className={s.container}>
      {/* <input type="file" name="avatar" value={img} /> */}
      <div className={s.userNameWrapper}>
        <p className={s.userName}>{userName}</p>

        <img className={s.avatar} src={defaultAvatar} alt="" width="32" />
      </div>

      <button className={s.btn} type="button" onClick={onLogout}>
        Logout
        <Icon className={s.iconExit} name={'exit'} size={20} />
      </button>
    </div>
  );
}
