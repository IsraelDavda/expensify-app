import React from 'react';
import ExpenseList from './expenseList';
import ExpenseFiltersList from './expenseFiltersList';
import ExpensesSummary from './ExpenseSummary';


const ExpanseDashbordPage = () => (
    <div>
    <ExpensesSummary />
    <ExpenseFiltersList />
    <ExpenseList />
    </div>
);

export default ExpanseDashbordPage;