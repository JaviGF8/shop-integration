import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export default class Selector extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
      selected: null,
    };
  }

  renderOption = (option) => {
    const { labelKey } = this.props;

    return <div>{option && option[labelKey]}</div>;
  };

  render() {
    const { collapsed, selected } = this.state;
    const { labelKey, emptyMessage, options, valueKey } = this.props;

    return (
      <div className="selector">
        <div className="selector-input">
          <span>{(selected && selected[labelKey]) || emptyMessage}</span>
          <button
            className={`selector-options${collapsed ? ' collapsed' : ''}`}
            onClick={() => this.setState({ collapsed: !collapsed })}
            type="button">
            {'>'}
          </button>
        </div>
        <div className={`selector-options${collapsed ? ' collapsed' : ''}`}>
          {options && 0 < options.length ? options.map(this.renderOption) : null}
        </div>
      </div>
    );
  }
}

Selector.defaultProps = {
  emptyMessage: 'No data selected',
  labelKey: 'label',
  options: [],
  valueKey: 'value',
};

Selector.propTypes = {
  emptyMessage: PropTypes.string,
  labelKey: PropTypes.string,
  options: PropTypes.array,
  valueKey: PropTypes.string,
};
