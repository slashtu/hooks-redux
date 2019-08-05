import { connect } from 'react-redux';

import ModalView from '../components/ModalView.jsx';

import { removeModal } from '../modules/modals.js';
import { selectModal } from '../selectors/modals.js';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const modal = selectModal(state, id);

  return {
    id,
    modal,
  };
};

export default connect(
  mapStateToProps,
  { removeModal }
)(ModalView);
