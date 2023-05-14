const { where } = require('sequelize');
const orders = require('../models/order');
const users = require('../models/user');
const watch = require('../models/watches');

function findAllorderforApproves(){
    return orders.findAll(
        {
        where:[{  ordersatatus:["Pending"]}],
        include: [{
            model:users ,
            required: true
          },
          {
            model:watch,
            required: true
        }],
        order:[
            ['id', 'DESC']
        ]}
    )
}

function findAllorderforDelivery(){
    return orders.findAll(
        {
        where:[{  deliverystatus:["Pending"]}],
        include: [{
            model:users ,
            required: true
          },
          {
            model:watch,
            required: true
        }],
        order:[
            ['id', 'DESC']
        ]}
    )
}

function findAllusinguserId(userId){
    return orders.findAll({
        where:[{userId:userId},{ordersatatus:["Approved","Pending"]}],
        include: [{
            model:users ,
            required: true
          },
          {
            model:watch,
            required: true
        }],
        order:[
            ['id', 'DESC']
        ]
    });
}

function addtoorder(order){
    var newOrder = new orders(order);
    return newOrder.save();
}
function updateOrder(order,id){
    return orders.update(order, { where: { Id: id } });
}

function deleteOrder(id){
    return orders.destroy({ where: { Id: id } });
}
function getAllDeliveryforId(id){
    return orders.findAll({
        where:{delveryboy:id,deliverystatus:"Pending"},
        include: [{
            model:users ,
            required: true
          },
          {
            model:watch,
            required: true
        }],
        order:[
            ['id', 'DESC']
        ]
    });
}
   
var orderdao ={
    findAllorderforApproves:findAllorderforApproves,
    findAllorderforDelivery:findAllorderforDelivery,
    findAllusinguserId:findAllusinguserId,
    addtoorder:addtoorder,
    updateOrder:updateOrder,
    deleteOrder:deleteOrder,
    getAllDeliveryforId:getAllDeliveryforId
}

module.exports = orderdao;