const overallrating = require('../models/overallrating');

function addoverallrating(overallrate){
    var newoverallRating = new overallrating(overallrate);
    return newoverallRating.save();
}

function updateoverallrating(updaterate,id){
    return overallrating.update(updaterate, { where: { watchId:id} });

}
const overallratingdao = {
   addoverallrating:addoverallrating,
   updateoverallrating:updateoverallrating
}

module.exports = overallratingdao