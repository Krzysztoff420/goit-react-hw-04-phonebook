import { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export class Filter extends Component {
  handleInputChange = evt => {
    const text = evt.target.value;
    const { onFilter } = this.props;

    onFilter(text);
  };

  render() {
    return (
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          onInput={this.handleInputChange}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};