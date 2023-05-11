import React, { useState } from 'react';
import { Button, InputNumber, Space } from 'antd';
import { addtocart } from '../../api';

function AddtoCartfunctionn(props) {

    const [value, setValue] = useState('0');

    const handleAddcart =()=>{
        let cartvalue ={
            quantity:value,
            userId:parseInt(localStorage.getItem("Id")),
            watchId:props.watch.Id,
            status:true
        }
        addtocart(cartvalue)
        .then((res)=>{
            window.location = '/home'
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <Space>
            <InputNumber min={0} max={20} value={value} onChange={setValue} />
            <Button
                type="primary"
                onClick={() => {
                    setValue(0);
                }}
            >
                Reset
            </Button>
            <Button
                type="primary"
                onClick={handleAddcart}>
                    Add to cart
                </Button>
        </Space>
    );

}

export default AddtoCartfunctionn