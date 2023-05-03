import React from "react";
import { Link } from "react-router-dom";
import { useOrder } from "../components/ContextReducer";

export default function MyOrders() {
  let data = useOrder();
  return (
    <div style={{ margin: "50px" }}>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Order No</th>
            <th scope="col">Dish Name</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
      <Link to="/">
        <button style={{ backgroundColor: "red", color: "white" }}>
          Go to Home
        </button>
      </Link>
      <Link to="/">
        <button
          type="submit"
          style={{
            position: "relative",
            left: "980px",
            backgroundColor: "green",
            color: "white",
          }}
        >
          Place Order
        </button>
      </Link>
    </div>
  );
}
