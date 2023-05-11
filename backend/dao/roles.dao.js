const roles = require('../models/roles');

function findAll(){
    return roles.findAll()
}
function findById(id){
    return roles.findByPk(id)
}

var roledao = {
    findAll:findAll,
    findById:findById
}

module.exports = roledao