import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../Icon.js';
import EditContactForm from '../EditContactForm/EditContactForm';

import contactsOperations from '../../Redux/contacts/contacts-operations';
import contactsSelectors from '../../Redux/contacts/contacts-selectors';

import s from './Contact.module.css';

export default function Contact({ contact }) {
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    document.querySelector('body').style.overflow = showEditForm
      ? 'hidden'
      : 'initial';
  }, [showEditForm]);

  const dispatch = useDispatch();

  function onDelete() {
    dispatch(contactsOperations.deleteContact(contact._id));
  }

  const favouriteStatus = useSelector(state => {
    return contactsSelectors.getFavouriteStatus(state, contact._id);
  });
  function onAddToFavourites() {
    dispatch(
      contactsOperations.addToFavourites(contact._id, {
        favourite: !favouriteStatus,
      }),
    );
  }

  return (
    <>
      <li className={s.listItem}>
        {/* <span>{contact.count}</span> */}
        <span className={s.contactName}>{contact.name}</span>
        <button className={s.btnStar} type="button" onClick={onAddToFavourites}>
          {favouriteStatus ? (
            <Icon color={'sandybrown'} name={'star-full'} size={20} />
          ) : (
            <Icon className={s.starEmpty} name={'star-empty'} size={20} />
          )}
        </button>
        <hr />

        <span className={s.text}>Phone number: {contact.phoneNumber}</span>
        <span className={s.text}>Email: {contact.email}</span>

        <div className={s.btnsWrapper}>
          <button
            className={`${s.btn} ${s.editBtn}`}
            type="button"
            onClick={() => setShowEditForm(true)}
          >
            Edit
            <Icon className={s.icon} name={'pencil'} size={17} />
          </button>

          <button className={s.btn} type="button" onClick={onDelete}>
            Delete <Icon className={s.icon} name={'bin'} size={17} />
          </button>
        </div>
      </li>
      {showEditForm && (
        <EditContactForm contact={contact} showEditForm={setShowEditForm} />
      )}
    </>
  );
}

Contact.propTypes = {
  contact: PropTypes.object,
};
