import React, {useState, useEffect} from 'react';
import './stylescontainers.scss';
import ItemListComponent from '../ItemList';
import { getFirestore } from '../firebase';


/*Acá tuve problemas con el código que habíamos visto en clase me dejó de funcionar cuando creé otra colección => probé 
con lo de la ppt y recomendaciones deñ tutor, cuando logré que funcione no quise cambiarlo, entiendo que no es tan eficiente, pero anda*/ 

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
        
        <ItemListComponent items = {items} />

        </> 
    );
} 

export default ItemListContainer;