import React from 'react';

export default function Address({ address, fetchStatus, onCancelFetch, onFetchAddress }) {
  return (
    <div>
      <div>Address: { fetchStatus }</div>
      <button onClick={ onFetchAddress }>Address Fetch!!!</button>
      { addressDetails(address) }
    </div>
  );
}

function addressDetails(address) {
  if (!address) { return; }
  return (
    <div>
      <h2>{ address[0].address.street } {address[0].address.zipcode }</h2>
    </div>
  );
}
