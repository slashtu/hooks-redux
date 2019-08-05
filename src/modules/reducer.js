import { combineReducers } from 'redux-immutable';
import orders from './orders.js';
import orderList from './orderList.js';
import modals from './modals.js';

const reducers = { orders, orderList, modals };

export default combineReducers(reducers);
