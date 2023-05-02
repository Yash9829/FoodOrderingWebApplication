// import express from "express";
// import expressAsyncHandler from "express-async-handler";
// import data from "../data.js";
// import Dishes from "../models/products.js";
// import Wishlist from "../models/wishlist.js";

const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Sequelize = require("sequelize");
const data = require("../data.js");
const { Dishes } = require("../models");
const Op = Sequelize.Op;
// import { isAuth } from "../utlis.js";

const dishesRouter = express.Router();

dishesRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    if (req.query.category == undefined) {
      const dishes = await Dishes.findAll();
      res.send(dishes);
    } else {
      const dishes = await Dishes.findAll({
        where: { category: req.query.category },
      }); //return all products
      // const dishes = await Dishes.findAll(); //return all products
      res.send(dishes);
    }
  })
);

dishesRouter.get(
  "/search",
  expressAsyncHandler(async (req, res) => {
    const searchedDishes = await Dishes.findAll({
      where: { dish_name: { [Op.like]: `%${req.query.name}%` } },
    });
    if (searchedDishes) {
      res.send(searchedDishes);
    } else {
      res.status(402).send({ message: "Opps No dishes found!!" });
    }
  })
);

// productRouter.post(
//   "/wishlist",
//   isAuth,
//   expressAsyncHandler(async (req, res) => {
//     const item = await Wishlist.findOne({ product: req.body._id });
//     if (item) {
//       res.status(409).send({ message: "Item Already exits" });
//     } else {
//       const newItem = new Wishlist({
//         name: req.body.name,
//         image: req.body.image,
//         price: req.body.price,
//         rating: req.body.rating,
//         description: req.body.description,
//         userId: req.user._id,
//         product: req.body._id,
//       });
//       const wishlistItem = await newItem.save();
//       res.send(wishlistItem);
//     }
//   })
// );

dishesRouter.post(
  "/add-product",
  expressAsyncHandler(async (req, res) => {
    const newDish = {
      dish_name: req.body.dish_name,
      dish_description: req.body.dish_description,
      dish_price: req.body.dish_price,
      type: req.body.type,
      category: req.body.category,
      cooking_time: req.body.cooking_time,
      image_url: req.body.image_url,
      rating: req.body.rating,
    };
    const dish = await Dishes.create(newDish);
    res.send(dish);
  })
);

dishesRouter.post(
  "/add-product",
  expressAsyncHandler(async (req, res) => {
    const newDish = {
      dish_name: req.body.dish_name,
      dish_description: req.body.dish_description,
      dish_price: req.body.dish_price,
      type: req.body.type,
      category: req.body.category,
      cooking_time: req.body.cooking_time,
      image_url: req.body.image_url,
      rating: req.body.rating,
    };
    const dish = await Dishes.create(newDish);
    res.send(dish);
  })
);

// productRouter.get(
//   "/wishlist",
//   isAuth,
//   expressAsyncHandler(async (req, res) => {
//     const items = await Wishlist.find({ userId: req.user._id });
//     res.send(items);
//   })
// );
// productRouter.delete(
//   "/wishlist/:id",
//   isAuth,
//   expressAsyncHandler(async (req, res) => {
//     const items = await Wishlist.deleteOne({ productId: req.params.id });
//     res.send(req.params.id);
//   })
// );

dishesRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    console.log(data.dishes);
    const createProducts = await Dishes.bulkCreate(data.dishes);
    res.send({ products: createProducts });
  })
);

dishesRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Dishes.findOne({ dish_id: req.params.id });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product not found!" });
    }
  })
);

module.exports = dishesRouter;
