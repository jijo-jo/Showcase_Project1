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
var GET_ALL_ORDERS = "http://localhost:4000/orders/allorders"
var GET_ALL_ORDERS_USERID = "http://localhost:4000/orders/userorder"
var ADD_PAYMENT = "http://localhost:4000/payment/addpayment"
var ADD_ORDER = "http://localhost:4000/orders/addorder"
var UPDATE_STOCK = "http://localhost:4000/watches/stockchange"

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
    return axios.get(GET_ALL_ORDERS);
}
export async function getOrdersuserId(data){
    return axios.post(GET_ALL_ORDERS_USERID,data)
}

export async function payment(data){
   return axios.post(ADD_PAYMENT,data);
}

export async function addOrder(data){
    return axios.post(ADD_ORDER,data)
}

export async function updateStock(data){
    return axios.post(UPDATE_STOCK,data);
}