const Sequelize=require('sequelize')

const sequelize=require('../util/database')

const Service=sequelize.define('service',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    service_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    service_fee:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Service;