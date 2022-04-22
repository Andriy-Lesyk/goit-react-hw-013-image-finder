import React, { Component } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchBars,
} from './SearchBar.styled';

export default class SearchBar extends Component {
  state = {
    search: '',
  };

  handleChange = event => {
    this.setState({ search: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.search.trim() === '') {
      alert('Введіть запит!');
      return;
    }
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchBars>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
              <HiOutlineSearch style={{ width: '25px', height: '25px' }} />
            </SearchFormButton>
            <SearchFormInput
              type="text"
              autocomplete="off"
              placeholder="Search images and photos"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </SearchForm>
        </SearchBars>
      </div>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
