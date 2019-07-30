import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../base/loading/Loading';
import Selector from '../base/selector/Selector';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      selectedMethod: null,
    };
  }

  componentDidMount() {
    const { initializeData } = this.props;
    initializeData();
  }

  onChangeSelector = (newMethod) => {
    this.setState({ selectedMethod: newMethod });
  };

  render() {
    const { creditAgreements, loading } = this.props;
    const { selectedMethod } = this.state;

    if (loading) {
      return <Loading />;
    }
    return (
      <div className="payment-component">
        <div className="payment-header">
          <span>Págalo en</span>
          <button type="button">más info</button>
        </div>
        <Selector
          labelField="instalment_count"
          onChange={this.onChangeSelector}
          options={creditAgreements}
          valueField="instalment_count"
          value={selectedMethod}
        />
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
