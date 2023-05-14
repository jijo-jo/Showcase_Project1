const cartdao = require("../dao/cart.dao");

function findusinguserId(req,res){
     cartdao.findAllusinguserId(req.body.userId)
     .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: "find cart product active"+error})

    });
}

function addproducttocart(req,res){
    console.log(req.body.watchId);
    let product ={
        Quantity:req.body.quantity,
        userId:req.body.userId,
        watchId:req.body.watchId,
        Status:req.body.status
    }
    cartdao.addtocart(product)
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: "Add to cart fails "+error})

    });
}

function updateCartproduct(req,res){
    let product ={
        Quantity:req.body.quantity
    }
    cartdao.updateCart(product,req.body.id)
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: "Update the cart fails "+error})

    });
}

function updateCartstatus(req,res){
    let product ={
        Status:req.body.status
    }
    cartdao.updateCart(product,req.body.id)
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: "Update the cart fails "+error})

    });
}

function deleteCartproduct(req,res){
      cartdao.deleteCart(req.body.id)
      .then((data)=>{
        res.send(data);
       })
       .catch((error)=>{
        res.status(401).send({message:"delete product unsuccessfull "+error})
    });
}
var cartcontroller ={
    findusinguserId:findusinguserId,
    addproducttocart:addproducttocart,
    updateCartproduct:updateCartproduct,
    deleteCartproduct:deleteCartproduct,
    updateCartstatus:updateCartstatus

}

module.exports =  cartcontroller