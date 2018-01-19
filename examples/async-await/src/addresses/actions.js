
// unique key namespace used by combineReducers.
// By convention it will match the directory structure to
// make it easy to locate the src.
// Also action types will prefix with the capitalized version
export const key = 'user';

// action type constants
export const ADDRESS_FETCH = 'ADDRESS_FETCH';
export const ADDRESS_FETCH_CANCEL = 'ADDRESS_FETCH_CANCEL';
export const ADDRESS_FETCH_FULFILLED = 'ADDRESS_FETCH_FULFILLED';
export const ADDRESS_FETCH_REJECTED = 'ADDRESS_FETCH_REJECTED';

export const actionTypes = {
  ADDRESS_FETCH,
  ADDRESS_FETCH_CANCEL,
  ADDRESS_FETCH_FULFILLED,
  ADDRESS_FETCH_REJECTED
};

// action creators
export const addressFetch = (id) => (
  {
    type: ADDRESS_FETCH,
    payload: id
  }
);
export const addressFetchCancel = () => ({ type: ADDRESS_FETCH_CANCEL });
export const addressFetchFulfilled = (users) => ({
  type: ADDRESS_FETCH_FULFILLED,
  payload: users
});
export const addressFetchRejected = (err) => ({
  type: ADDRESS_FETCH_REJECTED,
  payload: err,
  error: true
});

export const actions = {
  addressFetch,
  addressFetchCancel,
  addressFetchFulfilled,
  addressFetchRejected
};
