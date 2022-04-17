import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/SearchBar';

export default class App extends Component {
  state = {
    search: '',
    loading: false,
    response: null,
    page: 1,
    showModal: false,
    quantity:12
  };

  toggleModal = e => {
    this.setState(state => ({ showModal: !this.showModal }));
    console.log('modal');
    console.log(e.target);
  };

  handleFormSubmit = search => {
    this.setState({ search });
  };


  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({ loading: true, page: 1 , quantity:12});
      fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.state.search}&page=${this.state.page}&per_page=12&key=26732383-f6cd41098d2c807081d5b5285`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Введіть інший запит`));
        })
        .then(response => this.setState({ response }))
        .finally(this.setState({ loading: false }));
    }
  }
  handleClick = () => {
    this.setState(prevState => {
      return {
        page: this.state.page + 1,
        search: prevState.search,
        quantity: this.state.quantity + 12
      };
    });
    console.log(this.state.page);
    this.setState({ loading: true });

    fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${
        this.state.search
      }&page=${
        this.state.page + 1
      }&per_page=${this.state.quantity+12}&key=26732383-f6cd41098d2c807081d5b5285`
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({ response });
      })
      .finally(this.setState({ loading: false }));
  };

  render() {
    const { loading, response, page, showModal } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {response && (
          <ImageGallery
            imageObj={response}
            page={page}
            onClick={this.handleClick}
            loading={loading}
            onToggle={this.toggleModal}
            showModal={showModal}
          />
        )}
      </div>
    );
  }
}
