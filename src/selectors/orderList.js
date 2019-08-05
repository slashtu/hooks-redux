import createCachedSelector from 're-reselect';
import { Collection } from 'immutable';

import { getOrderByIds } from './orders';

export const getOrderList = createCachedSelector(
  getOrderByIds,
  state => state.getIn(['orderList', 'data'], []),
  (orderByIds, list) => {
    const result = list
      .map(id => {
        return orderByIds[id];
      })
      .filter(o => o.activated);

    return result instanceof Collection ? result.toJS() : [];
  }
)(() => 'orderList');
