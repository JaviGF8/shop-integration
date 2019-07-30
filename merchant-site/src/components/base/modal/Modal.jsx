import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Modal = ({ children, className, close, header, footer, show }) => (
  <div className={`modal-container${className ? ` ${className}` : ''}${show ? '' : ' hidden'}`}>
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
  className: null,
  close: null,
  footer: null,
  header: <h3>Modal</h3>,
  show: false,
};

Modal.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  className: PropTypes.string,
  close: PropTypes.func,
  footer: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  header: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
  show: PropTypes.bool,
};

export default Modal;
