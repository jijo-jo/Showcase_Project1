import React from 'react';
import { Space, Table, Tag } from 'antd';
import { useState,useEffect } from 'react';
import { Button, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Typography } from 'antd';
import { getOrdersuserId,updateOrderStatus} from '../../api';

function OrderofUsers() {
    const [orderlist,setOrderlist] = useState([]);

    useEffect(()=>{
        let userId={userId:localStorage.getItem('Id')}
        getOrdersuserId(userId)
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

    const cancelorder = (e,record)=>{
        updateOrderStatus({orderstatus:"Cancel",id:record.key})
        .then((response)=>{
            window.location.reload()
        }).catch((err)=>{
            console.log(err)
        })
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
            title: 'OrderStatus',
            dataIndex: 'orderstatus',
            key: 'orderstatus',
        },
        {
            title: 'Action',
            dataIndex: "id",
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary"  id={record.id}
                    onClick={e => cancelorder(e, record)}>
                        Cancel
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

export default OrderofUsers;