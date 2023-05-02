import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Navbar() {
  var [txtColor1, setColor1] = useState('black');
  var [txtColor2, setColor2] = useState('black');
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/" style={{ color: "black" }}>MyFoods</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" style={{ position: 'relative', left: "1010px" }}>
                <Link onMouseEnter = {() => setColor1(txtColor1 = 'blue')} onMouseLeave = {() => setColor1(txtColor1 = 'black')} className="nav-link" to="/login" style={{ color: `${txtColor1}` }}>Login</Link>
              </li>
              <li className="nav-item" style={{ position: 'relative', left: "1020px" }}>
                <Link onMouseEnter={() => setColor2('green')}
                  onMouseLeave={() => setColor2('black')} 
                  className="nav-link" to="/signup" style={{ color: `${txtColor2}` }}>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;