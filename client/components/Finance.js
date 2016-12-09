import React from 'react';

const Finance = ({ id, name, what, price, deleteFinance }) => (
  <div className='col s12'>
    <div className='col m8'>
      <div className='center'>
        <div className='col 3'>
          {name}
        </div>
        <div className='col 3'>
          {price}
        </div>
        <div className='col 3'>
          {what}
        </div>
      </div>
    </div>
    <div style={{ cursor: 'pointer'}} className='col m1' onClick={() => deleteFinance(id)}><i className="material-icons">delete</i>
</div>
  </div>
)

export default Finance;
