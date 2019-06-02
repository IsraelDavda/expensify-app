import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expenseForm';
import { addExpense } from '../actions/expensess';


 export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };
    render(){
        return(
            <div>
                <h1> Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}


const mapDispatchToProps = () => ({
    addExpense: (expense) => dispatch(addExpense(expense))
})


export default connect(null, mapDispatchToProps)(AddExpensePage);