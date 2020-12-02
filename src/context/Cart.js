import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [state, setState] = useState();
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const checkout = () => {
    setState("Completed!");
    setTimeout(() => {
      window.location.replace("/");
    }, 3000);
  };
  return (
    cart.length > 0 && (
      <div className="container">
        <div className="row float-right">
          <button
            type="button"
            className="btn btn-danger"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          >
            <i className="fas fa-shopping-cart fa-1"></i>-{cart.length}
          </button>

          <div
            class="modal fade bd-example-modal-lg"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
            data-backdrop="false"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title h4" id="myLargeModalLabel">
                    Your cart
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">{item.id}</th>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                          <td>
                            <span onClick={() => handleRemoveItem(item.id)}>
                              <i className="fas fa-times"></i>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>
                          <strong> Totatl Price - {totalPrice} </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div class="modal-footer">
                  <span className="text-success">{state}</span>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button onClick={checkout} className="btn btn-primary">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
