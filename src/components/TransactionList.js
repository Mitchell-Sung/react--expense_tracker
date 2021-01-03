import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../contexts/GlobalState';

export const TransactionList = () => {

  // Use object context for transactions.
  // const context = useContext(GlobalContext);

  // Use array context for transactions. 
  const { transactions } = useContext(GlobalContext);

	return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id}
          transaction={transaction} />
        ))}
      </ul>      
    </div>
	)
}