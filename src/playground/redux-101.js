import { createStore } from 'redux';


const incrementCount = ({incrementBy = 1}={}) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({decrementBy = 1}={}) => ({
    type: 'DENCREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});
const setCount = ({count}) => ({
    type: 'SET',
    count
});

const store = createStore((state={count:0}, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {
               count: state.count + action.incrementBy};
        case 'DECREMENT':
            return {
              count:  state.count - action.decrementBy};
        case 'RESET':
            return {
              count: 0};
        case 'SET':
            return {
            count: action.count }
        default:
        return state;
    }
});

console.log(store.getState());

store.dispatch(incrementCount({incrementBy:9}))
console.log(store.getState());

store.dispatch(store.dispatch(decrementCount({decrementBy:6})));
console.log(store.getState());

store.dispatch(store.dispatch(decrementCount()));
    console.log(store.getState());
store.dispatch(resetCount())
console.log(store.getState());
store.dispatch({
    type: 'INCREMENT',
    incrementBy:5
})
console.log(store.getState());
store.dispatch(decrementCount({decrementBy:4}))

console.log(store.getState());
store.dispatch(decrementCount({decrementBy:10}));
console.log(store.getState());
store.dispatch(setCount({count:101}));

console.log(store.getState());

const book ={
    title: 'age is enemy',
    autohr: 'Rayn holiday',
    publisher:{
        name: 'Puglin'
    }
}
 const {name:publiserName = 'self-published', title} =  book.publisher;

 console.log(publiserName)

 const items = ['coffe (hot)', '$2.5', '$3.0', '$1.9']
 const [coffe, , price] = items

 console.log(`You take ${coffe} with price ${price}`)