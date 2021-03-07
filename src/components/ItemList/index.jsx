import React from 'react';
import Item from '../Item';


const ItemListComponent = ({items}) => {

    return (
        <>
        
        <div className="listBox">
            { items.length > 0
            ?  items.map(item=>{
                return (
                    <div className="list"> 
                    <Item key={item.categoria}
                     id={item.id} 
                     title={item.data.title} 
                     price={item.data.price}/>
                    </div>
                )
            })
            : <p>Loading...</p>}
        </div>
        </>
    )
}

export default ItemListComponent;


