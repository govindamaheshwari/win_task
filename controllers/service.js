const User = require("../models/user");
const Service = require("../models/service");
const Order = require("../models/order");
const sequelize = require("sequelize");
const httpstatus=require('http-status');
const Op = sequelize.Op;

exports.createService = async (req, res, next) => {
const {service_name,service_fee}=req.body;
const response=await Service.create({service_fee:service_fee,service_name:service_name});
console.log('created a service');
res.status(200).json({success:true});
};
