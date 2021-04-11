import './App.css'
import  ButtonCl from './ButtonCL/ButtonCl'
import { PureComponent } from 'react'

// componente contenedor
function App() {
  return (
      <div className="App">
      <header className="App-header">
        <ButtonCl text={'Soy el puto Nueno btn'} color={'red'} />
      </header>
    </div>
  );
}

export default App;
 