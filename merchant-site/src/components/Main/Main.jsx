import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../base/loading/Loading';
import Selector from '../base/selector/Selector';

export default class Main extends Component {
  componentDidMount() {
    const { initializeData } = this.props;
    initializeData();
  }

  render() {
    const { creditAgreements, loading } = this.props;

    if (loading) {
      return <Loading />;
    }
    return (
      <div className="payment-component">
        <div className="payment-header">
          <span>Págalo en</span>
          <button type="button">más info</button>
        </div>
        <Selector labelKey="instalment_count" options={creditAgreements} valueKey="instalment_count" />
      </div>
    );
  }
}

Main.defaultProps = {
  creditAgreements: null,
  loading: false,
};

Main.propTypes = {
  creditAgreements: PropTypes.array,
  initializeData: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
