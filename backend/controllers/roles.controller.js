const rolesdao = require('../dao/roles.dao');

function getAllroles(req,res){
    rolesdao.findAll()
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: "Roles not found"+error})

    });
}
function getrolesbyId(req,res){
    let roleId = req.body.roleId
    rolesdao.findById(roleId)
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: "Role not found"+error})

    });
}
var rolescontroller ={
    getAllroles:getAllroles,
    getrolesbyId:getrolesbyId
}

module.exports = rolescontroller