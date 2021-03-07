import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import MiCuenta from './components/MiCuenta';
import Contacto from './components/Contacto';
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContext';
import CheckoutComponent from './components/Checkout';
import PS4 from './components/Productos/PS4';
import NSwitch from './components/Productos/NSwitch';
import FunkoPop from './components/Productos/FunkoPop';

function App() {
  return (
    <>
    <div className="App">
      
      <header className="App-header">

      <BrowserRouter>
      <CartContextProvider>
        <NavbarComponent />
          <Switch>

            <Route exact path = '/'>
              <ItemListContainer />
            </Route>

            
            <Route exact path = '/item/:id' >
              <ItemDetailContainer />
            </Route>
            <Route exact path = '/PS4'><PS4/></Route>
            <Route exact path = '/NSwitch'><NSwitch/></Route> 
            <Route exact path = '/FunkoPop'><FunkoPop/></Route>
            <Route exact path = '/MiCuenta'><MiCuenta/></Route>
            <Route exact path = '/Contacto'><Contacto/></Route>
            <Route exact path = '/Cart'><Cart/></Route>
            <Route path="/Checkout">
            <CheckoutComponent />
        </Route>


          </Switch>

        </CartContextProvider>
      </BrowserRouter>
      </header>
    </div>
    </>
  );
}

export default App;
