import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';

const Cart = () => {
	const { items, removeItem, clearItems, precioTotal ,cartEmpty} = useCartContext();
	console.log('cart items: raa', items);
	console.log('cart items: raa', items.length);
	console.log('cart items: raa', cartEmpty);

	
	return (
		<div>
				<div class="px-4 px-lg-0">
					<div class="container text-black py-5 text-center">
						<h1 class="display-4">Shopping Cart</h1>
						<p class="lead mb-0">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec
							auctor in, mattis vitae leo.
						</p>
					</div>

					<div class="pb-5">
						<div class="container">
							<div class="row">
								<div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
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
													<th scope="col" class="border-0 bg-light">
														<div class="py-2 text-uppercase">Remove</div>
													</th>
												</tr>

											</thead>
											<tbody>
											{items.map((x) => (
												<tr>
													<th scope="row" class="border-0">
														<div class="p-2">
															<div class="col-md-3">
																<img
																	class="img-fluid mx-auto d-block image"
																	src={x.pictures}
																/>
															</div>
															<div class="ml-3 d-inline-block align-middle">
																<h5 class="mb-0">
																	<a >
																		<Link class="text-dark d-inline-block align-middle" to={`/item/${x.id}`}>
																			{x.description}
																		</Link>
																	</a>
																</h5>
																<span class="text-muted font-weight-normal font-italic d-block">
																	Category: <Link class="text-dark" to={`/category/${x.categoryId}`}>{x.categoryId}</Link>
																	
																</span>
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
													{/* remove icon */}
													<td class="border-0 align-middle">
													{/* Style=(pointer{cursor: pointer;} */}
														<a Style="cursor:pointer" onClick={()=>removeItem(x.id)} class="text-dark">
															<i class="fa fa-trash" />
														</a>
													</td>
												</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>

							<div class="row py-5 p-4 bg-white rounded shadow-sm">
								<div class="col-lg-12">
									<div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
										Order summary{' '}
									</div>
									<div class="p-4">
										<p class="font-italic mb-4">
											Shipping and additional costs are calculated based on values you have
											entered.
										</p>
										<ul class="list-unstyled mb-4">
											<li class="d-flex justify-content-between py-3 border-bottom">
												<strong class="text-muted">Order Subtotal </strong>
												<strong>${precioTotal()}</strong>
											</li>
											<li class="d-flex justify-content-between py-3 border-bottom">
												<strong class="text-muted">Shipping and handling</strong>
												<strong>Free</strong>
											</li>
											<li class="d-flex justify-content-between py-3 border-bottom">
												<strong class="text-muted">Tax</strong>
												<strong>$0.00</strong>
											</li>
											<li class="d-flex justify-content-between py-3 border-bottom">
												<strong class="text-muted">Total</strong>
												<h5 class="font-weight-bold">${precioTotal()}</h5>
											</li>
										</ul>
										<Link to={"/login"} class="btn btn-dark rounded-p2 py-2 btn-block">Procceed to checkout </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>
	);
};

export default Cart;
