import { connect } from 'react-redux';

import Home from '../pages/Home.jsx';
import { addModal } from '../modules/modals.js';
import { createOrder, updateOrder, deleteOrder } from '../modules/orders.js';
import { getOrderList } from '../selectors/orderList.js';
import { getOrderByIds } from '../selectors/orders.js';

const mapStateToProps = state => {
  return {
    orders: getOrderList(state),
    orderByIds: getOrderByIds(state),
  };
};

export default connect(
  mapStateToProps,
  { addModal, createOrder, updateOrder, deleteOrder }
)(Home);
