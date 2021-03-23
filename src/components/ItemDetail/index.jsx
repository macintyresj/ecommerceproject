import {useState} from 'react';
import './itemdetail.scss';
import { useCartContext } from '../context/CartContext';
import ItemCountComponent from '../ItemCount';
import { Link } from 'react-router-dom';


const ItemDetailComponent = ({ item }) => {

    const [finCompra, setFinCompra] = useState(false)

    const { addCart } = useCartContext ();

    const handlerOnAdd = (event, quantity) => {
        event.stopPropagation();

        setFinCompra(true);
        addCart({item, cantidad: quantity,}, quantity)
    }



    return (
    <div className="itemDetail">
        <div className="itemDetails">
            
        <h3>{item.title}</h3>
        <img src={item.img} alt="" className="itemDetail__img"/> <img/></div>
        <div className="texto">
        <p>{item.description}</p>
        <span className="itemDetail__precio">${item.price}</span>
        
        {finCompra ? <div className="comprar">
                        <button><Link to="/Cart">FINALIZAR COMPRA</Link></button>
                        <button><Link to="/">SEGUIR COMPRANDO</Link></button>
                        </div>: 
                    <div>
                        <ItemCountComponent stock ={item.stock}
                        initial = {1}
                        onAdd = {handlerOnAdd} />
                    </div>}
        </div>
        </div>
        
    
    );
};

export default ItemDetailComponent;







