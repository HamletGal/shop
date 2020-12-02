import React from "react";
import Table from "./Table";

function ModalType({ cart, state, checkout, handleRemoveItem, totalPrice }) {
  return (
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
          className="modal fade bd-example-modal-lg"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
          data-backdrop="false"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title h4" id="myLargeModalLabel">
                  Your cart
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <Table
                  cart={cart}
                  handleRemoveItem={handleRemoveItem}
                  totalPrice={totalPrice}
                />
              </div>
              <div className="modal-footer">
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
  );
}

export default ModalType;
