import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Layout, Table } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import AddDrawer from './AddDrawer';

function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [values, setValues] = useState([]);
  const [errorInfo, setErrorInfo] = useState({});

  const handleAddFormOnFinish = (data) => {
    setValues([
      ...values,
      {
        key: values.length,
        ...data,
      },
    ]);
    setShowDrawer(false);
  };
  const handleAddFormOnFinishFailed = (errorInfo) => {
    setErrorInfo(errorInfo);
  };

  console.log('values: ', values);
  console.log('errorInfo: ', errorInfo);

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
  ];

  return (
    <>
      <Button
        type='primary'
        icon={<PlusCircleFilled />}
        data-testid='add-contact-button'
        onClick={() => setShowDrawer(true)}
      >
        Add
      </Button>
      <Layout.Content>
        <Table dataSource={values} columns={columns}></Table>
      </Layout.Content>
      <AddDrawer
        show={showDrawer}
        handleOnClose={() => setShowDrawer(false)}
        handleOnFinish={handleAddFormOnFinish}
        handleOnFinishFailed={handleAddFormOnFinishFailed}
      />
    </>
  );
}
export default App;
