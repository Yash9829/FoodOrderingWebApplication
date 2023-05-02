import React from 'react'

export default function Card() {
  return (
    <div >
        <div className="card mt - 3 m-3"  style={{ "width": "18rem", "maxHeight" : "360px" }}>
          <img src="https://media.istockphoto.com/id/1459715799/photo/pizza-with-ham-and-cheese.jpg?s=612x612&w=is&k=20&c=VjwEtwH2XJ9RG7ed1eypr7STh2KEM7ySeS5TvMOvnfg=" className="card-img-top" alt="..." style = {{height : "150px", objectFit : "fill"}}/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='container w-100'>

              <select className='m-2 h-100'>
                {Array.from(Array(6), (e, i) => {

                    return (
                      <option key = {i + 1} value = {i + 1}> {i + 1} </option>
                    )

                })}
              </select>

              {/* <select className = "m-2 h-100 rounded" >
                <option value = "half">half</option>
                <option value = "full">full</option>
              </select> */}

              <div className='d-inline h-100 fs-5'>
                Total Price
              </div>
              
            </div>
          </div>
        </div>
      </div>
  )
}
