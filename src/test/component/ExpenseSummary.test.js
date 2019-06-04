import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpenseSummary';

test('should currectly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});
test('should currectly render ExpensesSummary with multiply expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={234567898765} />);
    expect(wrapper).toMatchSnapshot();
});