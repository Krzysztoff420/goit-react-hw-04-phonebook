import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './Phonebook.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleSubmit = (name, number) => {
    const id = nanoid();
    setContacts(contacts.concat({ name, number, id }));
  };

  const handleDelete = contactId => {
    const currentContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(currentContacts);
  };

  const handleInput = text => {
    setFilter(text);
  };

  useEffect(() => {
    const list = localStorage.getItem('contacts-list');
    if (!list) return;

    try {
      setContacts(JSON.parse(list));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    const contactsListStringified = JSON.stringify(contacts);
    localStorage.setItem('contacts-list', contactsListStringified);
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    return (
      <div className={css.main}>
        <h1 className={css.header}>Phonebook</h1>
        <ContactForm myContacts={contacts} onFormSubmit={handleSubmit} />
        <h2 className={css.header}>Contacts</h2>
        <Filter onFilter={handleInput} />
        <ContactList
          myFilteredContacts={filteredContacts}
          onDelete={handleDelete}
        />
      </div>
    );
  }






