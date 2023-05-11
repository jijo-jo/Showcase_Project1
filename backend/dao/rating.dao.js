const ratings= require('../models/rating');

function getWatchratings(watchId){
    return ratings.findAll({
        where:{watchId:watchId}
    }
  );
}

function getWatchratingsbyuserId(userId){
    return ratings.findAll({
        where:{userId:userId}
    }
  );
}

function getWatchratingsuserandwatch(userId,watchId){
    return ratings.findAll({
        where:{userId:userId,watchId:watchId}
    }
  );
}

function createnewRating(rating){
    var newRating = new ratings(rating);
    return newRating.save();

}

function updateRatingdb(response, id) {   
    return ratings.update(response, { where: { Id: id } });
    }

const ratingdao ={
    getWatchratings:getWatchratings,
    getWatchratingsbyuserId:getWatchratingsbyuserId,
    createnewRating:createnewRating,
    updateRatingdb:updateRatingdb,
    getWatchratingsuserandwatch:getWatchratingsuserandwatch

}

module.exports = ratingdao;