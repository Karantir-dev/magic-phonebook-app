import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';

import Icon from '../Icon.js';

import contactsOperations from '../../Redux/contacts/contacts-operations';
import contactsSelectors from '../../Redux/contacts/contacts-selectors';
import contactsActions from '../../Redux/contacts/contacts-actions';

import s from './AddContactForm.module.css';

export default function AddContactForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const allContacts = useSelector(contactsSelectors.getAllContacts);

  function onSubmitForm(e) {
    e.preventDefault();
    const contactName = name;

    if (!name) {
      dispatch(contactsActions.addContactError('Enter contact name.'));
    } else if (!phoneNumber) {
      dispatch(contactsActions.addContactError('Enter contact phoneNumber.'));
    } else if (allContacts.some(({ name }) => name === contactName)) {
      dispatch(
        contactsActions.addContactError('This contact is already on the list.'),
      );
    } else {
      const resetState = { setEmail, setName, setPhoneNumber };
      dispatch(
        contactsOperations.addContact({ name, email, phoneNumber }, resetState),
      );
    }
  }

  return (
    <>
      <form className={s.form} onSubmit={onSubmitForm}>
        <label className={s.label}>
          Name
          <input
            className={s.formInput}
            type="text"
            name="name"
            onChange={e => setName(e.currentTarget.value)}
            value={name}
          ></input>
          <Icon className={s.icon} name={'user'} size={17} />
        </label>

        <label className={s.label}>
          Email
          <input
            className={s.formInput}
            type="email"
            name="email"
            onChange={e => setEmail(e.currentTarget.value)}
            value={email}
          ></input>
          <Icon className={s.icon} name={'envelop'} size={17} />
        </label>

        <label className={s.label}>
          Phone Number
          <InputMask
            className={s.formInput}
            type="tel"
            name="phoneNumber"
            onChange={e => setPhoneNumber(e.currentTarget.value)}
            value={phoneNumber}
            mask="+3\8(999) 999-99-99"
            maskChar={null}
          />
          <Icon className={s.icon} name={'phone'} size={17} />
        </label>

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
