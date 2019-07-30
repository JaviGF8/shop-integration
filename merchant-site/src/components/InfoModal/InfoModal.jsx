import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../base/modal/Modal';

const InfoModal = ({ selectedRate, onClose, ...rest }) => (
  <Modal
    {...rest}
    className="info-modal"
    close={onClose}
    header={
      <div className="info-header">
        <h3>Fracciona tu pago</h3>
        <h3>Sequra</h3>
      </div>
    }>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    </p>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
      enim ipsam voluptatem quia voluptas sit aspernatur
    </p>
    <p>
      En el importe mostrado ya se incluyen la cuota de{' '}
      <strong>{selectedRate && selectedRate.instalment_fee && selectedRate.instalment_fee.string}/mes</strong> por lo
      que no tendrás ninguna sorpresa
    </p>
  </Modal>
);

InfoModal.defaultProps = {};

InfoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  selectedRate: PropTypes.object.isRequired,
};

export default InfoModal;
