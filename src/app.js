import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './Router/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expensess';
import getVisable from './selectors/expensess';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './style/style.scss';

const store = configureStore();
store.dispatch(addExpense({description:'Water bill',amount: 5400 }));
store.dispatch(addExpense({description:'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({description:'Rent', amount: 109500 }));




const state = store.getState();
const visableExpense = getVisable(state.expenses, state.filters);
console.log(visableExpense)

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

 ReactDOM.render(jsx, document.getElementById('app'));