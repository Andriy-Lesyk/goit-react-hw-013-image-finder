import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/SearchBar';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Div } from './ImageGallery/ImageGallery.styles';

export default class App extends Component {
  state = {
    search: '',
    loading: false,
    response: [],
    page: 1,
    total: 0,
  };

  handleFormSubmit = search => {
    this.setState({ search, page: 1, response:[] });
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.state.search}&page=${this.state.page}&per_page=12&key=26732383-f6cd41098d2c807081d5b5285`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`По Вашому запиту нічого не знайдено!`)
          );
        })
        .then(response => {
          if (response.hits.length === 0) {
            alert(`По Вашому запиту нічого не знайдено!`);
            return;
          }
          const hits = response.hits.map(({ webformatURL, id, largeImageURL }) => ({
            webformatURL,
            id,
            largeImageURL,
          }));
          this.setState({
            response: [...this.state.response, ...hits],
            total: response.total,
          });
        })
        .finally(this.setState({ loading: false }));
    }
  }
  handleClick = () => {
    this.setState(() => {
      return {
        page: this.state.page + 1,
        loading: true,
      };
    });
  };

  render() {
    const { loading, response, total } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {response && <ImageGallery imageObj={response} loading={loading} />}
        <Div>
          {response.length !== 0 && response.length < total && (
            <Button onClick={this.handleClick} />
          )}
          {loading && <Loader />}
        </Div>
      </div>
    );
  }
}
