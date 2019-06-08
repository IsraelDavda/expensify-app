import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './Router/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expensess';
import { login, logout } from './actions/Auth';
import getVisable from './selectors/expensess';
import 'normalize.css/normalize.css';
import './style/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';


const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

 ReactDOM.render(<LoadingPage />, document.getElementById('app'));


 firebase.auth().onAuthStateChanged((user) => {
     if ( user ) {
         store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
     } else {
        store.dispatch(logout());
        renderApp();
        history.push('/')
    }
 });
// store.dispatch(addExpense({description:'Water bill',amount: 5400 }));
// store.dispatch(addExpense({description:'Gas bill', createdAt: 1000 }));
// store.dispatch(addExpense({description:'Rent', amount: 109500 }));




// const state = store.getState();
// const visableExpense = getVisable(state.expenses, state.filters);
// console.log(visableExpense)

// console.log(store.getState());




