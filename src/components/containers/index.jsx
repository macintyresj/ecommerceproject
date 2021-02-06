import ItemCountComponent from '../ItemCount';
import swal from "sweetalert";
import './stylescontainers.scss';



const ItemListContainer = (props) => {
    
    const onAdd = () => {
        swal("Producto agregado exitosamente");
    }
    return (
        <>
        <h1>{props.greeting}</h1>

        <ItemCountComponent stock ={5} initial = {1}
        onAdd = {onAdd} />
        
        </>
    )
}

export default ItemListContainer;