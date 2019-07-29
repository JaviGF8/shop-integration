import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Main extends Component {
  componentDidMount() {
    const { initializeData } = this.props;
    initializeData();
  }

  render() {
    return <div className="payment-component">PAYMENT COMPONENT SHOULD BE HERE</div>;
  }
}

Main.propTypes = {
  initializeData: PropTypes.func.isRequired,
};
