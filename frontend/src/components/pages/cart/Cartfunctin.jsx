import React from "react";
import { useState, useEffect } from "react";
import { getallcartitems } from "../../api";
import { Card } from 'antd';
import { updatecartstaus } from "../../api";

function Cartfunction() {
    const [cartitems, setCarditems] = useState([]);
    const [flag,setFlag] = useState(true);
    const [total,settotal]=useState(0);

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

    const handleremove = (cartId)=>{
        let statuschange = {status:"false",id:cartId}
        updatecartstaus(statuschange)
        .then((response)=>{
            setFlag(!flag)
        }).catch(err=>{
            console.log(err)
        })


    }

    return (
        <div>
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
          </div>
    )

}

export default Cartfunction