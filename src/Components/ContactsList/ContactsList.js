import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Contact from '../Contact/Contact';

import contactsSelectors from '../../Redux/contacts/contacts-selectors';

import s from './ContactsList.module.css';

export default function ContactsList() {
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  return (
    <TransitionGroup component="ul" className={s.list}>
      {filteredContacts.map((contact, i) => {
        // contact.count = i + 1;
        return (
          <CSSTransition key={contact._id} timeout={250} classNames={s}>
            <Contact contact={contact} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}
