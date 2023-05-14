const paymentdao = require('../dao/payment.dao')

function addpayment(req,res){
    let payment  ={
        Amount:req.body.amount,
        Method:req.body.method,
        TransactionId:req.body.transactionId,
        userId:req.body.userId
    }
   paymentdao.addpayment(payment)
   .then((data)=>{
    res.send(data);
     })
   .catch((error)=>{
    res.status(401).send({message: "Update the cart fails "+error})

    });
}

var paymentcontroller ={
    addpayment:addpayment
}
module.exports = paymentcontroller