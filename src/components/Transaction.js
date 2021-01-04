import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

export const Transaction = ({ transaction }) => {

	console.log('$ transaction.js > start');

	const { deleteTransaction } = useContext(GlobalContext);

	// console result = '+' and '-'
	const sign = transaction.amount < 0 ? '-' : '+';

	return (
		// change color for transaction amount.
		<li className={transaction.amount < 0 ? 'minus' : 'plus'}>
			{transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
			<button
				onClick={() => deleteTransaction(transaction.id)}
				className="delete-btn">Delete
			</button>
		</li>
	)
}

// Notes:

// Math.abs() :
// - This function returns the absolute value of a number.

