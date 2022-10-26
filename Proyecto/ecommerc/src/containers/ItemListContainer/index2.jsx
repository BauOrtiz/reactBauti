import React from "react";
import './style2.css';
function ItemListContainer ({greeting}) {
    return (
        <div className='item-list-container'>
            <h2>{greeting}</h2>
        </div>
    )
}