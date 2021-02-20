import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import MiCuenta from './components/MiCuenta';
import Contacto from './components/Contacto';
import ItemList from './components/ItemList';
import Cart from './components/Cart';

import CartContextComponent from './components/context/CartContext';


function App() {
  return (
    <>
    <div className="App">
      
      <header className="App-header">

      <BrowserRouter>
      {/* <CartContextComponent> */}
        <NavbarComponent />
          <Switch>

            <Route exact path = '/'>
              <ItemListContainer greeting= {`Bienvenidos`} />
            </Route>

            
            <Route exact path = '/product/:id' >
              <ItemDetailContainer />
            </Route>
            <Route exact path = '/ItemList/:categoryId'><ItemList/></Route>
            <Route exact path = '/MiCuenta'><MiCuenta/></Route>
            <Route exact path = '/Contacto'><Contacto/></Route>
            <Route exact path = '/Cart'><Cart/></Route>


          </Switch>

          {/* </CartContextComponent> */}
      </BrowserRouter>
      </header>
    </div>
    </>
  );
}

export default App;
