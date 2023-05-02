const watchdao = require('../dao/watch.dao')

function findaAllwatches(req, res){

    watchdao.findAll()
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            res.status(401).send({message: "Watches not found."})

        });
}

var watchController = {
    findaAllwatches:findaAllwatches
}

module.exports = watchController;