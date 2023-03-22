import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './Phonebook.module.css';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = (name, number) => {
    const id = nanoid();
    this.setState(state => ({
      contacts: state.contacts.concat({ name, number, id }),
    }));
  };

  handleDelete = contactId => {
    const currentContacts = this.state.contacts.filter(
      contact => contact.id !== contactId
    );
    this.setState(() => ({
      contacts: currentContacts,
    }));
  };

  handleInput = text => {
    this.setState({
      filter: text,
    });
  };

   componentDidMount() {
    const list = localStorage.getItem('contacts-list');
    if (!list) return;

    try {
      this.setState({
        contacts: JSON.parse(list),
      });
    } catch (e) {
      console.error(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      const contactsListStringified = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts-list', contactsListStringified);
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={css.main}      >
        <h1 className={css.header}>Phonebook</h1>
        <ContactForm myContacts={contacts} onFormSubmit={this.handleSubmit} />
        <h2 className={css.header}>Contacts</h2>
        <Filter onFilter={this.handleInput} />
        <ContactList
          myFilteredContacts={filteredContacts}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}





