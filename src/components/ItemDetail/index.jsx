
import './itemdetail.scss';
import ItemCountComponent from '../ItemCount';
import swal from "sweetalert";


const ItemDetailComponent = ({ item }) => {
    

    const onAdd = () => {
        swal("Producto agregado exitosamente");
    }

    return (
    <div className="cardDetail">
        <div key={item.id}>
        <h3>{item.name}</h3>
        <img src={item.img} alt=""/> <img/></div>
        <div className="descripcion">
        <p>{item.detail}</p>
        <span>{item.price}</span>
        <div>
            <ItemCountComponent stock ={item.inventary}
            initial = {1}
            onAdd = {onAdd} />
        </div>
        </div>
    </div>
    );
};

export default ItemDetailComponent;







