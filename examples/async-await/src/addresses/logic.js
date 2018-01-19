import { createLogic } from 'redux-logic';
import { ADDRESS_FETCH, ADDRESS_FETCH_CANCEL, addressFetchFulfilled,
         addressFetchRejected } from './actions';

const delay = 2; // 2s delay for interactive use of cancel/take latest

export const userProfFetchLogic = createLogic({
  type: ADDRESS_FETCH,
  cancelType: ADDRESS_FETCH_CANCEL,
  latest: true, // take latest only

  // use axios injected as httpClient from configureStore logic deps
  // we also have access to getState and action in the first argument
  // but they were not needed for this particular code
  process({ httpClient, action }, dispatch, done) {
    const uid = action.payload;
    fetchAddress(httpClient, uid)
      .then(user => dispatch(addressFetchFulfilled(user)))
      .catch(err => {
        console.error(err); // might be a render err
        dispatch(addressFetchRejected(err))
      })
      .then(() => done()); // call when finished dispatching
  }
});

/**
  Makes request to get user, then requests profile and merges them.
  Note: async function returns a promise which resolves to the user.
  @param {object} httpClient - axios like client
  @return {promise} userPromise - promise resolving to user with profile
  @throws {error} fetchError - any fetching error
 */
async function fetchAddress(httpClient, uid) {
  // the delay query param adds arbitrary delay to the response
  const user =
    await httpClient.get(`https://reqres.in/api/users/${uid}?delay=${delay}`)
      .then(resp => resp.data.data); // use data property of payload

  // we can use data from user to fetch fake profile
  const profile =
    await httpClient.get(`https://reqres.in/api/profile/${user.id}`)
      .then(resp => resp.data.data);

  user.profile = profile; // combine profile into user object
  return user;
}


export default [
  userProfFetchLogic
];
