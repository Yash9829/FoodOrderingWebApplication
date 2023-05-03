import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
// import axios from "axios";

const categories = ["Biryani", "Drink", "Curry", "Bread"];

export default function Home() {
  const [foodCat, setFoodCat] = useState("Any");
  const [foodItem, setFoodItem] = useState([]);
  const url = "http://localhost:5000/api/dishes";
  const arr = ["Any", "Biryani", "Drink", "Curry", "Bread"];

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
    let response;
    console.log(foodCat);
    console.log("hello");
    if (foodCat === "Any") {
      response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      response = await fetch(`${url}/?category=${foodCat}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    response = await response.json();
    // console.log("hello");
    response.sort((a, b) => a.category.localeCompare(b.category));
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
  }, [foodCat]);

  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div style={{ position: "relative", left: "130px", marginTop: "15px" }}>
        <h6>Select Category</h6>
      </div>
      <div
        style={{
          position: "relative",
          left: "130px",
          height: "50px",
          marginTop: "10px",
        }}
      >
        <select
          style={{ height: "50px", width: "100px" }}
          onChange={(e) => {
            setFoodCat(e.target.value);
          }}
        >
          {arr.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "1500px",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {foodItem.map((item) => (
          <Card
            dish_id={item.dish_id}
            price={item.dish_price}
            dishName={item.dish_name}
            imgUrl={item.image_url}
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
