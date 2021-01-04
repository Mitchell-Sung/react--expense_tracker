import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

export const Balance = () => {

	console.log('$ balance.js > start');

	const { transactions } = useContext(GlobalContext);

	// variable amounts == array.
	const amounts = transactions.map(transaction => transaction.amount);
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

	return (
		<div>
			<h4>Your Balance</h4>
			<h1>${total}</h1>
		</div>
	)
}

// Notes:

// map() :

// reduce() :

// toFixed() :