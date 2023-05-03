// import bcrypt from "bcrypt";
const data = {
  dishes: [
    {
      dish_name: "RedBull",
      category: "Drink",
      // image:
      //   "https://www.kindpng.com/picc/m/138-1383804_red-bull-png-image-background-red-bull-energy.png",
      dish_price: 320,
      // type: "Veg",
      // rating: 4.5,
      dish_description:
        "Red Bull is a brand of energy drinks sold by Austrian company Red Bull GmbH. ",
    },
    {
      dish_name: "Mountain Dew",
      category: "Drink",
      // image: "http://assets.stickpng.com/thumbs/587186d27b7f6103e35c6cc8.png",
      dish_price: 60,
      // type: "Veg",
      // rating: 4.0,
      dish_description:
        "Mountain Dew is a carbonated soft drink brand produced and owned by PepsiCo",
    },
    {
      dish_name: "Sting",
      category: "Drink",
      // image:
      //   "https://www.seekpng.com/png/detail/888-8887796_sting-strawberry-sting-energy-drink-india.png",
      dish_price: 20,
      // type: "Non-Veg",
      // rating: 4.8,
      dish_description:
        "Sting Energy Drink is a carbonated energy drink from PepsiCo International and produced by Rockstar Inc.",
    },
  ],
  users: [
    {
      phone_no: "1010101010",
      customer_name: "John Doe",
      email: "john@example.com",
      password: "hello",
    },
  ],
};

module.exports = data;
