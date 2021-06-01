import React from 'react'
import { CartWidget } from './CartWidget.js'
import { Dropdown } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () => {
    return(
            <>
            {/* barra de navegacion */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* barra de navegacion con bootstrap */}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    {/* logo lamp a la home */}
                    <a><Link to="/" className="navbar-brand" className="dropdown-item">Lamps</Link></a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                    {/* navlink a la home */}
                    <li className="nav-item active">
                        <NavLink className="nav-link" to='/'><a>Home<span className="sr-only"></span></a></NavLink>
                    </li>

                    {/* catalogo hot sale proximamente */}
                    {/* <li className="nav-item">
                        <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Ofertas</a>
                    </li> */}

                    {/* categorias en el navbar */}
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categorias
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a><Link className="dropdown-item" to="/category/dormitorio"> Dormitorio</Link></a>
                        <a><Link className="dropdown-item" to="/category/salon"> Salon</Link></a>
                        <a><Link className="dropdown-item" to="/category/terraza"> Terrazas</Link></a>
                        <a><Link className="dropdown-item" to="/category/comedor"> Comedor</Link></a>
                        <a><Link className="dropdown-item" to="/category/baño"> Baño</Link></a>

                        {/* separador otras categorias */}
                        {/* <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a><Link className="dropdown-item" to="/category/all">Todos</Link></a>*/}
                        </div>
                    </li>
                    
                    </ul>
                </div>
                    <CartWidget/>
            </nav>
            
      </>
    )
}