import ItemCountComponent from '../ItemCount';
import React, {useState} from 'react';
import swal from "sweetalert";
import './stylescontainers.scss';



const ItemListContainer = (props) => {

    const [contador, setContador] = useState(1)

    const onAdd = (stock) => {
        if ( contador < stock) {
        setContador(contador + 1);
        }else{
            swal("Upps!", "Stock no disponible");
        }
    }
    const onSubstract = (stock) => {
        if ( contador > 1) {
        setContador(contador - 1);
        }else{
            swal("Elige al menos una unidad");
        }
    }

    return (
        <>
        <h1>{props.greeting}</h1>

        <ItemCountComponent stock ={5} contador = {contador}
        onSubstract={onSubstract} onAdd = {onAdd} />
        
        </>
    )
}

export default ItemListContainer;