import React from 'react';
import { Space, Table, Tag } from 'antd';
import { useState,useEffect } from 'react';
import { Button, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Typography } from 'antd';
import { getAllOrders } from '../../api';
import { getalldeliveryboys,updateOrderStatus,updatedelboy } from '../../api';

function Orderdeatailspage() {
    const [popupon, setpopupOn] = useState(false);
    const [orderlist,setOrderlist] = useState([]);
    const [deliveryboys,setDeliveryboys]=useState([]);
    const [deliveryboyId,setdeliveryboyID]= useState();
    const [recordId,setRecordId] =useState()

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
        
           getalldeliveryboys()
           .then((response)=>{
               let tempdel = []
               response.data.map((item)=>{
                let del = {}
                 del.Id = `${item.Id}`;
                 del.name = item.UserName;
                 tempdel.push(del)
               })
               console.log(tempdel);
               setDeliveryboys(tempdel);
           }).catch((error)=>{
             console.log(error)
           })
        }).catch((err)=>{

              console.log(err)
        })

    },[])

    const approve = (e,record) => {
        console.log(record)
        setRecordId(record.key)
        setpopupOn(true);
    }

    const assigndelivery = (e)=>{
            setdeliveryboyID(e.target.value);
    }
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setpopupOn(false);
    };
    const handleOk = async () => {
       await updateOrderStatus({orderstatus:"Approved",id:recordId})
        .then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
        await updatedelboy({deliveryboy:deliveryboyId,id:recordId})
        .then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
        window.location = '/home'
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
                    onClick={e => approve(e, record)}>
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
                <select name="deliveryboys" id="deliveryboys" onChange={(e)=>{assigndelivery(e)}}>
                   {deliveryboys.map((item)=>{
                      return(<option value={item.Id}>{item.name}</option>)
                   })}
                   </select>
                </div>
            </Modal>
            <Table columns={columns} dataSource={orderlist} />
        </div>);
}

export default Orderdeatailspage;