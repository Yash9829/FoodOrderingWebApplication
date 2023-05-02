import React from 'react'
import { Link } from 'react-router-dom'
export default function Signup() {
    return (
        <div style={{ /*padding: "0px", margin: '0px',*/ backgroundColor: 'white' }}>
            <div className='container' style={{ padding: "100px", paddingTop: "50px", border: "2px solid black", boxSizing: "border-box", height: "500px", width: "500px", marginTop: "50px", backgroundColor: 'white' }}>
                <h4 style={{ color: 'black', textAlign: 'center', marginBottom: '20px' }}>Create an Account</h4>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputName1" className="form-label">Enter new user name</label>
                        <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <Link to = "/"><button type="submit" className="btn btn-primary">SignUp</button></Link>
                </form>
            </div>
        </div>
    )
}
