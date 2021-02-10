import React, {useState, useEffect} from 'react';
// import './stylescontainers.scss';
import ItemDetailComponent from '../../ItemDetail';
import productList from '../../../mocks/productList'; 

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState ([]);

    useEffect(() => {
        const myPromise = new Promise((res, rej) => {
            setTimeout(() => 
            res(productList), 3000);
            console.log(productList, detail);
            
        });

        myPromise.then((result) => {setDetail(result)});
        console.log(detail);
    }, []);


    return (
        <>
        
        <ItemDetailComponent detail= {detail} />

        </>
    )
} 

export default ItemDetailContainer;