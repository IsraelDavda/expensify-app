import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expensess';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeenhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
 export default () => {
    const store = createStore(
        combineReducers({
          expenses: expensesReducer,
          filters: filtersReducer
        }),
        composeenhancers(applyMiddleware(thunk))
        //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
      return store;
 };

