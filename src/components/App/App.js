import React from 'react';
import InputItem  from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from'./App.module.css';

  

const App = () => {
    const items = [
        {
           value: 'Learn React',
           isDone: false
        },
        {
            value: 'Read a book',
            isDone: false
        },
        {
            value: 'Watch a movie',
            isDone: true
        },
    ];

    return (
        <div className = {styles.wrap}>
        <h1 className = {styles.header}>todos</h1>
        <InputItem />
        <ItemList items = { items } />
        <Footer count = {3} />
    </div>);
}

export default App;