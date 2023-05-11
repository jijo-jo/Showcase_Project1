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

function findwatchbyid(req,res){

    watchdao.findById(req.body.id)
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: "Watch not found."})

    });
}

function addnewwatch(req,res){
      let watch ={
        Name:req.body.name,
        ModelInfo:req.body.model,
        Brand:req.body.brand,
        Description:req.body.description,
        WarantyPeriod:req.body.warantyperiod,
        Color:req.body.color,
        For_whom:req.body.forwhom,
        Price:req.body.price,
        Offer:req.body.offer,
        Stockavailable:req.body.stock,
        Image:req.body.image,

      }
      watchdao.addtowatch(watch)
      .then((data)=>{
          res.send(data);
      })
      .catch((error)=>{
          res.status(401).send({message: "Watch add fail."+error})
  
      });

}

function updatewatch(req,res){
    let watch ={
        Name:req.body.name,
        ModelInfo:req.body.model,
        Brand:req.body.brand,
        Description:req.body.description,
        WarantyPeriod:req.body.warantyperiod,
        Color:req.body.color,
        For_whom:req.body.forwhom,
        Price:req.body.price,
        Offer:req.body.offer,
        Stockavailable:req.body.stock,
        Image:req.body.image
      }
      watchdao.updateWatch(watch,req.body.id)
      .then((data)=>{
          res.send(data);
      })
      .catch((error)=>{
          res.status(401).send({message: "Watch update fail."})
  
      });
}


var watchController = {
    findaAllwatches:findaAllwatches,
    findwatchbyid:findwatchbyid,
    addnewwatch:addnewwatch,
    updatewatch:updatewatch


}

module.exports = watchController;