import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ModalView from '../containers/ModalView.js';
import OrderForm from '../components/OrderForm.jsx';
import OrderItem from '../components/OrderItem.jsx';
import Button from '../components/Button.jsx';

class Home extends Component {
  state = {
    selectedOrderId: null,
  };

  handleCreate = () => {
    const { addModal } = this.props;
    this.setState({ selectedOrderId: null });
    addModal({ id: 'orderForm', status: 'opening' });
  };

  handleOrderSelect = id => {
    const { addModal } = this.props;

    this.setState({ selectedOrderId: id });
    addModal({ id: 'orderForm', status: 'opening' });
  };

  handleOrderDelete = id => {
    const { deleteOrder } = this.props;
    deleteOrder(id);
  };

  renderOrders = () => {
    const { orders } = this.props;

    return orders.map(o => (
      <OrderItem
        key={o.id}
        id={o.id}
        name={o.name}
        price={o.price}
        notes={o.notes}
        onSelect={this.handleOrderSelect}
        onDelete={this.handleOrderDelete}
      />
    ));
  };

  handleFormChange = values => {
    const { createOrder, updateOrder } = this.props;

    if (values.id) {
      updateOrder(values);
    } else {
      createOrder(values);
    }
  };

  render() {
    const { selectedOrderId } = this.state;
    const { orderByIds } = this.props;

    const order = orderByIds[selectedOrderId];

    return (
      <StyledHome>
        <Header>
          <Button onClick={this.handleCreate}>Add a New Order</Button>
        </Header>
        <Content>{this.renderOrders()}</Content>
        <ModalView id="orderForm">
          <OrderForm order={order} onChange={this.handleFormChange} />
        </ModalView>
      </StyledHome>
    );
  }
}

Home.propTypes = {
  addModal: PropTypes.func.isRequired,
  createOrder: PropTypes.func.isRequired,
  deleteOrder: PropTypes.func.isRequired,
  orderByIds: PropTypes.object,
  orders: PropTypes.array,
  updateOrder: PropTypes.func.isRequired,
};

Home.defaultProps = {
  orderByIds: {},
  orders: [],
};

const StyledHome = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80vw;

  @media (min-width: 768px) {
    width: 600px;
  }
`;

const Header = styled.header`
  text-align: center;
`;

const Content = styled.div``;

export default Home;
