import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//Expensify Reducer Actions:

//ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
//EDIT_EXPENSE
const editExpense = (id, updates = {}) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
//SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
//SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

//We need 2 reducers, 1 for expenses and 1 for filters

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(( { id }) => id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((item) => {
                if(item.id === action.id) {
                    return {
                        ...item,
                        ...action.updates
                    }
                } else {
                    return item;
                }
            });
        default:
            return state;
    }
};

//Filters Reducer
const filtersReducerDefaultState = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

// Filter function: Get Visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy == 'date') {
            return b.createdAt - a.createdAt;
        }
        else {
            return b.amount - a.amount;
        }
    });
};

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense(
    {
        description: 'new expense',
        note: 'this is a test',
        amount: 200,
        createdAt: 2000
    }));


const expenseTwo = store.dispatch(addExpense(
    {
        description: 'second expense',
        note: 'breakfast time',
        amount: 25500,
        createdAt: 1000
    }));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount : 999, note: 'Time to eat chocolate' }));

//  store.dispatch(setTextFilter('NEW'));
//  store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(999));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1000));

// Dummy Data
const demoState = {
    expenses: [{
        id: 'asdasfas',
        description: 'January Rent',
        note: 'this was the payment for this month',
        amount: 54500,
        createdAt: 0
    }],
   filters: {
       text: 'rent',
       sortBy: 'amount', //date or amount
       startDate: undefined,
       endDate: undefined
   }
};


// const user = {
//     name: 'hhe',
//     age: 24
// };

// console.log({
//     ...user,
//     location: 'Philadelphia',
//     name: 'Newone'
// });