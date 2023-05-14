import React from 'react';
import { Space, Table, Tag } from 'antd';
import { useState,useEffect } from 'react';
import { Button, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Typography } from 'antd';
import { getallusers,deleteUser} from '../../api';


function Employeelist() {

    const [userList,setUserlist] = useState([]);
    useEffect(()=>{
       getallusers()
       .then((response)=>{
        let allusers = [];
        response.data.map((item) => {
            let singleuser ={}
            singleuser.ename = item.UserName;
            singleuser.role = item.credential.role.Rolename;
            singleuser.key = item.Id;
            singleuser.address = item.Housename+'(H),'+item.Postoffice+'(P.O),'+item.District;
            singleuser.email = item.Email;
            singleuser.phonenumber = item.Phonenumber
            allusers.push(singleuser);
        })
        console.log(allusers);
        setUserlist(allusers);
        ;
       })
       .catch((err)=>{
        console.log(err);
       })

    },[]);

    const navigatetoadd=()=>{
        window.location = '/addemployee'
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
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title:'Phone Number',
            dataIndex:'phonenumber',
            key:'phonenumber'

        }
    ];

    return (
        <div>
           
            <Table columns={columns} dataSource={userList} />
            <Button onClick={navigatetoadd}>Add</Button>
        </div>);
}

export default Employeelist;