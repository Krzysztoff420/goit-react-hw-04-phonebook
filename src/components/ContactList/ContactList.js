// import { Component } from 'react';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './Phonebook.module.css';

export const ContactList = ({ myFilteredContacts, onDelete }) => (
  <ul className={css.list}>
    <ContactListItem
      myFilteredContacts={myFilteredContacts}
      onDelete={onDelete}
    />
  </ul>
);

// export class ContactList extends Component {
//   render() {
//     const { myFilteredContacts, onDelete } = this.props;

//     return (
//       <ul className={css.list}>
//         <ContactListItem
//           myFilteredContacts={myFilteredContacts}
//           onDelete={onDelete}
//         />
//       </ul>
//     );
//   }
// }



