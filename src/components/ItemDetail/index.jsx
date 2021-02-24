import {useState, useContext} from 'react';
import './itemdetail.scss';
import ItemCountComponent from '../ItemCount';
import { Link } from 'react-router-dom';
// import LoadingComponent from '../Loading';
import { CartContext } from '../../components/context/CartContext';
// import swal from "sweetalert";



const ItemDetailComponent = ({ item }) => {

    const [finCompra, setFinCompra] = useState(false)

    const { addCart } = useContext (CartContext);

    const onAdd = (contador) => {
        setFinCompra(true);
        addCart({item: item, quantity: contador})
    }

// console.log(cart);


    
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
                        <ItemCountComponent stock ={item.inventary}
                        initial = {1}
                        onAdd = {onAdd} />
                    </div>}
        </div>
        
        
    </div>
    );
};

export default ItemDetailComponent;







