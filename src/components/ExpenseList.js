import React from 'react';
import { connect } from 'react-redux';

//Patron general para React-Redux:

//Regular unconnected Component
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.length}
        {props.filters.text}
    </div>
);

//Function para extraer la data del store/state
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};

//Call to the API using connect
export default connect(mapStateToProps)(ExpenseList);