import './App.css'
import NavBar from './Components/Navbar'
import ItemListContainer from './Container/ItemListContainer'

// componente contenedor
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Coders"/>
    </div>
  );
  // return <>
  //   <NavBar/>
  //   <ItemListContainer/>
  // </>
}

export default App;
 