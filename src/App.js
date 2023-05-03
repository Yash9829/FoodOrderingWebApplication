import "./App.css";
// import Navbar from './components/Navbar';
import Home from "./screens/Home";
import Login from "./screens/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./screens/Signup";
import { OrderProvider } from "./components/ContextReducer";
import MyOrders from "./screens/MyOrders";
// import '../node_modules/bootstrap-dark-5/dist/css'
function App() {
  return (
    <OrderProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/MyOrders" element={<MyOrders />} />
          </Routes>
        </div>
      </Router>
    </OrderProvider>
  );
}

export default App;
