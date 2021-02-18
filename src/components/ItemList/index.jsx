import Item from "../Item";



const ItemListComponent = ({ products }) => {

    return(
    <div className="listadoProductos">
    {products.map((product) => {
        return <Item key={product.id} product={product} />;

    })}
    </div>
);
};

export default ItemListComponent;