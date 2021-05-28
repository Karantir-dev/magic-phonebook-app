import axios from 'axios';
import actions from './contacts-actions';

axios.defaults.baseURL = 'https://magic-phonebook-app.herokuapp.com/';

const addContact = (contact, resetState) => dispatch => {
  dispatch(actions.addContactRequest());

  axios
    .post('contacts', contact)
    .then(({ data }) => {
      resetState.setName('');
      resetState.setEmail('');
      resetState.setPhoneNumber('');
      dispatch(actions.addContactSucсess(data.createdContact));
    })
    .catch(err => {
      dispatch(actions.addContactError(err.response?.data?.message));
    });
};

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSucсess(id)))
    .catch(err => {
      dispatch(actions.deleteContactError(err.response?.data?.message));
    });
};

const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactsRequest());

  axios
    .get('contacts')
    .then(({ data }) => {
      dispatch(actions.fetchContactsSucсess(data.contacts));
    })
    .catch(err =>
      dispatch(actions.fetchContactsError(err.response?.data?.message)),
    );
};

const addToFavourites = (id, body) => dispatch => {
  dispatch(actions.addToFavouritesRequest());

  axios
    .patch(`contacts/${id}`, body)
    .then(({ data }) => {
      const { favourite } = data.updatedContact;
      dispatch(
        actions.addToFavouritesSucсess({
          id,
          favourite,
        }),
      );
    })
    .catch(err => {
      dispatch(
        actions.addToFavouritesError(
          err.response?.data?.message || err.message,
        ),
      );
    });
};

const contactUpdate = (id, body, showEditForm) => dispatch => {
  dispatch(actions.contactUpdateRequest());

  axios
    .patch(`contacts/${id}`, body)
    .then(({ data }) => {
      const { name, email, phoneNumber } = data.updatedContact;
      dispatch(actions.contactUpdateSuccess({ id, name, email, phoneNumber }));
      showEditForm(false);
    })
    .catch(err => {
      dispatch(
        actions.contactUpdateError(err.response?.data?.message || err.message),
      );
    });
};

const contactsOperations = {
  addContact,
  deleteContact,
  fetchContacts,
  addToFavourites,
  contactUpdate,
};
export default contactsOperations;
