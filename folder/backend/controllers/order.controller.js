const orderdao= require("../dao/order.dao");
function findAllorder(req,res){
    orderdao.findAllorderforApproves()
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: "find orders "+error})

    });
}

function tobedelivered(req,res){
     orderdao.findAllorderforDelivery()
     .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: "find orders "+error})

    });

}

function findusinguserId(req,res){
     orderdao.findAllusinguserId(req.body.userId)
     .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: "find order by userId"+error})

    });
}

function addordertoorders(req,res){
     let orders ={
        Orderstatus:req.body.orderstatus,
        Deliverystatus:req.body.deliverystatus,
        userId:req.body.userId,
        watchId:req.body.watchId,
        Countofwatch:req.body.countofwatch
    }
    orderdao.addtoorder(orders)
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: "Add to order fails "+error})

    });
}

function updateOrderstatus(req,res){
    let order ={
        Orderstatus:req.body.orderstatus
    }
    orderdao.updateOrder(order,req.body.id)
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: "Update the order status fails "+error})

    });
}
function updateDeliverystatus(req,res){
    let order ={
        Deliverystatus:req.body.deliverystatus
    }
    orderdao.updateOrder(order,req.body.id)
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: "Update the delivery status fails "+error})

    });
}

function updateDeliveryboy(req,res){
    let order ={
          DeliveryboyId:req.body.deliveryboy
    }
    orderdao.updateOrder(order,req.body.id)
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: "Update the delivery boy fails "+error})

    });
}

function findAllfordelboy(req,res){
    orderdao.getAllDeliveryforId(req.body.id)
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: "Update the delivery boy fails "+error})

    });
}

function deleteOrder(req,res){
      orderdao.deleteOrder(req.body.id)
      .then((data)=>{
        res.send(data);
       })
       .catch((error)=>{
        res.status(401).send({message:"delete order unsuccessfull "+error})
    });
}
var ordercontroller ={
    findusinguserId:findusinguserId,
    findAllorder:findAllorder,
    addordertoorders:addordertoorders,
    updateDeliverystatus:updateDeliverystatus,
    updateOrderstatus:updateOrderstatus,
    deleteOrder:deleteOrder,
    tobedelivered:tobedelivered,
    updateDeliveryboy:updateDeliveryboy,
    findAllfordelboy:findAllfordelboy
    

}

module.exports = ordercontroller