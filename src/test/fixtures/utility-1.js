import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import SelectExpensesTotal from '../../selectors/expensesTotal';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  }, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  }, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  }];

  const total = selectExpensesTotal(expenses)
  console.log(numeral(total).format('$0,0.00'))
