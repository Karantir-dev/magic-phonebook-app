import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';

import AddContactForm from '../../Components/AddContactForm/AddContactForm';
import ContactsList from '../../Components/ContactsList/ContactsList';
import Filter from '../../Components/Filter/Filter';
import Loader from 'react-loader-spinner';

import contactsSelectors from '../../Redux/contacts/contacts-selectors';
import contactsOperations from '../../Redux/contacts/contacts-operations';

import s from './ContactsView.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const loading = useSelector(contactsSelectors.getLoading);

  return (
    <div className={s.container}>
      <div>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={s}
          unmountOnExit
        >
          <h1>Add your contact</h1>
        </CSSTransition>

        <AddContactForm />

        <Filter />
      </div>

      <ContactsList />

      {loading && <Loader type="Oval" color="#00BFFF" width={'60px'} />}
    </div>
  );
}
