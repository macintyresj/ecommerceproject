import {useState} from 'react';
import './itemdetail.scss';
import { useCartContext } from '../context/CartContext';
import ItemCountComponent from '../ItemCount';
import { Link } from 'react-router-dom';
// import LoadingComponent from '../Loading';
// import swal from "sweetalert";

const ItemDetailComponent = ({ item }) => {

    const [finCompra, setFinCompra] = useState(false)

    const { addCart } = useCartContext ();

    const handlerOnAdd = (event, quantity) => {
        event.stopPropagation();

        setFinCompra(true);
        addCart({item, cantidad: quantity,}, quantity)
    }



    return (
    <div className="cardDetail">
        <div>
            
        <h3>{item.name}</h3>
        <img src={item.img} alt=""/> <img/></div>
        <div className="descripcion">
        <p>{item.detail}</p>
        <span>${item.price}</span>
        
        {finCompra ? <div>
                        <button><Link to="/Cart">FINALIZAR COMPRA</Link></button>
                        <button> <Link to="/">SEGUIR COMPRANDO</Link></button>
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







