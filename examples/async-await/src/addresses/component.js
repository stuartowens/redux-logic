import React from 'react';

export default function Adress({ address, fetchStatus, onCancelFetch }) {
  return (
    <div>
      <div>Status: { fetchStatus }</div>
      <button onClick={ onCancelFetch }>Cancel User Fetch</button>
      { adressDetails(address) }
    </div>
  );
}

function addressDetails(address) {
  if (!adress) { return; }
  return (
    <div>
      <h2>{ adress } {adress }</h2>
    </div>
  );
}
