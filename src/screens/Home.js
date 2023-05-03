import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
// import axios from "axios";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const url = "http://localhost:5000/api/dishes";

  const loadData = async () => {
    // axios
    //   .get(url, {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json;charset=UTF-8",
    //     },
    //   })
    //   .then(({ data }) => {
    //     console.log(data);
    //     console.log(data.body);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    // console.log("hello");
    response.forEach((dish) => {
      console.log(dish);
    });
    setFoodItem(response);
    // console.log(response);
    // console.log(response[0], response[1]);
    // setFoodItem(response);
    // setFoodCat(response);
  };

  // console.log("hello");
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {foodItem.map((item) => (
          <Card
            id={item.dish_id}
            price={item.dish_price}
            dishName={item.dish_name}
          />
        ))}
        {/* <Card /> */}
        {/* <Card id="4" price="100" dishName="Pizza" /> */}
        {/* <Card id="5" price="300" dishName="Biriyani" /> */}
      </div>
      <div style={{ backgroundColor: "white" }}>
        <Footer />
      </div>
    </div>
  );
}
