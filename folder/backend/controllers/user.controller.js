const userdao =require('../dao/user.dao');
const credentialdao = require('../dao/credentials.dao');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { DATEONLY } = require('sequelize');
dotenv.config();

function findAllusers(req,res){
    userdao.findAll()
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.status(401).send({message: "Users not found"+error})

    });
}

function findDeliveryBoy(req,res){
    userdao.findAll()
    .then((data)=>{
        let newUsers= data.filter(item=>item.credential.role.Rolename=='Deliveryboy');
        res.send(newUsers);

    })
    .catch((error)=>{
        res.status(401).send({message: "Users not found"+error})

    });
}

function userLogin(req,res){
    var username = req.body.username;
    var userpassword = req.body.password;
     credentialdao.findbyUsername(username)
        .then((data)=>{
            console.log(data);
            const password_valid = bcrypt.compare(userpassword,data.Password);
            if(password_valid){
                userdao.findById(data.userId)
                .then((result)=>{
                     token = jwt.sign({ "id" : result.Id,"email" : result.Email,"first_name": result.UserName,"role":result.credential.role.Rolename },process.env.SECRET);
                     res.send({result: result,token : token });
                }).catch((error)=>{
                  res.status(401).send({message: "Login failure "+error})
                })
            }else{
                res.status(401).send({message: "Login failure"+error})
            }
            
        }).catch((error)=>{
            res.status(401).send({message: "Login failure username not found"+error})
        })
}

async function userRegister(req,res){
 console.log(req.body);
 let newUser = {
    UserName:req.body.name,
    Dateofbirth:DATEONLY(req.body.dob),
    Gender:req.body.gender ,
    Email:req.body.email,
    Housename:req.body.housename,
    Pincode:req.body.pincode,
    Postoffice:req.body.postoffice,
    District:req.body.district,
    Phonenumber:req.body.phone  
      }
  await userdao.createUser(newUser)
  .then((data)=>{
       var credential={}
       if(req.body.roleId){
          credential = {
            Username:req.body.username,
            Password: bcrypt.hashSync(req.body.password, 8),
            roleId:req.body.roleId,
            userId:data.Id
         }
       }
       else{
        credential = {
            Username:req.body.username,
            Password: bcrypt.hashSync(req.body.password, 8),
            roleId:4,
            userId:data.Id
         }

       }
       credentialdao.createnewCredential(credential)
       .then((result)=>{
           userdao.updateDb({credentialId:result.Id},result.userId)
           .then((resdata)=>{
            res.send({data:data,credentials:result});
           }).catch((error)=>{
            res.status(401).send({message: "User registration error in credentials update"+error})
           })
           
       }).catch((error)=>{
        res.status(401).send({message: "User registration error in credentials"+error})
       })
  }

  ).catch((error)=>{
    res.status(401).send({message: "User registration error "+error})
  })

}

async function deleteUser(req,res){
    userdao.deleteById(req.body.id)
    .then((resdata)=>{
        res.send(resdata);
       }).catch((error)=>{
        res.status(401).send({message: "User delete error"+error})
       })
}
var usercontroller ={
    findAllusers:findAllusers,
    userLogin:userLogin,
    userRegister:userRegister,
    deleteUser:deleteUser,
    findDeliveryBoy:findDeliveryBoy
}

module.exports = usercontroller;