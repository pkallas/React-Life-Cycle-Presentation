import React, { Component } from 'react';
import Responder from '../responder';
import './index.css';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameBar: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      nameBar: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className='name-bar'
            value={this.state.nameBar}
            type='text'
            placeholder='What is your name?'
            onChange={this.handleChange} />
        </form>
        <Responder name={this.state.nameBar} />
      </div>
    );
  };
}
