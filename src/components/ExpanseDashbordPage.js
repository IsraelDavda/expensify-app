import React from 'react';
import ExpenseList from './expenseList';
import ExpenseFiltersList from './expenseFiltersList';


const ExpanseDashbordPage = () => (
    <div>
    <ExpenseFiltersList />
    <ExpenseList />
    </div>
);

export default ExpanseDashbordPage;