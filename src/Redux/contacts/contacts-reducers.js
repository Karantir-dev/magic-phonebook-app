import { combineReducers, createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';
import authActions from '../auth/auth-actions';

const allContacts = createReducer([], {
  [contactsActions.fetchContactsSucсess]: (_, { payload }) => payload,
  [contactsActions.addContactSucсess]: (prevState, { payload }) => {
    return [payload, ...prevState];
  },
  [contactsActions.deleteContactSucсess]: (prevState, { payload }) => {
    return prevState.filter(({ _id }) => {
      return _id !== payload;
    });
  },
  [contactsActions.addToFavouritesSucсess]: (prevState, { payload }) => {
    const contact = prevState.find(contact => contact._id === payload.id);

    contact.favourite = payload.favourite;
  },
  [contactsActions.contactUpdateSuccess]: (prevState, { payload }) => {
    return prevState.map(contact => {
      if (contact._id === payload.id) {
        const updatedContact = Object.assign({}, contact, payload);
        console.log(updatedContact);

        return updatedContact;
      }
      return contact;
    });
  },
  [authActions.logOutSuccess]: () => [],
});

const loading = createReducer(false, {
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSucсess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSucсess]: () => false,
  [contactsActions.deleteContactError]: () => false,
  // [contactsActions.addToFavouritesRequest]: () => true,
  // [contactsActions.addToFavouritesSucсess]: () => false,
  // [contactsActions.addToFavouritesError]: () => false,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ allContacts, filter, loading });
