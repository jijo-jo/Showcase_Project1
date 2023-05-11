const orders = require('../models/order');
const users = require('../models/user');
const watch = require('../models/watches')

function findAllorders(){
    return orders.findAll()
}
function findAllusinguserId(userId){
    return orders.findAll({
        where:{userId:userId},
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
   
var orderdao ={
    findAllorders:findAllorders,
    findAllusinguserId:findAllusinguserId,
    addtoorder:addtoorder,
    updateOrder:updateOrder,
    deleteOrder:deleteOrder
}

module.exports = orderdao;