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
        amount: 666,
        createdAt: 25
    }));

    configureStore.dispatch(addExpense(
    {
        description:'gas bill',
        note:'second expense',
        amount: 250,
        createdAt: 30
    }));

//configureStore.dispatch(setTextFilter('waTER'));

// console.log(getVisibleExpenses(configureStore.getState().expenses, configureStore.getState().filters));


const jsx = (
    <Provider store={configureStore}>
        <AppRouter />
    </Provider>
);

// class Album extends React.Component {

//     constructor(){
//         super();
//         this.state = {
//             albums: []
//         }
//     }

//     componentDidMount() {
//         axios.get('https://jsonplaceholder.typicode.com/photos')
//         .then(res => {
//             let photo = res.data.sort((a, b) => {
//                 return b.albumId - a.albumId
//             }).

//             this.setState({albums: photo});

//             console.log(photo);
//         }).catch(err => {
//             console.log(err)
//         });
//     }

//     render(){
//         return <h1>Prueba</h1>
//     }

// }

ReactDOM.render(jsx,document.getElementById('app'));