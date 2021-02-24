import React, {useState, useEffect} from 'react';
import './stylescontainers.scss';
import ItemDetailComponent from '../ItemDetail';
import productList from '../../mocks/productList'; 
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const {id} = useParams();
    const [item, setItem] = useState({});
    console.log(id);

    useEffect(() => {
    
        const itemsPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res(productList);
            }, 1000);
        });    
        
        
        itemsPromise.then((resp) => {
            let item = resp.find(prod => 
            {return prod.id === id})
            setItem(item)
            
            
        });
    }, [id]);

    // console.log(item);
    return (
    <>
    <ItemDetailComponent item={item} />
    </>
    );
};

export default ItemDetailContainer;

















