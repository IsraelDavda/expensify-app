
import SelectExpensesTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses';


test('should return 0 if no expenses', () => {
    const res = SelectExpensesTotal([]);
    expect(res).toBe(0)
});
test('should currctly add up one expense', () => {
    const res = SelectExpensesTotal([expenses[0]]);
    expect(res).toBe(195)
});
test('should currctly multiply expenses', () => {
    const res = SelectExpensesTotal(expenses);
    expect(res).toBe(114195)
});