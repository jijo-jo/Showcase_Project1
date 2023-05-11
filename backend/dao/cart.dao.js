const cart = require('../models/cart');
const users = require('../models/user');
const watch = require('../models/watches')

function findAllusinguserId(userId){
    return cart.findAll({
        where:{userId:userId,Status:"true"},
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

function addtocart(product){
    var newProduct = new cart(product);
    return newProduct.save();
}
function updateCart(product,id){
    return cart.update(product, { where: { Id: id } });
}

function deleteCart(id){
    return cart.destroy({ where: { Id: id } });
}
   
var cartdao ={
    findAllusinguserId:findAllusinguserId,
    addtocart:addtocart,
    updateCart:updateCart,
    deleteCart:deleteCart
}

module.exports = cartdao;