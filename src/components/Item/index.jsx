import './cardItemstyle.scss';
// import ItemCountComponent from '../ItemCount';
// import swal from "sweetalert";

const ItemComponent = ({product}) => {
    

    return (
        
        <div className="cardItem">
            <h3>{product.name}</h3>
            <p>{product.descripcion}</p>
            <b>${product.price}</b>

            
        </div>
        // <div><button onclick= link>Ver más</button></div>
        
    )
}

export default ItemComponent; 