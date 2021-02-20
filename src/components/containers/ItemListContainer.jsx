
import React, {useState, useEffect} from 'react';

import './stylescontainers.scss';
import ItemListComponent from '../ItemList';
import productList from '../../mocks/productList'; 

const ItemListContainer = (props) => {

    const [products, setProducts] = useState ([]);

    useEffect(() => {
        const myPromise = new Promise((res, rej) => {
            setTimeout(() => 
            res(productList), 1000);
            
        });

        myPromise.then((result) => {setProducts(result)}); 
    }, []);


    return (
        <>
        <h1>{props.greeting}</h1>
        
        <ItemListComponent products = {products} />

        </> 
    )
} 

export default ItemListContainer;

// import { useEffect, useState } from "react";
// import productList from "../../mocks/productList";
// import Item from "../Item";
// import {useParams} from 'react-router-dom';




// const ItemListComponent = () => {
//     const {categoryId} = useParams();
//     const [categoryList,setCategoryList] = useState([]);

//     useEffect(() => {
//         console.log (categoryId);

//         let productos = productList.filter ((el) => {
//             return el.category === categoryId
//         });
//         setCategoryList(productos);
//     }, [categoryId])

//     return(
//     <div className="listadoProductos">
//         <h3>{categoryId}</h3>
//         {categoryList.map((product) => {
//         return <Item key={product.id} product={product} />;

//     })}
//     </div>
// );
// };

// export default ItemListComponent;