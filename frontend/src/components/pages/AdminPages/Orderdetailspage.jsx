import React from 'react';
import { Space, Table, Tag } from 'antd';
import { useState } from 'react';
import { Button, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Typography } from 'antd';

function Orderdeatailspage() {
    const [popupon, setpopupOn] = useState(false);

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
            <Table columns={columns} dataSource={data} />
        </div>);
}

export default Orderdeatailspage;