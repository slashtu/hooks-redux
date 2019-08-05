import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FadeInFromBottom from '../styles/FadeInFromBottom.js';
import FadeOutToBottom from '../styles/FadeOutToBottom.js';

class ModalView extends PureComponent {
  close = () => {
    const { removeModal, id } = this.props;
    removeModal({ id, status: 'closing' });
  };

  render() {
    const { modal, children } = this.props;
    if (!modal) {
      return null;
    }

    return createPortal(
      <StyledModalView status={modal.status}>
        {React.cloneElement(children, { close: this.close })}
      </StyledModalView>,
      document.querySelector('#modal-root')
    );
  }
}

ModalView.propTypes = {
  children: PropTypes.object.isRequired,
  id: PropTypes.string,
  modal: PropTypes.object,
  removeModal: PropTypes.func.isRequired,
  status: PropTypes.string,
};

ModalView.defaultTypes = {};

const StyledModalView = styled.div`
  position: fixed;
  top: 0;
  width:100%
  animation: 0.6s forwards
    ${({ status }) =>
      'closing' === status ? FadeOutToBottom : FadeInFromBottom};
`;

export default ModalView;
