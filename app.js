const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");



const sequelize = require("./util/database");

const cors = require("cors");

const authRoutes = require("./routes/auth");
const orderRoutes = require("./routes/orders");
const serviceRoutes=require('./routes/service');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use(cors());

const User = require("./models/user");
const Service = require("./models/service");
const Order = require("./models/order");

// //relation between tables

User.hasMany(Order)
// User.belongsToMany(Service, { through: Order });
// Service.belongsToMany(User, { through: Order });
//

app.use("/user", authRoutes);
app.use(orderRoutes);
app.use(serviceRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
