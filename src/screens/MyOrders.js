import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatchOrder, useOrder } from '../components/ContextReducer'
import { useNavigate } from 'react-router-dom';
export default function MyOrders() {
  let data = useOrder();
  let dispatch = useDispatchOrder();
  let navigate = useNavigate();
  let totalPrice = data.reduce((total, food) => parseInt(total) + parseInt(food.quantity) * parseInt(food.price), 0);
  if (data.length === 0)
    return (<div style={{margin : '40px', position : 'relative', left : '500px'}}>
    <Link to = "/" style={{textDecoration : 'none', color : 'black'}}><h1>
      No Orders!
    </h1>
    </Link>
    </div>)
  else {
    return (

      <div style={{ margin: '50px' }}>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Order No</th>
              <th scope="col">Dish Name</th>
              <th scope="col">Qty</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => {
              console.log(food);
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{food.name}</td>
                  <td>{food.quantity}</td>
                  <td>{food.price}</td>
                  <td><button onClick={() => dispatch({ type: "Delete", index: index, id: food.id })} style={{ backgroundColor: 'red', color: 'white' }}>Remove</button></td>
                </tr>);
              {/* <tr>
              <th scope="row">{index + 1}</th>
              <td>{food.name}</td>
              <td>{food.quantity}</td>
              <td>{food.price}</td>
            </tr> */}

            })}
            
          </tbody>
        </table>
        <div style={{display : 'flex', justifyContent : 'flex-end', backgroundColor : 'lightgreen', height : "30px"}}>Total Price = {totalPrice}{" "}Rs</div>
        <div style={{marginTop : '10px'}}>
        <button onClick={() => navigate("/")} style={{ backgroundColor: 'red', color: 'white' }}>Go to Home</button>
        <button onClick={() => navigate("/")} type='submit' style={{ position: 'relative', left: '980px', backgroundColor: 'green', color: 'white' }}>Place Order</button>
        </div>
      </div>
    )
  }
}
