const ratingdao = require('../dao/rating.dao');

function addNewRating(req,res){
    let rating = {
        Starcount:req.body.starcount,
        userId:req.body.userId,
        watchId:req.body.watchId
    }
    ratingdao.createnewRating(rating)
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: " Add new rating error"+error})

    });

}

function updateRating(req,res){
    ratingdao.updateRatingdb({Starcount:req.body.starcount},req.body.Id)
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: " Rating not updated "+ error})

    });

}

function getAllratingbyuser(req,res){
    ratingdao.getWatchratingsbyuserId(req.body.userId)
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: " Rating not get by userId"+ error})

    });

}
var ratingcontroller ={
    addNewRating:addNewRating,
    updateRating:updateRating,
    getAllratingbyuser:getAllratingbyuser
}

module.exports = ratingcontroller;