import React, { Component } from 'react';
import style from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = (e) => this.setState({ search: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { search } = this.state;

    this.props.onSearch(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label className={style.label}>
          <input
            className={style.input}
            type="text"
            value={this.state.search}
            name="search"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={style.searchButton}>
          <span>Search</span>
        </button>
      </form>
    );
  }
}
