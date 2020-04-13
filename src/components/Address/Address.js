import React from 'react';
import './address.scss';

export default function Address({ data }) {

  return (
    <div className="Address-main">
        {
            data.map(item => <p>{ item }</p>)
        }
    </div>
  );
}
