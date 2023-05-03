import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
    console.log("hi");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/users/signin";
    const data = {
      email: credentials.email,
      password: credentials.password,
    };
    axios
      .post(url, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((res) => {
        if (res.data.error) alert(res.data.error);
        else {
          console.log("Succesful login");
          console.log(res);
          localStorage.setItem("accessToken", res.data.token);
          navigate("/");
        }
      });
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        className="container"
        style={{
          padding: "100px",
          paddingTop: "70px",
          border: "2px solid black",
          boxSizing: "border-box",
          height: "500px",
          width: "500px",
          marginTop: "50px",
          backgroundColor: "white",
        }}
      >
        <h4
          style={{ color: "black", textAlign: "center", marginBottom: "20px" }}
        >
          Welcome to MyFoods
        </h4>
        <h6
          style={{ color: "black", textAlign: "center", marginBottom: "20px" }}
        >
          Please login to your account
        </h6>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter username
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
