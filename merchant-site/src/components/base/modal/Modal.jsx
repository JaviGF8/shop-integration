import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Modal = ({ children, close, header, footer }) => (
  <div className="modal-container">
    <div className="modal-wrapper">
      <div className="modal-header">
        {header}
        <button type="button" className="close-modal-btn" onClick={close}>
          X
        </button>
      </div>
      <div className="modal-body">{children}</div>
      {footer ? <div className="modal-footer">{footer}</div> : null}
    </div>
  </div>
);

Modal.defaultProps = {
  children: null,
  close: null,
  footer: null,
  header: <h3>Modal</h3>,
};

Modal.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  close: PropTypes.func,
  footer: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  header: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
};

export default Modal;
