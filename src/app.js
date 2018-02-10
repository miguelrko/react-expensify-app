import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
///

    configureStore.dispatch(addExpense(
    {
        description:'water bill',
        note: 'first expensive',
        amount: 250,
        createdAt: 25
    }));

    configureStore.dispatch(addExpense(
    {
        description:'gas bill',
        note:'second expense',
        amount: 666,
        createdAt: 30
    }));

configureStore.dispatch(setTextFilter('GAS'));

// console.log(getVisibleExpenses(configureStore.getState().expenses, configureStore.getState().filters));


const jsx = (
    <Provider store={configureStore}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));