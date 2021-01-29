import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './components/containers';


function App() {
  return (
    <>
    <div className="App">
      <NavbarComponent />
      <header className="App-header">
      </header>
      <ItemListContainer greeting= {`Bienvenidos`} />
    </div>
    </>
  );
}

export default App;
