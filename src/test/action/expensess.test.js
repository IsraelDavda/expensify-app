import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, removeExpense, editExpense, setExpenses, setStartExpenses } from '../../actions/expensess';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) =>{
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('sould setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
})

test('should edit things to expense', () => {
    const edit = editExpense('123', {note:'hello i\'m note'});
    expect(edit).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            note:'hello i\'m note'
        }
    })
})
test('should setup addExpense object value', ()=> {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add expense to datebase and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'Its was a great',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) =>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });


});
test('should add expense with defualt to datebase and store', (done) => {
    const store = createMockStore({});
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) =>{
        expect(snapshot.val()).toEqual(expenseDefault);
        done()
    })

});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase', (done) =>{
    const store = createMockStore({});
    store.dispatch(setStartExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

// test('should return addExpense without date', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense:{
//         id: expect.any(String),
//         note:'',
//         amount:0,
//         createdAt:0,
//         description:''
//         }
//     })
// })