import Item from "../Item";
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import productList from '../../mocks/productList';


const ItemListComponent = () => {
        const {categoryId} = useParams();
        const [categoryList,setCategoryList] = useState([]);
    
        useEffect(() => {
            // console.log (categoryId);
            let productos;
            if (categoryId) {
            productos = productList.filter ((el) => {
                return el.category === categoryId
            })}else{
            productos = productList
            };
            setCategoryList(productos);
        }, [categoryId]) 
    
        return(
        <>
        <h1>{categoryId}</h1>
        <div className="listadoProductos">
            
            {categoryList.map((product) => {
            return <Item key={product.categoryId} product={product} />;
    
        })}
        </div>
        </>
    );
    };
    
    export default ItemListComponent;







// const ItemListComponent = ({ products }) => {

//     return(
//     <div className="listadoProductos">
//     {products.map((product) => {
//         return <Item key={product.id} product={product} />;

//     })}
//     </div>
// );
// };

// export default ItemListComponent;