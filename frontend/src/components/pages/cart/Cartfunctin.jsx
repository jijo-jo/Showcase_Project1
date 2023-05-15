import React from "react";
import { useState, useEffect } from "react";
import { getallcartitems ,getUserbyUserId} from "../../api";
import { Card } from 'antd';
import { updatecartstaus } from "../../api";
import { Dropdown, Typography } from 'antd';
import { Button, Modal, Space } from 'antd';
import { payment } from "../../api";
import { addOrder, updateStock } from "../../api";
import './Cartfunction.css';
import { updateshippingaddress } from "../../api";

function Cartfunction() {
    const [cartitems, setCarditems] = useState([]);
    const [flag, setFlag] = useState(true);
    const [total, settotal] = useState(0);
    const [popupon, setpopupOn] = useState(false);
    const [user,setuser] = useState([]);
    const [shippingAddress,setShippingAddress]=useState("")
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    useEffect(() => {
        let user = { userId: localStorage.getItem("Id") }
        getallcartitems(user)
            .then((response) => {
                let totalamt = 0
                console.log(response.data);
                response.data.map((item) => {
                    totalamt += (item.Quantity * item.watch.Price)

                })
                setCarditems(response.data);
                settotal(totalamt);
            }).catch((err) => {
                console.log(err);
            })
        getUserbyUserId({id:localStorage.getItem("Id")})
        .then((response)=>{
            console.log(response.data);
             setuser(response.data);
             if(response.data.ShippingAddress)
             {
                setShippingAddress(response.data.ShippingAddress)
             }
        }).catch((err)=>{
            console.log(err)
        })
    }, []);

    useEffect(() => {
        let user = { userId: localStorage.getItem("Id") }
        getallcartitems(user)
            .then((response) => {
                let totalamt = 0
                console.log(response.data);
                response.data.map((item) => {
                    totalamt += (item.Quantity * item.watch.Price)

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
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
    const placeOrder = () => {
        setpopupOn(true);
    }
    const handleremove = (cartId) => {
        let statuschange = { status: "false", id: cartId }
        updatecartstaus(statuschange)
            .then((response) => {
                setFlag(!flag)
            }).catch(err => {
                console.log(err)
            })
    }

    const handleChange =(e)=>{
        setShippingAddress(e.target.value)
    }
    const updateShippingaddress = ()=>{
        let shippingchange = {ship:shippingAddress,id:user.Id}
        updateshippingaddress(shippingchange)
        .then((resopnse)=>{
            console.log(resopnse)
        }).catch((err)=>{
            alert(err);
        })
    }

    const handleOk = async () => {
        let paymentdetail = {
            userId: parseInt(localStorage.getItem("Id")),
            amount: total,
            method: "online",
            transactionId: generateString(16)
        }
        payment(paymentdetail)
            .then((response) => {
                cartitems.map((item) => {
                    let order = {
                        orderstatus: "Pending",
                        deliverystatus: "Pending",
                        userId: parseInt(localStorage.getItem("Id")),
                        watchId: item.watch.Id,
                        countofwatch: item.Quantity
                    }
                    if ((item.watch.Stockavailable - item.Quantity) >= 0) {
                        let newstock = {
                            stock: (item.watch.Stockavailable - item.Quantity),
                            id: item.watch.Id
                        }
                        updateStock(newstock)
                            .then((response) => {
                                console.log(response);
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                    } else {
                        alert("insufficient stock")
                    }

                    addOrder(order)
                        .then((respnse) => {
                            handleremove(item.Id);
                        }).catch((err) => {
                            console.log(err);
                        })

                })
                setpopupOn(false);
                alert("order Successfull");
                window.location.reload()

            }).catch((error) => {
                console.log(error)
                alert("error occured")
            })
    }
    const handleCancel = () => {
        setpopupOn(false)
    }

    return (
        <div className="layout">
            <Modal
                title="Do Payment"
                open={popupon}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div>
                    <h2>Total Amount to pay Rs:{total}</h2>
                    <p>
                    <label>Shipping Address</label>
                    <br/>
                    <p>
                        <label>Name:{user.UserName}</label><br/>
                    </p>
                    <textarea style={{width:"100%",height:"50px"}} name="name" value={shippingAddress}
                     onChange={(e)=>{handleChange(e)}} required />
                     </p>
                     <p>
                        <button type="button" onClick={(e)=>{updateShippingaddress()}}> Update Shipping Address</button>
                     </p>
                    <p>
                        <label>Payment Method : COD </label>
                    </p>
                </div>
            </Modal>
            <div className="left-col">

                {cartitems?.map((item) => {
                    return (<>
                    <Card className="card">
                        <div className="product-image" style={{ height: "100px", width: "100px" }}>
                            <img src={item.watch.Image} alt={"some"} />
                        </div>
                        <div className="details">
                            <h3 className="name"> Name:{item.watch.Name}</h3>
                            <h3 className="model"> Model:{item.watch.ModelInfo}</h3>
                            <h3 className="price">Price(Rs):{item.watch.Price}</h3>
                            <h3 className="qty">Number Ordered:{item.Quantity}</h3>
                            <button className="btn" onClick={(e) => { handleremove(item.Id) }}>Remove</button>
                        </div>
                    </Card>
                    </>
                    )
                })}
            </div>
            <div className="right-col">
                <div>
                    <h2>Total Amount to Pay Rs:{total}</h2>
                </div>
                <div>
                    <button onClick={placeOrder}>Payment</button>
                </div>
            </div>
        </div>
    )

}

export default Cartfunction