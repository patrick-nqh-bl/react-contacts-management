import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Layout } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import AddDrawer from './AddDrawer';

function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [values, setValues] = useState([]);
  const [errorInfo, setErrorInfo] = useState({});

  const handleAddFormOnFinish = (data) => {
    setValues([...values, data]);
    setShowDrawer(false);
  };
  const handleAddFormOnFinishFailed = (errorInfo) => {
    setErrorInfo(errorInfo);
  };

  console.log('values: ', values);
  console.log('errorInfo: ', errorInfo);

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
      <Layout.Content></Layout.Content>
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
