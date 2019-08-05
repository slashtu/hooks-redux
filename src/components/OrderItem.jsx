import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../components/Button.jsx';

class OrderItem extends PureComponent {
  handleUpdate = () => {
    const { id, onSelect } = this.props;
    onSelect(id);
  };

  handleDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  render() {
    const { name, price, notes } = this.props;
    return (
      <StyledOrderItem>
        <OrderInfo>
          <Name>{`Name: ${name}`}</Name>
          <Price>{`Price: ${price}`}</Price>
          <Notes>{notes}</Notes>
        </OrderInfo>
        <Operations>
          <Button size="small" onClick={this.handleUpdate}>
            Update
          </Button>
          <Button size="small" onClick={this.handleDelete}>
            Delete
          </Button>
        </Operations>
      </StyledOrderItem>
    );
  }
}

OrderItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  notes: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

OrderItem.defaultProps = {
  name: '',
  notes: '',
  price: 0,
};

const StyledOrderItem = styled.div`
  height: 150px;
  display: flex;
  margin: 8px 8px;
  padding: 10px 8px;
  border: 1px solid black;
`;

const Name = styled.div``;

const Price = styled.div``;

const Notes = styled.div`
  height: 70px;
  border: 1px solid black;

  overflow-y: auto;
`;

const OrderInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Operations = styled.div`
  width: 70px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default OrderItem;
