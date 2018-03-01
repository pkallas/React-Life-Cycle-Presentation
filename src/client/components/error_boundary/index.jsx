import React, { Component } from 'react';
import './index.css';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.error(error, info);
  }

  render() {
    return this.state.error ? (
      <div className='error-image-container'>
        <img src='https://c1.staticflickr.com/8/7001/6509400855_aaaf915871_b.jpg' />
      </div>
    ) : (
      this.props.children
    );
  }
}
