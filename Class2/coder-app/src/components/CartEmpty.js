import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
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
                                            <div align="center">
                                                <h3 class="lead mb-4">No tienes art&iacute;culos en el carro de compras. ¡Vamos de compras!</h3>
                                                <Link to="/" class="btn btn-primary  py-2"><a >
											        Empieza a comprar
										        </a></Link>
                                            </div>
									</div>d
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>
	);
};

export default CartEmpty;
