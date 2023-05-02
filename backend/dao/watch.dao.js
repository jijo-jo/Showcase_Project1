const watches = require('../models/watches');

const DB = require("../models/index")

function findAll(){
    return watches.findAll()
}

var watchdao = {
    findAll:findAll
}

module.exports = watchdao