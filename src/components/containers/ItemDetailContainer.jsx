import React, {useState, useEffect} from 'react';
import './stylescontainers.scss';
import ItemDetailComponent from '../ItemDetail';
import productList from '../../mocks/productList'; 

const itemsPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res(productList);
    }, 2000);
});

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({});
    // console.log(id);

    useEffect(() => {
        itemsPromise.then((resp) => {
            let item = resp.find(prod => (id) => 
            {return prod.id === 1})
            setItem(item)
        });
    }, []);

    // console.log(item);
    return (
    <>
    <ItemDetailComponent item={item} />
    </>
    );
};

export default ItemDetailContainer;

















