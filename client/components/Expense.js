import React from 'react';
import Finance from './Finance';

const Expense = ({ finances, deleteFinance }) => {
  let items = finances.map( finance => {
    if (finance.what !== true) {
      return (
        <Finance deleteFinance={deleteFinance} key={finance.id} {...finance} />
      );
    }
  });


    return (
      <div className="row">
      <h4>Expense</h4>
        {items}
      </div>
    )

}

export default Expense;
