// rendering by expense dashbaord
// connecting to the store for:
// -expense count (how many expense )visable
// - expense total (how many total is)
import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expensess';
import selectExpensesTotal from '../selectors/expensesTotal';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal /100).format('$0,0.00');

    return (
        <div>
            <h1> Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return{
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
};
export default connect(mapStateToProps)(ExpensesSummary)
