import './ItemCountStyle.scss';
import React, {useState} from 'react';
import swal from "sweetalert";



const ItemCountComponent = ({stock , initial , onAdd}) => {
    
    const [contador, setContador] = useState(initial);
    

    const onMinus = () => {
        if ( contador > 1) {
        setContador(contador - 1);
        }else{
            swal("Elige al menos una unidad");
        } 
    }

    const onPlus = () => {
        if ( contador < stock) {
        setContador(contador + 1);
        }else{
            swal("Upps!", "Stock no disponible");
        }
    }
    
    
    return (

        <div className="product">

            <button onClick = { onMinus } >-</button>
            <span>{ contador } </span>
            <button onClick= { onPlus }>+</button>
            <div>
            <button onClick = {(event) => onAdd(event, contador)} className="addButton">COMPRAR</button>
        </div>
        </div>

        
        );
};

export default ItemCountComponent; 