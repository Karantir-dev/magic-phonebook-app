import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputMask from 'react-input-mask';

import Icon from '../Icon';

import contactsOperations from '../../Redux/contacts/contacts-operations';

import s from './EditContactForm.module.css';

const EditContactForm = ({ contact, showEditForm }) => {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);

  const dispatch = useDispatch();

  function onSubmitForm(e) {
    e.preventDefault();

    dispatch(
      contactsOperations.contactUpdate(
        contact._id,
        {
          name,
          email,
          phoneNumber,
        },
        showEditForm,
      ),
    );
  }

  function onCloseEditForm(e) {
    if (e.target === e.currentTarget) {
      showEditForm(false);
    }
  }

  return (
    <div className={s.overlay} onClick={onCloseEditForm}>
      <form className={s.form} onSubmit={onSubmitForm}>
        <h2>Edit contact</h2>
        <button className={s.btnClose} onClick={() => showEditForm(false)}>
          <Icon name={'cross'} size={20} />
        </button>
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
          Change
        </button>
      </form>
    </div>
  );
};

export default EditContactForm;
