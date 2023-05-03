// import bcrypt from "bcrypt";
const categories = ["Biryani", "Drink"];
const data = {
  dishes: [
    {
      dish_name: "Chicken Dum biryani",
      category: categories[0],
      image:
        "https://media.istockphoto.com/id/497784792/photo/chicken-biryani.jpg?s=612x612&w=is&k=20&c=0gC1Si23zL8YlhOIyGT-JjGGYI1U2KWA-n_v3hKV0uM=",
      dish_price: 150,
      type: "Non-Veg",
      // rating: 4.5,
      dish_description:
        'This dish consists of freshly marinated boneless chicken pieces, special spices from Kerala & Daawat basmati rice which are cooked in "dum" style in a handi. ',
    },
    {
      dish_name: "Red Bull",
      category: categories[1],
      image:
        "https://images.unsplash.com/photo-1570526427001-9d80d114054d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      dish_price: 60,
      type: "Veg",
      // rating: 4.0,
      dish_description:
        "Red Bull is a brand of energy drinks sold by Austrian company Red Bull GmbH. ",
    },
    {
      dish_name: "Mutton Biryani",
      category: categories[0],
      image:
        "https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=612x612&w=is&k=20&c=8LRMd7I9m-e3vGSqhbt6KN-LC6YodhfyRmaHmc9PxM0=",
      dish_price: 300,
      type: "Non-Veg",
      // rating: 4.8,
      dish_description:
        "Freshly marinated tender mutton pieces cooked with long grained basmati rice topped off with fried onions",
    },
    {},
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
