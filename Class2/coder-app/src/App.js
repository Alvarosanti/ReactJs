import React from 'react'
import { NavBar } from './components/NavBar'
import Catalogo  from '../src/container/ItemListContainer'
import Footer from './components/Footer'
import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemDetalle from './container/ItemDetailContainer';
import Home from './components/Home'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

export const App = () => {
  return (
    <div style={{background: 'rgb(212, 141, 141)'}}>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route  path='/item/:id'>
            <ItemDetalle/>
          </Route>
          <Route exact path='/catalogo'>
            <Catalogo/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
