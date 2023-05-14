import React from 'react';
import { Space, Table, Tag } from 'antd';
import { useState,useEffect } from 'react';
import { Button, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Typography } from 'antd';
import { allpendingdelivery} from '../../api';
import {updateDeliverystatus} from '../../api'

function Pageforviewalldelivery() {
    const [orderlist,setOrderlist] = useState([]);

    useEffect(()=>{
        let userId={id:localStorage.getItem('Id')}
        allpendingdelivery(userId)
        .then((response)=>{
             let temporder = []
            response.data.map((item)=>{
                let orders={}
                orders.key =item.Id;
                orders.pname =item.watch.Name;
                orders.uname = item.user.UserName;
                orders.address= `${item.user.Housename}(H),${item.user.Postoffice}(P.O),${item.user.District}`;
                orders.deliverystatus=item.Deliverystatus;
                orders.orderstatus = item.Orderstatus;
                orders.dboy = item?.DeliveryboyId;
                orders.phonenumber = item.user.Phonenumber;
               temporder.push(orders);

            })

            setOrderlist(temporder)
    
        }).catch((err)=>{

              console.log(err)
        })

    },[])

    const deliver = (e,record)=>{
        updateDeliverystatus({deliverystatus:"Deliverd",id:record.key})
        .then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
        window.location.reload()
    }

    const columns = [
        {
            title: 'Username',
            dataIndex: 'uname',
            key: 'uname',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Delivery Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Product',
            dataIndex: 'pname',
            key: 'pname',
        },
        {
            title: "Delivery Status",
            dataIndex: 'deliverystatus',
            key: 'deliverystatus',
        },
        {
            title: 'Delivery boy',
            dataIndex: 'dboy',
            key: 'dboy',
        },
        {
            title: 'OrderStatus',
            dataIndex: 'orderstatus',
            key: 'orderstatus',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phonenumber',
            key: 'phonenumber',
        },
        {
            title: 'Action',
            dataIndex: "id",
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary"  id={record.id}
                    onClick={e => deliver(e, record)}>
                        Delivered
                    </Button>
                </Space>
            ),
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={orderlist} />
        </div>);
}

export default Pageforviewalldelivery;