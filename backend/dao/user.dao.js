const users = require('../models/user');
const credentials = require('../models/credential');
const roles = require('../models/roles');
const credentialdao = require('./credentials.dao')


function findAll(){
    return users.findAll({
        include: [{
            model: credentials,
            required: true,
            include:[{
                  model: roles,
                    required: true
            }]
          }],
        order:[
            ['id', 'DESC']
        ]
    });
}

function findById(id){
    return users.findByPk(id,{
        include: [{
            model: credentials,
            required: true,
            include:[{
                  model: roles,
                    required: true
            }]
          }],
        order:[
            ['id', 'DESC']
        ]
    });
}

function createUser(data){
        var newUser = new users(data);
        return newUser.save();

}

function deleteById(id) {
    credentialdao.deleteByuserId(id);
    return users.destroy({ where: { id: id } });
}

function updateDb(response, id) {
    return users.update(response, { where: { id: id } });
}


var userdao = {
   findAll:findAll,
   findById:findById,
   createUser:createUser,
   deleteById:deleteById,
   updateDb:updateDb
}
module.exports = userdao

