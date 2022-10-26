import './App.css';
import ItemListContainer from './containers/ItemListContainer/index2.jsx';
import NavBar from './componentes/NavBar/index.jsx';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = {'Bienvenidos a mi prototype'}/>
    </div>
  );
}

export default App;
