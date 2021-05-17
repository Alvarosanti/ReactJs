import React from 'react';
import { NavBar } from './components/NavBar';
import ItemListContainer  from '../src/container/ItemListContainer';
import Footer from './components/Footer';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './container/ItemDetailContainer';
import Home from './components/Home';
import {CartContext1} from './components/CartContext';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const App = () => {
  return (
    <div style={{background: 'rgb(212, 141, 141)'}}>
   <CartContext1>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route path='/home'>
              <Home/>
            </Route>
            <Route  path='/item/:id'>
              <ItemDetailContainer/>
            </Route>
            <Route  path='/catalogo'>
              <ItemListContainer/>
            </Route>
            <Route path='/'>
              <Home/>
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
   </CartContext1>
  
    </div>
  );
}

export default App;
