import { createReducer } from '@reduxjs/toolkit';

import authActions from './auth/auth-actions';
import contactsActions from './contacts/contacts-actions';
import resetNotification from './notif-action';

const setNotification = (_, { payload }) => payload;

const notifReducer = createReducer(null, {
  [authActions.registerError]: setNotification,
  [authActions.logInError]: setNotification,
  [authActions.logOutError]: setNotification,
  [contactsActions.addContactError]: setNotification,
  [contactsActions.deleteContactError]: setNotification,
  [contactsActions.fetchContactsError]: setNotification,
  [contactsActions.addToFavouritesError]: setNotification,
  [contactsActions.contactUpdateError]: setNotification,
  [resetNotification]: setNotification,
});

export default notifReducer;
