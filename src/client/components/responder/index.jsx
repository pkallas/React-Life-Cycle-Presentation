import React, { Component } from 'react';

export default class Responder extends Component {
  render() {
    return (
      <div>
        <p className='text'>Hello {this.props.name}</p>
      </div>
    );
  }
}
