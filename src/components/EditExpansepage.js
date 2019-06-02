import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expenseForm';
import { editExpense, removeExpense } from '../actions/expensess';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/');
    };
    onRemove = ()=>{
        this.props.removeExpense({id:this.props.expense.id})
        this.props.history.push('/')}

    render() {
        return (
            <div>
                <ExpenseForm
                expense={this.props.expense}
                onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
                );
            }
}




    const mapStatetoProps = (state, props) =>({
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
        })

    const mapDispatchToProps = (dispatch) => ({
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (data) => dispatch(removeExpense(data))
    })

export default connect(mapStatetoProps, mapDispatchToProps)(EditExpensePage);