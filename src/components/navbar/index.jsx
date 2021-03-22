import CartWidgetComponent from '../cartwidget';
import './navstyles.scss';
import { NavLink } from 'react-router-dom';

const NavbarComponent =  () => {
    return (
        <>  
        <nav>
            <ul className='navlist--1'>
                <li><NavLink to="/">VER TODO</NavLink></li>
                <li><NavLink to={`/PS4`}> PS4</NavLink></li>
                <li><NavLink to="/NSwitch"> SWITCH</NavLink></li>
                <li><NavLink to="/FunkoPop"> FunkoPop</NavLink></li>
                <li><NavLink to="/Contacto"> Contacto </NavLink></li>
            </ul>
            <CartWidgetComponent />
        </nav>
        </> 
    );
}

export default NavbarComponent;
