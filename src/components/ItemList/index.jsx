import React from 'react';
import Item from '../Item';
import './itemlistStyles.scss';

const ItemListComponent = ({items}) => {

    return (
        <>
        
        <div className="bloque">
            { items.length > 0
            ?  items.map(item=>{
                return (
                    <div className="itemList"> 
                    <Item key={item.categoria}
                        id={item.id} 
                        title={item.data.title} 
                        price={item.data.price}
                        img={item.data.img}/>
                    </div>
                )
            })
            : <p>Loading...</p>}
        </div>
        </>
    )
}

export default ItemListComponent;


