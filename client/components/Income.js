import React from 'react';
import Finance from './Finance';

const Income = ({ finances, deleteFinance }) => {
  let items = finances.map( finance => {
    if (finance.what === true) {
      return (
        <Finance deleteFinance={deleteFinance} key={finance.id} {...finance} />
      );
    }
  });


  let total = finances.reduce((a, b) => a + b, 0)

    return (
      <div className="row">
      <h4>Income</h4>
        {items}
        {total}
      </div>
    )

}

export default Income;
