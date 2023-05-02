"use strict";
const { Model } = require("sequelize");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Dishes = require("./dishes.js")(sequelize, Sequelize.DataTypes);
  const Orders = require("./orders.js")(sequelize, Sequelize.DataTypes);
  class DishesOrdered extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }

  DishesOrdered.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Orders,
          key: "order_id",
        },
      },
      dish_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Dishes,
          key: "dish_id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
        },
      },
      dish_status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      tableName: "dishesordered",
      modelName: "DishesOrdered",
    }
  );

  Dishes.belongsToMany(Orders, { through: "DishesOrdered" });
  Orders.belongsToMany(Dishes, { through: "DishesOrdered" });
  // return Orders;
  return DishesOrdered;
  // return Dishes;
};
