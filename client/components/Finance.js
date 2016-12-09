import React from 'react';

const Finance = ({ id, name, what, price, deleteFinance }) => (
  <div className='col s12'>
    <div className='col m8'>
      <div className='center'>
        <div className='col 4'>
        {name} {price} {what}
        </div>
      </div>
    </div>
    <div style={{ cursor: 'pointer'}} className='col m1' onClick={() => deleteFinance(id)}>X</div>
  </div>
)

export default Finance;
