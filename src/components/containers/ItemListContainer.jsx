import React, {useState, useEffect} from 'react';
import './stylescontainers.scss';
import ItemListComponent from '../ItemList';
import { getFirestore } from '../firebase';
import { useParams } from 'react-router-dom'
// import productList from '../../mocks/productList'; 

const ItemListContainer = (props) => {

    const [products, setProducts] = useState ([]);
    const { id } = useParams()

    useEffect(() => {
        const baseDeDatos = getFirestore()
        const itemCollection = baseDeDatos.collection("ITEM")

        itemCollection.get("categoryId","==", 1 )
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id:doc.id, data:doc.data()})
            })

            setProducts(arr);
        })
        .catch((err) => {
            console.log(err);
        })

    }, []);


    return (
        <>
        <h1>{props.greeting}</h1>
        
        <ItemListComponent products = {products} />

        </> 
    );
} 

export default ItemListContainer;