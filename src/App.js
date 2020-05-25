import React from 'react';
import './App.css';
import { Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

function App() {
  return (
    <Button type='primary' icon={<PlusCircleFilled />}>
      Add
    </Button>
  );
}
export default App;
