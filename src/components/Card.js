import React from 'react'
import { useState } from 'react';
import { useDispatchOrder, useOrder } from './ContextReducer';


export default function Card(props) {

  let data = useOrder();
  let [qty, setQty] = useState(1);
  let itemPrice = props.price * qty;
  var [bgColor, changeBackground] = useState('green');

  let dispatch = useDispatchOrder();
  const handleAddOrders = async () => {

    await dispatch({ type: "Add", id: props.id, quantity : qty, price : props.price });
    console.log(data);

  }
 
  return (
    <div >
      <div className="card mt - 3 m-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src="https://media.istockphoto.com/id/1459715799/photo/pizza-with-ham-and-cheese.jpg?s=612x612&w=is&k=20&c=VjwEtwH2XJ9RG7ed1eypr7STh2KEM7ySeS5TvMOvnfg=" className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title" style={{marginLeft : '20px'}}>{props.dishName}</h5>
          <div className='container w-100'>

            <select className='m-2 h-100' onChange={(e) => setQty(qty = e.target.value)}>
              {Array.from(Array(10), (e, i) => {

                return (
                  <option key={i + 1} value={i + 1} > {i + 1}</option>
                )

              })}
            </select>

            {/* <select className = "m-2 h-100 rounded" >
                <option value = "half">half</option>
                <option value = "full">full</option>
              </select> */}

            <div className='d-inline h-100 fs-5'>
              Total Price = {itemPrice}Rs
            </div>

            <hr></hr>
            <button className='AddOrdersButton' onClick = {handleAddOrders} style={{ backgroundColor: `${bgColor}`, color: 'white', border: '0px' }} onMouseEnter={() => changeBackground(bgColor = '#33cc00')} onMouseLeave={() => changeBackground(bgColor = 'green')}>ADD To MyOrders</button>
          </div>
        </div>
      </div>
    </div>
  )
}
