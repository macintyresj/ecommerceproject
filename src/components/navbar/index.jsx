import CartWidgetComponent from '../cartwidget';
import './navstyles.scss';
import { NavLink } from 'react-router-dom';


const NavbarComponent =  () => {
    return (
        <>  
        <nav>
            <ul className='navlist--1'>
                <li><NavLink to="/"> MARCA</NavLink></li>
                <li><NavLink to={`/ItemList/${'frascos'}`}> Frascos</NavLink></li>
                <li><NavLink to="/ItemList/cajas"> Cajas</NavLink></li>
                <li><NavLink to="/ItemList/botellas"> Botellas</NavLink></li>
            </ul>
            <ul className='navlist--2'>
                <li><NavLink to="/Contacto"> Contacto </NavLink></li>
                <li><NavLink to="/MiCuenta"> Mi cuenta</NavLink></li>
            </ul>
            <CartWidgetComponent />
        </nav>
        </>
    );
}

export default NavbarComponent;
