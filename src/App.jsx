import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './components/containers';


function App() {
  return (
    <>
    <div className="App">
      
      <header className="App-header">
      <NavbarComponent />
      </header>
      <ItemListContainer greeting= {`Bienvenidos`} />
    </div>
    </>
  );
}

export default App;
