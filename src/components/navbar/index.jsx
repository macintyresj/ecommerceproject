import CartWidgetComponent from '../cartwidget';
import './navstyles.scss';



const NavbarComponent =  () => {
    return (
        <>  
        <nav>
            <ul className='navlist--1'>
                <li><a href="/"> MARCA</a></li>
                <li><a href="/Frascos"> Frascos</a></li>
                <li><a href="/Cajas"> Cajas</a></li>
                <li><a href="/Botellas"> Botellas</a></li>
            </ul>
            <ul className='navlist--2'>
                <li><a href="/Contacto"> Contacto </a></li>
                <li><a href="/MiCuenta"> Mi cuenta</a></li>
            </ul>
            <CartWidgetComponent />
        </nav>
        </>
    );
}

export default NavbarComponent;
