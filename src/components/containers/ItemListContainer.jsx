import React, {useState, useEffect} from 'react';
import './stylescontainers.scss';
import ItemListComponent from '../ItemList';
import { getFirestore } from '../firebase';


const ItemListContainer = ({category= null}) => {

    let [items, setItems] = useState ([]);
    const baseDeDatos = getFirestore();

    
    useEffect(() => {
        if(!category) {
            baseDeDatos.collection("ITEM")            
                .get()
                .then(docs => {
                    let arr = [];
                    docs.forEach(doc => {
                        arr.push({id:doc.id, data:doc.data()})
                    })

                    setItems(arr);
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            baseDeDatos.collection("ITEM").where('category', '==', category)
                .get()
                .then(docs => {
                    let arr = [];
                    docs.forEach(doc => {
                        arr.push({id:doc.id, data:doc.data()})
                    })

                    setItems(arr);
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [baseDeDatos, category]);



    return (
        <>
        {/* <h1>{props.greeting}</h1> */}
        
        <ItemListComponent items = {items} />

        </> 
    );
} 

export default ItemListContainer;