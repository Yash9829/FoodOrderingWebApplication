const express = require("express");
const expressAsyncHandler = require("express-async-handler");
// import nodemailer from "nodemailer";
// import { google } from "googleapis";
const { Orders, DishesOrdered, Dishes } = require("../models");
const { isAuth } = require("../utils/utils.js");

const orderRouter = express.Router();

// const CLIENT_ID =
//   "836515059620-e8mgv5flipan48tco2u1q2ruamhuuv9s.apps.googleusercontent.com";
// const CLIENT_SECRET = "AMSboUAwW8vRD7Z9D9Q8jugt";
// const REDIRECT_URI = "https://developers.google.com/oauthplayground";
// const REFRESH_TOKEN =
//   "1//04iEaw-1-p7GwCgYIARAAGAQSNwF-L9IrNtEOQTyih2HkjpsSzX1TzWR0h1_ntRZVbVEZJZiAaKMSLf_551fVCd9d-wXtgv5_MbU";

// const oAuth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// );
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

orderRouter.get(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Orders.findAll({
      where: { account_id: req.query._id },
      include: [
        {
          model: DishesOrdered,
          include: [
            {
              model: Dishes,
            },
          ],
        },
      ],
    });
    res.send(orders);
  })
);

orderRouter.get(
  "/admin-orders",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    // const orders = await Orders.findAll({
    //   order: [["order_time", "DESC"]],
    //   include: "DishesOrdered",
    //   limit: 100,
    // });
    const orders = await Orders.findAll({
      order: [["order_time", "DESC"]],
      include: [
        {
          model: DishesOrdered,
          include: [
            {
              model: Dishes,
            },
          ],
        },
      ],
      limit: 100,
    });
    res.send(orders);
  })
);

orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const { delivery_address, _id, notes, orderItems } = req.body;

    if (orderItems.length === 0) {
      res.status(400).send({ message: "cart is empty!" });
      return;
    }
    const newOrder = {
      delivery_address: delivery_address,
      account_id: _id,
      notes: notes,
    };

    try {
      const order = await Orders.create(newOrder);

      for (const item of orderItems) {
        const { dish_id, quantity } = item;
        const dishPresent = await Dishes.findOne({
          where: { dish_id: dish_id },
        });
        if (dishPresent) {
          const newDish = {
            order_id: order.order_id,
            dish_id: dish_id,
            quantity: quantity,
          };
          await DishesOrdered.create(newDish);
        } else {
          console.log("dish not present. Connot add order");
          DishesOrdered.destroy({ where: { order_id: order_id } });
          order.destroy();
          throw "Invalid dishes";
        }
      }
      res.status(201).send({ message: "Order Placed !", order: order });
    } catch (err) {
      res.status(401).send({ message: "Invalid order details" });
    }
  })
);

orderRouter.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const order = await Orders.findOne({
      where: { order_id: id },
      include: [
        {
          model: DishesOrdered,
          include: [
            {
              model: Dishes,
            },
          ],
        },
      ],
    });
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);

module.exports = orderRouter;
