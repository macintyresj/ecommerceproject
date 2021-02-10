// import './cardItemstyle.scss';
import ItemCountComponent from '../ItemCount';
import swal from "sweetalert";
import productList from '../../mocks/productList';
import Item from "../Item";

const ItemDetailComponent = ({products}) => {
    const onAdd = () => {
        swal("Producto agregado exitosamente");
    }

    return (
        
        <div>
            <h3>Descripcion</h3>
            {productList.map((product) => {
        return <Item key={product.id} product={product.name, product.descripción, productList.price} />;
        })}
            <div>
                
            <ItemCountComponent stock ={productList.inventary}
            initial = {1}
            onAdd = {onAdd} />
            </div>
        </div>
        
    )
}

export default ItemDetailComponent; 