import {useState} from 'react';
import './itemdetail.scss';
import ItemCountComponent from '../ItemCount';
import { Link } from 'react-router-dom';
import cartComponent from '../Cart'
// import swal from "sweetalert";



const ItemDetailComponent = ({ item }) => {

    const [finCompra, setFinCompra] = useState(false)

    const onAdd = () => {
        setFinCompra(true);
    }

console.log(finCompra);

    
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







