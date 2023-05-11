const overallratingdao = require("../dao/overallrating.dao");
const ratingdao = require("../dao/rating.dao")

function updateOverallrating(req,res){
       let watchId=req.body.watchId;
       ratingdao.getWatchratings(watchId)
       .then((data)=>{
          let watchoverallrating ={
            avaragestarcount:0,
            noofpeople:0
          }
          data.map((item)=>{
            watchoverallrating.avaragestarcount = watchoverallrating.avaragestarcount+item.Starcount,
            watchoverallrating.noofpeople = watchoverallrating.noofpeople+1
          });
          let inputoverallrating={
            Averagestarcount:watchoverallrating.avaragestarcount,
            Number_of_People:watchoverallrating.noofpeople,
            watchId:watchId
          };
          overallratingdao.updateoverallrating(inputoverallrating,watchId)
          .then((data)=>{
            res.send(data);
              })
              .catch((error)=>{
            res.status(401).send({message: " Update overall rating rating error"+error})
            });

           
        })
       .catch((error)=>{
           res.status(401).send({message: " watch rating fetch error "+error})

        });


}

function initialserating(req,res){
    
}

var overallratingcontroller={
    updateOverallrating:updateOverallrating
}

module.exports = overallratingcontroller