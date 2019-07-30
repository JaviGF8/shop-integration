import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../base/loading/Loading';
import Selector from '../base/selector/Selector';
import Modal from '../base/modal/Modal';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      selectedMethod: null,
      showModal: false,
    };
  }

  componentDidMount() {
    const { initializeData } = this.props;
    initializeData();
  }

  onChangeSelector = (newMethod) => {
    this.setState({ selectedMethod: newMethod });
  };

  renderModal = () => <Modal close={() => this.setState({ showModal: false })} />;

  render() {
    const { creditAgreements, loading } = this.props;
    const { selectedMethod, showModal } = this.state;

    if (loading) {
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
          labelField="instalment_count"
          onChange={this.onChangeSelector}
          options={creditAgreements}
          valueField="instalment_count"
          value={selectedMethod}
        />
        {showModal && this.renderModal()}
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
