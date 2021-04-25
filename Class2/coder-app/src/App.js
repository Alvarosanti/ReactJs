import React from 'react'
import { NavBar } from './components/NavBar'
import Catalogo  from '../src/container/ItemListContainer'


export const App = () => {
  return (
    <div>
      <NavBar/>
      <Catalogo/>
    </div>
  );
}

export default App;
