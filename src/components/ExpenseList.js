import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

//Patron general para React-Redux:

//Regular unconnected Component
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => ( 
             <ExpenseListItem {...expense} key={expense.id}/>
        ))}
    </div>
);

//Function para extraer la data del store/state
const mapStateToProps = (state) => {
    // return {
    //     expenses: state.expenses,
    //     filters: state.filters
    // };
    return { 
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
};

//Call to the API using connect
export default connect(mapStateToProps)(ExpenseList);