const Sequelize=require('sequelize')

const sequelize= new Sequelize('win_task','root','Iitd@0202',{
    dialect:'mysql',
    host:'localhost'
})



module.exports=sequelize;