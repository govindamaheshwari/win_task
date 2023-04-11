const User = require("../models/user");
const Service = require("../models/service");
const Order = require("../models/order");
const sequelize = require("sequelize");
const Op = sequelize.Op;

exports.getAllOrders = async (req, res, next) => {
    const allOrders= await req.user.getOrders()
    res.status(200).json({success:true, order: allOrders})

 
};

exports.getOrderDetails = async (req, res, next) => {
    try{const order_id= req.body.order_id;
    const orderDetails= await req.user.getOrders({where:{id:order_id}})
    res.status(200).json({success:true, order_details: orderDetails})
    }catch(error){
        console.log(err)

    }
};

exports.deleteOrder = async (req, res, next) => {
    const order_id= req.body.order_id;
    try{
        let result=await Order.destroy({where:{id:order_id}})
        console.log("aaaaaaa: ", result)
        res.status(200).json({success:true})
    }catch(err){
        console.log(err)
    }
};


exports.createOrder = async (req, res, next) => {
    try{
    const service_id=req.body.service_id;
    const orders=await req.user.getOrders({where:{service_id:service_id}})
    let last_order_creation_time= orders[orders.length-1].dataValuesr.createdAt

    let currTime= new Date()
    last_order_creation_time= new Date(last_order_creation_time)

    const diffTime = Math.abs(currTime - last_order_creation_time);
    const diffHours = (diffTime / (1000 * 60 * 60)); 
    console.log('time difference: ', diffHours);

    if(diffHours>3){
        const response=await req.user.createOrder({service_id:service_id})
        res.status(200).json({success:true,message:'order create!...........'})

    }
    res.status(200).send({success:false, message:`order can't be created, try after ${3-diffHours} hrs`})

    }catch(err){
        console.log(err)

    }
    
   
};
