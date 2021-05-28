import { useSelector, useDispatch } from 'react-redux';

import Icon from '../Icon.js';

import contactsActions from '../../Redux/contacts/contacts-actions';
import contactsSelectors from '../../Redux/contacts/contacts-selectors';

import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  function onChangeFilter(e) {
    dispatch(contactsActions.changeFilter(e.currentTarget.value));
  }

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="search"
        name="filter"
        onChange={onChangeFilter}
        value={value}
      ></input>
      <Icon className={s.iconSearch} name={'search'} size={17} />
    </label>
  );
}
