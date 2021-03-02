import React from 'react';
import Item from '../Item';


const ItemListComponent = ({products}) => {

    return (
        <>
        
        <div>
            { products.length > 0
            ?  products.map(item=>{
                return (
                    <div > 
                    <Item key={item.category} id={item.id} title={item.data.title} price={item.data.price}/>
                    </div>
                )
            })
            : <p>Buscando Productos..</p>}
        </div>
        </>
    )
}

export default ItemListComponent;


