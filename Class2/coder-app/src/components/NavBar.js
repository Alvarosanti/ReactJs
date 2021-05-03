import React from 'react'
import { CartWidget } from './CartWidget.js'
import { Dropdown } from 'react-bootstrap';

export const NavBar = () => {
    return(
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/home">Lamps</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/catalogo">Catalogo</a>
                    </li>
                   
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="">
                            Categorias
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Dormitorio</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Salon</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Terrazas</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Comedor</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Baño</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* <li className="nav-item">
                        <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
                    </ul>
                </div>
                    <CartWidget/>
            </nav>
            
      </>
    )
}