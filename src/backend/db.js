const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoURI =
  "mongodb+srv://20cs01019:i40IyEBwMmpunkUq@gofood.utgiemx.mongodb.net/sample_analytics?retryWrites=true&w=majority";

const mongoDB = () => {
  return mongoose
    .connect(mongoURI)
    .then((client) => {
      console.log("Connected");
      //const fetched_data = await mongoose.connection.db.collection("accounts");
      //return mongoose.connection.db.collection("accounts");
      return client.connection.db.collection("accounts");
    })
    .then((accounts) => {
      return accounts.find().toArray();
    })
    .then((account_data) => {
      console.log(`account_data ${account_data.length}: `, account_data);
    })
    .catch((reason) => {
      console.error("Could not connect to MongoDB", reason);
    });
};

const mongoDBAsync = async () => {
  try {
  await mongoose.connect(mongoURI);
  console.log("Connected");
  const fetched_data = mongoose.connection.db.collection("accounts");

  const account_data = await fetched_data.find().toArray();
  console.log(account_data);
  }catch (e) {
    console.error("failed to connect: ", e);
  }
};

function giveSomething(cb) {
  setTimeout(() => {
    cb(2);
  }, 2000);
};

function giveSomethingAsync() {
  return new Promise((resolve, reject) => {
    giveSomething(resolve);
  });
}

module.exports = mongoDB;
