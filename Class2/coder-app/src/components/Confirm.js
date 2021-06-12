import React, { useState,useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { useCartContext } from '../components/CartContext';
import { useCheckOutData } from '../container/Checkout';
import { useParams } from 'react-router-dom';

function Confirm() {

    const { items, precioTotal,dataUsr,orderId ,removeAllItems} = useCartContext();

    return (
        <div key={items.id} class="container py-5">
        <div class="row mb-5">
            {/* encabezado principal*/}
            <div class="col-lg-8 text-black py-4 text-center mx-auto">
                <h1 class="display-4">Confirmacion</h1>
                <p class="lead mb-0">Gracias {dataUsr.name}, su orden ha sido procesada,</p>
                <p class="lead mb-0">Su numero de seguimiento es: <b>{orderId}</b></p>
                <p class="lead mb-0">Nos estaremos comunicando por medio de su correo: {dataUsr.email}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
            <ul
                id="myTab2"
                role="tablist"
                class="nav nav-tabs nav-pills with-arrow lined flex-column flex-sm-row text-center">
                <li class="nav-item flex-sm-fill">
                    {/* titulo encabezado detalle orden */}
                    <div class="bg-light rounded-p2 px-4 py-3 text-uppercase font-weight-bold">
                        detalle de tu pedido{' '}
                    </div>
                </li>
            </ul>
            {/* tabla detalle de los productos */}
                <div id="cartTable" class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" class="border-0 bg-light">
                                    <div class="p-2 px-3 text-uppercase">Product</div>
                                </th>
                                <th scope="col" class="border-0 bg-light">
                                    <div class="py-2 text-uppercase">Price</div>
                                </th>
                                <th scope="col" class="border-0 bg-light">
                                    <div class="py-2 text-uppercase">Quantity</div>
                                </th>
                            </tr>
                        </thead>
                        {/* muestra items del carrito */}
                        <tbody>
                            {items.map((x) => (
                                <tr>
                                    <th scope="row" class="border-0">
                                        <div class="p-2">
                                            <div class="col-md-3">
                                                <img class="img-fluid mx-auto d-block image" src={x.pictures} />
                                            </div>
                                            <div class="ml-3 d-inline-block align-middle">
                                                <h5 class="mb-0">
                                                    <a>{x.description}</a>
                                                </h5>
                                                <span class="text-muted font-weight-normal font-italic d-block">Category:{' '}{x.categoryId}</span>
                                            </div>
                                        </div>
                                    </th>
                                    {/* precio unitario */}
                                    <td class="border-0 align-middle">
                                        <strong>{x.price}&#36;</strong>
                                    </td>
                                    {/* cantidad unitaria */}
                                    <td class="border-0 align-middle">
                                        <strong>{x.cant}</strong>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                        <div class="col-lg-12">
                            <div class="p-3">
                                    <li class="d-flex justify-content-between py-3 border-top">
                                        <strong class="text-muted">Total</strong>
                                        <h5 class="font-weight-bold">${precioTotal()}</h5>
                                    </li>
                            </div>
                        </div>
                </div>
                <a href="/" onClick={removeAllItems} class="btn btn-dark rounded-p2 py-2 btn-block">Finalizar</a>
            </div>
        </div>
        </div>
    )
}

export default Confirm
