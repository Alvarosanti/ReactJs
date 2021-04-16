import React from 'react'

const NavBar = () => {
    return <>
        {/* <nav className="bar">Lamps</nav> */}
        {/* <CartWidget /> */}
        <nav>
            <div class="nav-wrapper">
                <a href="Home" class="left">Lamp<i className="fab fa-react"></i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down"> 
                    <li><a href="products.html">Products</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contactus.html">Contact Us</a></li>
                    <li><a href="shoppingCart"><i class="large material-icons"> shopping_cart </i></a></li>
                </ul>
            </div>
        </nav>
    </>
}
export default NavBar;