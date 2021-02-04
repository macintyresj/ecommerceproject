import './ItemCountStyle.scss';
import React, {useState} from 'react';



const ItemCountComponent = ({stock , contador , onAdd, onSubstract}) => {
    
    return (
        <>
        
        <button onClick = {onSubstract} >-</button>
        <span>{contador}</span>
        <button onClick={() => { onAdd(stock) }}>+</button>
        
        <div>
        <button>COMPRAR</button>
        </div>
        </>
        
        );
};

export default ItemCountComponent; 