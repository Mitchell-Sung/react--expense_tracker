import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
	transactions: [
		{ id: 1, text: 'Flower', amount: -20 },
		{ id: 2, text: 'Salary', amount: 300 },
		{ id: 3, text: 'Book', amount: -10 },
		{ id: 4, text: 'Camera', amount: 150 }
	]
}
console.log('$ GlobalState.js > initialState > bye');

// Create context API
export const GlobalContext = createContext(initialState);
console.log('$ GlobalState.js > globalContext() > create_context');

// Provider component
export const GlobalProvider = ({ children }) => {
	console.log('$ GlobalState.js > globalProvider() > start');
	// dispatch == dispatchAction()
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions
	function deleteTransaction(id) {
		console.log('$ GlobalState.js > deleteTransaction() > start');
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		});
	}

	function addTransaction(transaction) {
		console.log('$ GlobalState.js > addTransaction() > start');
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction
		});
	}

	return (<GlobalContext.Provider value={{
		transactions: state.transactions,
		deleteTransaction,
		addTransaction
	}}>
		{children}
	</GlobalContext.Provider>);
}