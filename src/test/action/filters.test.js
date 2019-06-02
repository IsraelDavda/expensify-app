import {
        setStartDate,
        setEndDate,
        sortByAmount,
        sortByDate,
        setTextFilter
    } from '../../actions/filters';
import moment from 'moment';

test('should set the start date & recive it', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})
test('should set the end date & recive it', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})
test('should set the start date & recive it', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',

    })
})
test('should set the start date & recive it', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',


    })
})
test('should set the start date & recive it', () => {
    const action = setTextFilter('hello');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'hello'

    })
})