import React from 'react';
import { Space, Table, Tag } from 'antd';
import { useState } from 'react';
import { Button, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Typography } from 'antd';

function Employeelist() {

    const navigatetoadd=()=>{

    }
    const ondelete=()=>{

    }
    const columns = [
        {
            title: 'Employee name',
            dataIndex: 'ename',
            key: 'ename',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={ondelete}>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            role: 'deliveryboy',
            ename:'jijo12',
            address: 'New York No. 1 Lake Park'
        },
        {
            key: '2',
            role: 'Manager',
            ename:'jijo13',
            address: 'New York No. 1 Lake Park'
        },
        {
            key: '3',
            role: 'staff',
            ename:'jijo14',
            address: 'New York No. 1 Lake Park'
        },
    ];

    return (
        <div>
            <Button onClick={navigatetoadd}>Add</Button>
            <Table columns={columns} dataSource={data} />
        </div>);
}

export default Employeelist;