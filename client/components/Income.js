import React from 'react';
import Finance from './Finance';

const Income = ({ finances, deleteFinance }) => {
  let items = finances.map( finance => {
    return (
      <Finance deleteFinance={deleteFinance} key={finance.id} {...finance} />
    );
  });

    return (
      <div className="row">
        {items}
      </div>
    )

}

export default Income;
