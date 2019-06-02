import { addExpense, removeExpense, editExpense } from '../../actions/expensess';

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
    const expenseDate = {
    description :'Rent',
      note :' im note',
      amount : 1950,
      createdAt :1000
    }
    const action = addExpense(expenseDate);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseDate,
            id: expect.any(String)
        }
    })
})

test('should return addExpense without date', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
        id: expect.any(String),
        note:'',
        amount:0,
        createdAt:0,
        description:''
        }
    })
})