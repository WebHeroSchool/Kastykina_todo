import React from 'react';
import InputItem  from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
  

const App = () => {
    const items = [
        {
           value: 'Learn React'
        },
        {
            value: 'Read a book' 
        },
        {
            value: 'Watch a movie' 
        },
    ];

    return (
        <div>
        <h1>todos</h1>
        <InputItem />
        <ItemList items = { items } />
        <Footer count = {3} />
    </div>);
}

export default App;