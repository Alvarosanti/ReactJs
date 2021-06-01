import React, { useState } from 'react';
import '../container/login2.css';
import { Link, Route } from 'react-router-dom';
import { useCartContext } from '../components/CartContext';

function Checkout() {
	const { items, removeItem, clearItems, precioTotal } = useCartContext();
	const [ usuario, setUsuario ] = useState([]);
	const handleInputChange = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		console.log(name, 'data user', value);
		setUsuario({
			[name]: value
		});
		console.log('data usuario obj', e);
	};
	return (
		<div>
			<div class="container py-5">
				<div class="row mb-5">
					<div class="col-lg-8 text-black py-4 text-center mx-auto">
						<h1 class="display-4">Check Out</h1>
						<p class="lead mb-0">Estas a punto de finalizar tu compra.</p>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                    <ul
						id="myTab2"
						role="tablist"
						class="nav nav-tabs nav-pills with-arrow lined flex-column flex-sm-row text-center">
						<li class="nav-item flex-sm-fill">
							<div class="bg-light rounded-p2 px-4 py-3 text-uppercase font-weight-bold">
								detalle de tu pedido{' '}
							</div>
						</li>
					</ul>
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
					</div>
                    
				</div>
                
				<div class="row py-5 p-4 bg-white rounded shadow-sm">
					<ul
						id="myTab2"
						role="tablist"
						class="nav nav-tabs nav-pills with-arrow lined flex-column flex-sm-row text-center">
						<li class="nav-item flex-sm-fill">
							<div class="bg-light rounded-p2 px-4 py-3 text-uppercase font-weight-bold">
								datos personales{' '}
							</div>
						</li>
					</ul>
					<div id="myTab2Content" class="tab-content">
						{/* tab create user order */}
						<div id="profile2" role="tabpanel" aria-labelledby="profile-tab" class=" px-4 py-5">
							<form>
								<div class="form-row">
									<div class="form-group col-md-6">
										<input
											type="text"
											class="form-control"
											name="name"
											onChange={handleInputChange}
											placeholder="Nombres"
										/>
									</div>
									<div class="form-group col-md-6">
										<input
											type="text"
											class="form-control"
											name="lastname"
											onChange={handleInputChange}
											placeholder="Apellidos"
										/>
									</div>
									<div class="form-group col-md-6">
										<input
											type="text"
											class="form-control"
											name="email"
											onChange={handleInputChange}
											placeholder="Email"
										/>
									</div>
									<div class="form-group col-md-6">
										<input
											type="text"
											class="form-control"
											name="dni"
											onChange={handleInputChange}
											placeholder="Dni"
										/>
									</div>
									<div class="col-md-12">
										<Link to={'/checkout'} class="btn btn-dark rounded-p2 btn-block">
												Terminar compra
										</Link>
										{/* btn btn-primary */}
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* <Checkout dataUser={dataUser}/> */}
		</div>
	);
}

export default Checkout;
