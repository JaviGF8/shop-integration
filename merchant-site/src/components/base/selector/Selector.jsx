import React, { Component } from 'react';
import Select from 'react-dropdown-select';

import './index.scss';

export default class Selector extends Component {
  calculatePrice = () => 'TODO Calculate';

  contentRenderer = (item) => (
    <span>
      Págalo en {item.instalment_count} cuotas de {this.calculatePrice()} €
    </span>
  );

  itemRenderer = ({ item, methods }) => (
    <button type="button" className="option-btn" onClick={() => methods.addItem(item)}>
      {this.contentRenderer(item)}
    </button>
  );

  render() {
    const { ...rest } = this.props;

    return (
      <Select
        {...rest}
        className="rate-selector"
        itemRenderer={this.itemRenderer}
        contentRenderer={({ state }) =>
          state && state.values && state.values.length ?
            this.contentRenderer(state.values[0]) :
            'Ninguna tarifa seleccionada'
        }
      />
    );
  }
}
