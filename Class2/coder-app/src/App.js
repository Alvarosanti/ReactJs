import React from 'react';
import { NavBar } from './components/NavBar';
import ItemListContainer  from '../src/container/ItemListContainer';
import Footer from './components/Footer';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './container/ItemDetailContainer';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './container/Login'
import CartEmpty from './components/CartEmpty';
import CheckOut from './container/Checkout';
import Confirm from './components/Confirm';
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
              <ItemListContainer/>
            </Route>
            <Route path='/category/:id'>
              <ItemListContainer/>
            </Route>
            <Route path='/item/:id'>
              <ItemDetailContainer/>
            </Route>
            <Route path='/cart'>
              <Cart/>
            </Route>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/checkout'>
              <CheckOut/>
            </Route>
            <Route path='/confirm'>
              <Confirm/>
            </Route>
            <Route path='/cartEmpty'>
              <CartEmpty/>
            </Route>
            <Route path='/'>
             <ItemListContainer/>
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
   </CartContext1>
  
    </div>
  );
}

export default App;
