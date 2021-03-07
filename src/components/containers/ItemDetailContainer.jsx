import React, {useState, useEffect} from 'react';
import './stylescontainers.scss';
import ItemDetailComponent from '../ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore} from '../firebase';

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [item, setItem] = useState({});
    // console.log(id);

    useEffect(() => {
        const baseDeDatos = getFirestore()
        const itemCollection = baseDeDatos.collection("ITEM")

        itemCollection.doc(id).get()
            .then(doc => {
                if(doc.exists){
                setItem(doc.data());
            }})
            .catch((error) => {
                console.log(error)
            })
        }, [id]);
            
    return (
    <>
    <div>
    {item  ?
    <ItemDetailComponent item= {item} /> : <p>Loading... </p>}
    </div>
    </>
    );
};

export default ItemDetailContainer;