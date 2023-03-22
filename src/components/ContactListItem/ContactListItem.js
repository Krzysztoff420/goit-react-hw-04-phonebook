import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ onDelete, myFilteredContacts }) => {
  const handleDelete = evt => {
    const contactId = evt.target.id;

    onDelete(contactId);
  };
    return (
      <div>
        {myFilteredContacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            <button
              id={id}
              className={css.deleteButton}
              onClick={handleDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    );
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