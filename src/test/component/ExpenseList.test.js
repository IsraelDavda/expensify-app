import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/expenseList';
import expenses from '../fixtures/expenses';

test('should render expenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenseList with empty array', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
})