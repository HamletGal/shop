import React, {useContext, useEffect, useState} from 'react';
import {CartContext} from './CartContext';

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
 
  return (
    cart.length > 0 &&
    <> 
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalCart"><i class="fas fa-shopping-cart fa-1"></i>-{cart.length}</button>
        <div class="modal fade" id="modalCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">Your cart</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
        </div>
      <div class="modal-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
          {cart.map((item) => 
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><a><i class="fas fa-times"></i></a></td>
            </tr>
            )}  
           
          </tbody>
          <tfoot>
              <tr>
                 <strong>Totatl Price - {totalPrice}</strong>
              </tr>
          </tfoot>
        </table>

      </div>
  
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Close</button>
        <button class="btn btn-primary">Checkout</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}



