import { Collection } from 'immutable';

export const getOrderByIds = state => {
  const orders = state.get('orders');
  return orders instanceof Collection ? orders.toJS() : {};
};
