"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Orders }) {
      // define association here
      this.hasMany(Orders, { foreignKey: "order_id" });
    }
    // static associate() {
    //   // define association here
    //   // this.hasMany(Orders);
    // }
  }
  Account.init(
    {
      account_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
      },
      phone_no: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [10],
            msg: "Not a valid number",
          },
          isNumeric: "Phone number should only contain digits",
        },
      },
      customer_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a name" },
          notEmpty: { msg: "Name must not be empty" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: "Not a valid email",
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNULL: true,
        validate: {
          len: {
            args: [8, 50],
            msg: "Password should be between 8 and 50 characters long",
          },
        },
      },
    },
    {
      sequelize,
      tableName: "account",
      modelName: "Account",
    }
  );
  return Account;
};
