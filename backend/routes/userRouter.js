const express = require("express");
// const data = require("../data.js");
const { Account } = require("../models");
const bcrypt = require("bcrypt");
const expressAsyncHandler = require("express-async-handler");
// import { generateToken, isAuth } from "../utlis.js";
const { generateToken, isAuth } = require("../utils.js");
// import Address from "../models/address.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // const createUser = await Account.bulkCreate(data.users);
    res.send({ message: "Seeding not enabled right now" });
  })
);

// post request for signining users
userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await Account.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        // if password mateches
        res.send({
          id: user.account_id,
          name: user.customer_name,
          email: user.email,
          // isAdmin: user.isAdmin,
          phone_no: user.phone_no,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid Email or Password" });
  })
);

//post route for signup
userRouter.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    const user = await Account.findOne({ email: req.body.email });
    if (user) {
      res.status(401).send({ message: "User already exits" });
    } else {
      const newUser = {
        customer_name: req.body.name,
        email: req.body.email,
        phone_no: req.body.phone_no,
        password: bcrypt.hashSync(req.body.password, 10),
      };
      const user = await Account.create(newUser);
      res.send({
        _id: user.account_id,
        name: user.customer_name,
        email: user.email,
        phone_no: user.phone_no,
        token: generateToken(user),
      });
    }
  })
);
//
// //post route for adding address
//
// userRouter.get(
//   "/shipping/:id",
//   expressAsyncHandler(async (req, res) => {
//     const id = req.params.id;
//     const address = await Address.find({ userId: id });
//     res.send(address);
//   })
// );
//
// userRouter.delete(
//   "/address/:id",
//   expressAsyncHandler(async (req, res) => {
//     await Address.deleteOne({ _id: req.params.id });
//     res.send({ id: req.params.id });
//   })
// );
// userRouter.put(
//   "/address/:id",
//   isAuth,
//   expressAsyncHandler(async (req, res) => {
//     const address = await Address.findById(req.params.id);
//
//     if (address) {
//       address.name = req.body.name;
//       address.mobNo = req.body.mobNo;
//       address.pinCode = req.body.pinCode;
//       address.address = req.body.address;
//       address.town = req.body.town;
//       address.state = req.body.state;
//       address.city = req.body.city;
//       const newAddress = await address.save();
//       res.send(newAddress);
//     } else {
//       res.status(404).send({ message: "Address not found !" });
//     }
//   })
// );
//
// userRouter.post(
//   "/address",
//   expressAsyncHandler(async (req, res) => {
//     console.log(req.body);
//     const newAdress = Address({
//       name: req.body.name,
//       mobNo: req.body.mobNo,
//       pinCode: req.body.pinCode,
//       address: req.body.address,
//       town: req.body.town,
//       state: req.body.state,
//       city: req.body.city,
//       userId: req.body.userId,
//     });
//     const address = await newAdress.save();
//     res.send(address);
//   })
// );
//
// userRouter.put(
//   "/updateProfile",
//   isAuth,
//   expressAsyncHandler(async (req, res) => {
//     const user = await Account.findById(req.user._id);
//     if (user) {
//       user.name = req.body.name;
//       user.mobNo = req.body.mobNo;
//       const updatedUser = await user.save();
//       res.send({
//         _id: user._id,
//         name: updatedUser.name,
//         eamil: updatedUser.email,
//         isAdmin: updatedUser.isAdmin,
//         mobNo: updatedUser.mobNo,
//         token: genrateToken(updatedUser),
//       });
//     } else {
//       res.status(404).send({ message: "User not found" });
//     }
//   })
// );

module.exports = userRouter;
