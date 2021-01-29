import CartWidgetComponent from '../cartwidget';
import './navstyles.scss';



const NavbarComponent =  () => {
    return (
        <>  
        <nav>
            <ul className='navlist--1'>
                
                <li><a href="#"> Categoría 1</a></li>
                <li><a href="#"> Categoría 2</a></li>
                <li><a href="#"> Categoría 3</a></li>
            </ul>
            <ul className='navlist--2'>
                <li><a href="#"> Contacto </a></li>
                <li><a href="#"> Mi cuenta</a></li>
            </ul>
            <CartWidgetComponent />
        </nav>
        </>
    );
}

export default NavbarComponent;
