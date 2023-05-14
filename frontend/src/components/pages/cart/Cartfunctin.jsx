import React from "react";
import { useState, useEffect } from "react";
import { getallcartitems } from "../../api";
import { Card } from 'antd';
import { updatecartstaus } from "../../api";
import { Dropdown, Typography } from 'antd';
import { Button, Modal,Space} from 'antd';
import { payment } from "../../api";
import { addOrder,updateStock } from "../../api";

function Cartfunction() {
    const [cartitems, setCarditems] = useState([]);
    const [flag,setFlag] = useState(true);
    const [total,settotal]=useState(0);
    const [popupon,setpopupOn]=useState(false)
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    useEffect(() => {
        let user = { userId: localStorage.getItem("Id") }
        getallcartitems(user)
            .then((response) => {
                let totalamt=0
                console.log(response.data);
                response.data.map((item)=>{
                    totalamt+=(item.Quantity*item.watch.Price)

                })
                setCarditems(response.data);
                settotal(totalamt);
            }).catch((err) => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        let user = { userId: localStorage.getItem("Id") }
        getallcartitems(user)
            .then((response) => {
                let totalamt=0
                console.log(response.data);
                response.data.map((item)=>{
                    totalamt+=(item.Quantity*item.watch.Price)

                })
                setCarditems(response.data);
                settotal(totalamt);
            }).catch((err) => {
                console.log(err);
            })
    }, [flag]);

    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }
    const placeOrder = ()=>{
        setpopupOn(true);
    }
    const handleremove = (cartId)=>{
        let statuschange = {status:"false",id:cartId}
        updatecartstaus(statuschange)
        .then((response)=>{
            setFlag(!flag)
        }).catch(err=>{
            console.log(err)
        })
    }

    const handleOk=()=>{
         let paymentdetail ={
            userId:parseInt(localStorage.getItem("Id")),
            amount:total,
            method:"online",
            transactionId:generateString(16)
         }
         payment(paymentdetail)
         .then((response)=>{
            cartitems.map((item)=>{
                let order = {
                    orderstatus:"Pending",
                    deliverystatus:"Pending",
                    userId:parseInt(localStorage.getItem("Id")),
                    watchId:item.watch.Id,
                    countofwatch:item.Quantity
                }
                if((item.watch.Stockavailable - item.Quantity)>=0 ){
                    var newstock = {
                        stock:item.watch.Stockavailable,
                        id:item.watch.Id
                    } 
                }else{
                    alert("insufficient stock")
                }
                
                addOrder(order)
                .then((respnse)=>{
                       handleremove(item.Id);
                }).catch((err)=>{
                    console.log(err);
                })
               updateStock(newstock)
               .then((response)=>{
                  console.log(response);
               })
               .catch((error)=>{
                console.log(error);
               })
            })
            setpopupOn(false);
            window.location = '/cartfunction'
         
         }).catch((error)=>{
            console.log(error)
            alert("error occured")
         })
    }
    const handleCancel=()=>{
        setpopupOn(false)
    }

    return (
        <div>
           <Modal
                title="Select Deliveryboy"
                open={popupon}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div> 
                    <h2>Total Amount to pay Rs:{total}</h2>
                </div>
            </Modal>
          {cartitems?.map((item) => {
                 return(<Card style={{ width: "100%" }}>
                      <div className="product-image" style={{height:"100px",width:"100px"}}>
                     <img src={"/images/products/sw325-image-1.jpg"} alt={"some"} />
                     </div>
                     <h3>{item.watch.ModelInfo}</h3>
                     <h3>{item.watch.Price}</h3>
                     <h3>{item.Quantity}</h3>
                     <button onClick={(e)=>{handleremove(item.Id)}}>Remove</button>
                </Card>)
                 

          }) }
          <div>
            <h2>Total Amount to Pay Rs:{total}</h2>
          </div>
          <div>
            <button onClick={placeOrder}>Add Order</button>
          </div>
          </div>
    )

}

export default Cartfunction