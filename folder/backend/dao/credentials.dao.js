const credentials = require('../models/credential');

function findbyUsername(username){
   return credentials.findOne({
       where:{ username : username}
   })
}

function createnewCredential(data){
    var newCredential = new credentials(data);
    return newCredential.save();
}

function deleteById(id) {
    return credentials.destroy({ where: { id: id } });
}

function deleteByuserId(userId) {
    return credentials.destroy({ where: { userId: userId} });
}


function updateDb(response, id) {
    var updateDb = {
        Response: response,
    };
    return credentials.update(updateDb, { where: { id: id } });
}


var credentialdao = {
    findbyUsername:findbyUsername,
    createnewCredential:createnewCredential,
    deleteById:deleteById,
    updateDb:updateDb,
    deleteByuserId:deleteByuserId

}

module.exports = credentialdao