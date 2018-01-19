import { key, ADDRESS_FETCH, ADDRESS_FETCH_CANCEL, ADDRESS_FETCH_FULFILLED,
         ADDRESS_FETCH_REJECTED } from './actions';

export const selectors = {
  address: state => state[key].address,
  fetchStatus: state => state[key].fetchStatus
};

const initialState = {
  address: null,
  fetchStatus: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
  case ADDRESS_FETCH:
    return {
      ...state,
      fetchStatus: `fetching ID:${action.payload}... ${(new Date()).toLocaleString()}`,
      address: null
    };
  case ADDRESS_FETCH_FULFILLED:
    return {
      ...state,
      address: action.payload,
      fetchStatus: `Results from ${(new Date()).toLocaleString()}`
    };
  case ADDRESS_FETCH_REJECTED:
    return {
      ...state,
      fetchStatus: `errored: ${action.payload}`
    };
  case ADDRESS_FETCH_CANCEL:
    return {
      ...state,
      fetchStatus: 'address cancelled'
    };
  default:
    return state;
  }
}
