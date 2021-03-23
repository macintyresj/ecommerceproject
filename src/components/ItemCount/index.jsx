import './ItemCountStyle.scss';
import React, {useState} from 'react';
import swal from "sweetalert";



const ItemCountComponent = ({stock , initial , onAdd}) => {
    
    const [contador, setContador] = useState(initial); //contador 
    

    const onMinus = () => {
        if ( contador > 1) {
        setContador(contador - 1);
        }else{
            swal("Elige al menos una unidad"); //aparece cuando se quiere hacer 0 el contador
        }  
    }

    const onPlus = () => {
        if ( contador < stock) {
        setContador(contador + 1);
        }else{
            swal("Upps!", "Stock no disponible"); //aparece si el contador es mayor al stock en la base de datos
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