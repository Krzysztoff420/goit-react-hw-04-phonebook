import { Component } from 'react';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export class ContactListItem extends Component {
  handleDelete = evt => {
    const { onDelete } = this.props;
    const contactId = evt.target.id;

    onDelete(contactId);
  };

  render() {
    const { myFilteredContacts } = this.props;

    return (
      <div>
        {myFilteredContacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            <button
              id={id}
              className={css.deleteButton}
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    );
  }
}

ContactListItem.propTypes = {
  myFilteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};