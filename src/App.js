import React from 'react';
import './App.css';
import { Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

function App() {
  return (
    <Button
      type='primary'
      icon={<PlusCircleFilled />}
      data-testid='add-contact-button'
    >
      Add
    </Button>
  );
}
export default App;
