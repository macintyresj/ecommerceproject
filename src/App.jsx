import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import MiCuenta from './components/MiCuenta';
import Contacto from './components/Contacto';


function App() {
  return (
    <>
    <div className="App">
      
      <header className="App-header">

      <BrowserRouter>
        <NavbarComponent />
          <Switch>

            <Route exact path = '/'>
              <ItemListContainer greeting= {`Bienvenidos`} />
            </Route>
            
            <Route exact path = '/product/:id' >
              <ItemDetailContainer />
            </Route>
          
            <Route exact path = '/MiCuenta'><MiCuenta/></Route>
            <Route exact path = '/Contacto'><Contacto/></Route>


          </Switch>


      </BrowserRouter>
      </header>
    </div>
    </>
  );
}

export default App;
