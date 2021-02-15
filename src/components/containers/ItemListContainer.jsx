
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