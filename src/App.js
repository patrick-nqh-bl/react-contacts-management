import React, { useState } from 'react';
import './App.css';
import { Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import AddDrawer from './AddDrawer';

function App() {
  const [showDrawer, setShowDrawer] = useState(false);
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
      <AddDrawer show={showDrawer} handleOnClose={() => setShowDrawer(false)} />
    </>
  );
}
export default App;
