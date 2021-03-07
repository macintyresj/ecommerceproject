import React, {useState, useEffect} from 'react';
import './stylescontainers.scss';
import ItemListComponent from '../ItemList';
import { getFirestore } from '../firebase';


const ItemListContainer = ({category= null}) => {

    let [items, setItems] = useState ([]);
    const baseDeDatos = getFirestore();

    // useEffect(() => {
    //     // conexion a la bd
    //     const baseDeDatos = getFirestore();
    //     // Guardamos la referencia de la coleccion que queremos tomar
    //     const itemCollection = baseDeDatos.collection("ITEM");
    //     // Tomando los 
    //     itemCollection.get().then(async (value) => {
    //         // Usando Promise.all() para esperar que todos los metodos asincronicos se terminen de ejecutar.
    //         let aux = await Promise.all(value.docs.map( async (item) => {
    //             // Llamar otra vez a la bd tomando la categoriaID del element
    //             const CategoriasCollection = baseDeDatos.collection("categorias");
    //             // Tomamos el documento la id de la categoria
    //             let auxCategorias = await CategoriasCollection.doc(item.data().category).get()
    //             return { ...item.data(), categorias:auxCategorias.data().nombre}}))
    //             console.log(aux)
    //             setItems(aux);})}, [])


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
            baseDeDatos.collection("Items").where('category', '==', category)
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
    }, []);



    return (
        <>
        {/* <h1>{props.greeting}</h1> */}
        
        <ItemListComponent items = {items} />

        </> 
    );
} 

export default ItemListContainer;