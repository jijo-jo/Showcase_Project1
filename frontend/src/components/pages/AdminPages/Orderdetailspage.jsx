import React from 'react';
import { Space, Table, Tag } from 'antd';
import { useState,useEffect } from 'react';
import { Button, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Typography } from 'antd';
import { getAllOrders } from '../../api';

function Orderdeatailspage() {
    const [popupon, setpopupOn] = useState(false);
    const [orderlist,setOrderlist] = useState([]);

    useEffect(()=>{
        getAllOrders()
        .then((response)=>{
             let temporder = []
            response.data.map((item)=>{
                let orders={}
                orders.key =item.Id;
                orders.pname =item.watch.Name;
                orders.uname = item.user.UserName;
                orders.address= `${item.user.Housename}(H),${item.user.Postoffice}(P.O),${item.user.District}`;
                orders.deliverystatus=item.Deliverystatus;
                orders.dboy = item?.DeliveryboyId;
                orders.phonenumber = item.user.Phonenumber;
               temporder.push(orders);

            })

            setOrderlist(temporder)
    
        }).catch((err)=>{

              console.log(err)
        })

    },[])

    const approve = () => {
        setpopupOn(true);
    }
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setpopupOn(false);
    };
    const handleOk = () => {
        console.log("ok")
    }
    const items = [
        {
            key: '1',
            label: 'Item 1',
        },
        {
            key: '2',
            label: 'Item 2',
        },
        {
            key: '3',
            label: 'Item 3',
        },
    ];

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
            title: 'Phone Number',
            dataIndex: 'phonenumber',
            key: 'phonenumber',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={approve}>
                        Approve
                    </Button>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            pname: 'Watch1',
            uname:'jijo12',
            address: 'New York No. 1 Lake Park',
            deliverystatus:'pending'
        },
        {
            key: '2',
            pname: 'Watch2',
            uname:'jijo13',
            address: 'New York No. 1 Lake Park',
            deliverystatus:'pending',
            dboy:"someone"
        },
        {
            key: '3',
            pname: 'Watch3',
            uname:'jijo14',
            address: 'New York No. 1 Lake Park',
            deliverystatus:'pending'
        },
    ];

    return (
        <div>
            <Modal
                title="Select Deliveryboy"
                open={popupon}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div>
                    <Dropdown
                        menu={{
                            items,
                            selectable: true,
                            defaultSelectedKeys: ['3'],
                        }}
                    >
                        <Typography.Link>
                            <Space>
                                Selectable
                                <DownOutlined />
                            </Space>
                        </Typography.Link>
                    </Dropdown>
                </div>
            </Modal>
            <Table columns={columns} dataSource={orderlist} />
        </div>);
}

export default Orderdeatailspage;