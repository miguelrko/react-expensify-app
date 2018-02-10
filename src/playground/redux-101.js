import { createStore } from 'redux';

//Action generators

const incrementCount = ({ incrementBy = 1} = {}) => ({type: 'INCREMENT', incrementBy});
const decrementCount = ({ decrementBy = 1} = {}) => ({type: 'DECREMENT', decrementBy});
const resetCount = () => ({type: 'RESET'});
const setCount = ({ count} = {}) => ({type: 'SET', count});

//Reducers
//1. Reducers are pure functions
//2. Never change state or action

const countReducer = (state = { count : 0, val : "abc" }, action) => {

    switch (action.type ){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy,
                val: state.val
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy,
                val: state.val
            };
        case 'RESET':
            return {
                count: 0,
                val: state.val
            };
        case 'SET':
            return {
                count: action.count,
                val: state.val
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 15}));

store.dispatch(incrementCount());

//unsubscribe();

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 4}));

store.dispatch(decrementCount());

store.dispatch(setCount({count: 234}));