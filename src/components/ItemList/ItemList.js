import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ props }) => (
    <ul>
        <li><Item props= { props[0] } /></li>
        <li><Item props= { props[1] } /></li>
        <li><Item props= { props[2] }/></li>
    </ul>
);

export default ItemList;