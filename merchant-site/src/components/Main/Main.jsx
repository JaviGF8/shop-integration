import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loading from '../base/loading/Loading';
import Selector from '../base/selector/Selector';
import InfoModal from '../InfoModal';

const getPrice = () => {
  const priceHtmlElement = document.getElementById('product-price');
  let price = null;

  if (priceHtmlElement && priceHtmlElement.innerText) {
    price = Number.parseFloat(
      priceHtmlElement.innerText
        .replace('€', '')
        .replace(',', '.')
        .trim(),
    );
  }
  return { priceHtmlElement, price };
};

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      price: null,
      priceHtmlElement: null,
      selectedRate: null,
      showModal: false,
    };
  }

  componentDidMount() {
    const { initializeData } = this.props;
    initializeData();
    this.setState({ ...getPrice() });
  }

  componentDidUpdate() {
    const { selectedRate } = this.state;
    const { creditAgreements } = this.props;

    if (!selectedRate && creditAgreements && creditAgreements.length) {
      this.setState({ selectedRate: [ creditAgreements[0] ] });
    }
  }

  onChangeSelector = (newMethod) => {
    const { priceHtmlElement } = this.state;

    const price = `TODO Calculate ${newMethod && newMethod[0] && newMethod[0].instalment_count}`;
    priceHtmlElement.innerText = price;

    this.setState({ selectedRate: newMethod, price });
  };

  renderModal = () => {
    const { price, selectedRate, showModal } = this.state;

    return (
      <InfoModal
        price={price}
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
