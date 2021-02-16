import CartWidgetComponent from '../cartwidget';
import './navstyles.scss';
import { Link } from 'react-router-dom';


const NavbarComponent =  () => {
    return (
        <>  
        <nav>
            <ul className='navlist--1'>
                <li><Link to="/"> MARCA</Link></li>
                <li><Link to="/Frascos"> Frascos</Link></li>
                <li><Link to="/Cajas"> Cajas</Link></li>
                <li><Link to="/Botellas"> Botellas</Link></li>
            </ul>
            <ul className='navlist--2'>
                <li><Link to="/Contacto"> Contacto </Link></li>
                <li><Link to="/MiCuenta"> Mi cuenta</Link></li>
            </ul>
            <CartWidgetComponent />
        </nav>
        </>
    );
}

export default NavbarComponent;
