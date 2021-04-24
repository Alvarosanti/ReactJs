import React from 'react'
import { ItemListContainer } from './components/ItemListContainer'

import { NavBar } from './components/NavBar'

export const App = () => {
  const saludo = 'Bienvenidos a nuestra tienda online'
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={saludo} />
    </div>
  );
}

export default App;
