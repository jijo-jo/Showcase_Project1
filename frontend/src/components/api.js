import axios from 'axios'

var LOGIN_ROUTE = 'http://localhost:4000/users/login'
var REGISTER_ROUTE ='http://localhost:4000/users/register'
var GET_ALL_ROLES = 'http://localhost:4000/roles/allroles'
var GET_ALL_USERS = 'http://localhost:4000/users/allusers'
var DELETEUSER = 'http://localhost:4000/users/delete'
var ADD_NEWWATCH ='http://localhost:4000/watches/addwatch'
var ALL_WATCHES ='http://localhost:4000/watches/watches'
var ADD_TO_CART = 'http://localhost:4000/cart/addcart'
var GET_ALL_CARTITEMS = "http://localhost:4000/cart/findbyuserId"
var UPDATE_STATUS ="http://localhost:4000/cart/cartstatus"

export async function login(data){
    console.log(data);
    return axios.post(LOGIN_ROUTE, data);
}

export async function register(data){
    return axios.post(REGISTER_ROUTE,data);
}

export async function getallroles(){
  return axios.get(GET_ALL_ROLES);
}

export async function getallusers(){
    return axios.get(GET_ALL_USERS);
}

export async function deleteUser(userId){
    return axios.post(DELETEUSER,userId)
}

export async function addnewwatch(data){
    return axios.post(ADD_NEWWATCH,data);
}

export async function getAllwatches(){
    return axios.get(ALL_WATCHES);
}

export async function addtocart(data){
    return axios.post(ADD_TO_CART,data)
}

export async function getallcartitems(data){
    return axios.post(GET_ALL_CARTITEMS,data);
}

export async function updatecartstaus(data){
    return axios.post(UPDATE_STATUS,data);
}

export async function getAllOrders(){
    
}