import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ onFilter }) => {
  const handleInputChange = evt => {
    const text = evt.target.value;

    onFilter(text);
  };

    return (
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          onInput={handleInputChange}
        />
      </label>
    );
  }


Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};