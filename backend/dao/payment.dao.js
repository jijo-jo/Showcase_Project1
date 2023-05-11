const payments = require('../models/payment');

function addpayment(payment){
    var newPayment = new payments(payment);
    return newPayment.save();
}

var paymentdao = {
    addpayment:addpayment
}

module.exports = paymentdao