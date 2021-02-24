import './cardItemstyle.scss';
// import ItemCountComponent from '../ItemCount';
// import swal from "sweetalert";
import { Link } from 'react-router-dom';

const ItemComponent = ({product}) => {
    // const onAdd = (contador) => {
    //     swal("Producto agregado exitosamente");
    //     console.log(contador);
    // }

    return (
        <Link class="goto" to={`/product/${product.id}`}>
        <div className="cardItem">
            <h3>{product.name}</h3>
            <div><img width="100" src={product.img} alt=""/></div>
            <p>{product.detail}</p>
            <b>${product.price}</b>

            {/* <div> */}
            {/* <ItemCountComponent stock ={product.inventary}
            initial = {1}
            onAdd = {onAdd} /> */}
            {/* </div> */}
            {/* <button>VER MAS</button> */}
        </div>
        </Link>
        
    )
}

export default ItemComponent; 