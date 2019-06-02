import React from 'react';
import { connect } from 'react-redux';
import ShowAll from './expenseListItem';
import Selectexp from '../selectors/expensess';

export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.length === 0 ? (
            <p>no expenses</p>
        ):(
            props.expenses.map((expense)=>{
                return <ShowAll key={ expense.id} {...expense} />
            })
        )
    }
        </div>
        );

const mapStateToProps = (state) =>{
     return{
        expenses: Selectexp(state.expenses, state.filters)

    }}



export default connect(mapStateToProps)(ExpenseList);