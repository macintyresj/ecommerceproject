import './cardItemstyle.scss';
import ItemCountComponent from '../ItemCount';
import swal from "sweetalert";
import { Link } from 'react-router-dom';

const ItemComponent = ({product}) => {
    const onAdd = () => {
        swal("Producto agregado exitosamente");
    }

    return (
        
        <div className="cardItem">
            <h3>{product.name}</h3>
            <div><img width="100" src={product.img} alt=""/></div>
            <b>${product.price}</b>
            <div>
            <ItemCountComponent stock ={product.inventary}
            initial = {1}
            onAdd = {onAdd} />
            </div>
            <Link to={`/product/${product.id}`}><button>VER MAS</button></Link>

        </div>
        
    )
}

export default ItemComponent; 