import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div style={{backgroundColor: 'white' }}>
            <div className='container' style={{ padding: "100px", paddingTop: "70px", border: "2px solid black", boxSizing: "border-box", height: "500px", width: "500px", marginTop: "50px", backgroundColor: 'white' }}>
                <h4 style={{ color: 'black', textAlign: 'center', marginBottom: '20px' }}>Welcome to MyFoods</h4>
                <h6 style={{ color: 'black', textAlign: 'center', marginBottom: '20px' }}>Please login to your account</h6>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputName1" className="form-label">Enter user name</label>
                        <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <Link to = '/'><button type="submit" className="btn btn-primary">Login</button></Link>
                </form>
            </div>
        </div>
  )
}
