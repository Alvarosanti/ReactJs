import React from 'react'
import { NavBar } from './components/NavBar'
import Catalogo  from '../src/container/ItemListContainer'
import Footer from './components/Footer'


export const App = () => {
  return (
    <div>
      <NavBar/>
      <Catalogo/>
      <Footer/>
    </div>
  );
}

export default App;
