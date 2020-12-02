import React from "react";

function Table({ cart, handleRemoveItem, totalPrice }) {
  return (
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
  );
}

export default Table;
