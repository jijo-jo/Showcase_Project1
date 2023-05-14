const watches = require('../models/watches');

const DB = require("../models/index")

function findAll(){
    return watches.findAll()
}

function findById(id){
    return watches.findByPk(id);
}

function addtowatch(watch){
    var newWatch= new watches(watch);
    return newWatch.save();
}
function updateWatch(watch,id){
    return watches.update(watch, { where: { Id: id } });
}

function deleteWatch(id){
    return watches.destroy({ where: { Id: id } });
}

var watchdao = {
    findAll:findAll,
    findById:findById,
    addtowatch:addtowatch,
    updateWatch:updateWatch,
    deleteWatch:deleteWatch
}

module.exports = watchdao