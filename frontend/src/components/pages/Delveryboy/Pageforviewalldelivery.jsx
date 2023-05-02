import React from 'react';
import { Space, Table, Tag } from 'antd';

function PageforviewDeliveries(){
const columns= [
  {
    title: 'Productname',
    dataIndex: 'pname',
    key: 'pname',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Delivery Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <button>Deliverd</button>
      </Space>
    ),
  },
];

const data= [
  {
    key: '1',
    pname: 'Watch1',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    pname: 'Watch2',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '3',
    pname: 'Watch3',
    address: 'New York No. 1 Lake Park'
  },
];

return(<Table columns={columns} dataSource={data} />);
}

export default PageforviewDeliveries;