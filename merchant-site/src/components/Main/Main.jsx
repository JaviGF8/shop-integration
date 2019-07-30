import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loading from '../base/loading/Loading';
import Selector from '../base/selector/Selector';
import InfoModal from '../InfoModal';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      selectedRate: null,
      showModal: false,
    };
  }

  componentDidMount() {
    const { initializeData } = this.props;
    initializeData();
  }

  componentDidUpdate() {
    const { selectedRate } = this.state;
    const { creditAgreements } = this.props;

    if (!selectedRate && creditAgreements && creditAgreements.length) {
      this.setState({ selectedRate: [ creditAgreements[0] ] });
    }
  }

  onChangeSelector = (newMethod) => {
    this.setState({ selectedRate: newMethod });
  };

  renderModal = () => {
    const { selectedRate, showModal } = this.state;

    return (
      <InfoModal
        onClose={() => this.setState({ showModal: false })}
        selectedRate={selectedRate && selectedRate.length ? selectedRate[0] : null}
        show={showModal}
      />
    );
  };

  render() {
    const { creditAgreements, loading } = this.props;
    const { selectedRate } = this.state;

    if (loading || !selectedRate || !selectedRate.length) {
      return <Loading />;
    }
    return (
      <div className="payment-component">
        <div className="payment-header">
          <span>Págalo en</span>
          <button type="button" onClick={() => this.setState({ showModal: true })}>
            más info
          </button>
        </div>
        <Selector
          onChange={this.onChangeSelector}
          options={creditAgreements}
          valueField="instalment_count"
          values={selectedRate}
        />
        {this.renderModal()}
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
