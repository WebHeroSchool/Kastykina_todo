import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';


const ItemList = ({ items }) => (<ul className = {styles.list}>
    { items.map(item => <li key = {item.value}>
        <Item value = { item.value } /></li>)}

const ItemList = ({ items }) => (<ul>
    { items.map(item => <li key = {item.value} className = {styles.list} >
        <Item value = { item.value } isDone = {item.isDone} /></li>)}
</ul>);


export default ItemList;