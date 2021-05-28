import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('CONTACTS/ADD_CONTACT_REQUEST');
const addContactSucсess = createAction('CONTACTS/ADD_CONTACT_SUCCESS');
const addContactError = createAction('CONTACTS/ADD_CONTACT_ERROR');

const deleteContactRequest = createAction('CONTACTS/DELETE_CONTACT_REQUEST');
const deleteContactSucсess = createAction('CONTACTS/DELETE_CONTACT_SUCCESS');
const deleteContactError = createAction('CONTACTS/DELETE_CONTACT_ERROR');

const fetchContactsRequest = createAction('CONTACTS/FETCH_CONTACTS_REQUEST');
const fetchContactsSucсess = createAction('CONTACTS/FETCH_CONTACTS_SUCCESS');
const fetchContactsError = createAction('CONTACTS/FETCH_CONTACTS_ERROR');

const addToFavouritesRequest = createAction(
  'CONTACTS/ADD_TO_FAVOURITES_REQUEST',
);
const addToFavouritesSucсess = createAction(
  'CONTACTS/ADD_TO_FAVOURITES_SUCCESS',
);
const addToFavouritesError = createAction('CONTACTS/ADD_TO_FAVOURITES_ERROR');

const contactUpdateRequest = createAction('CONTACTS/CONTACT_UPDATE_REQUEST');
const contactUpdateSuccess = createAction('CONTACTS/CONTACT_UPDATE_SUCCESS');
const contactUpdateError = createAction('CONTACTS/CONTACT_UPDATE_ERROR');

const changeFilter = createAction('CONTACTS/CHANGE_FILTER');

const contactsActions = {
  addContactRequest,
  addContactSucсess,
  addContactError,
  deleteContactRequest,
  deleteContactSucсess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSucсess,
  fetchContactsError,
  addToFavouritesRequest,
  addToFavouritesSucсess,
  addToFavouritesError,
  contactUpdateRequest,
  contactUpdateSuccess,
  contactUpdateError,
  changeFilter,
};
export default contactsActions;
