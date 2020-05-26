import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';

const AddDrawer = ({ show, handleOnClose }) => {
  return (
    <Drawer
      data-testid='add-contact-drawer'
      title='Add Contact'
      visible={show}
      onClose={handleOnClose}
      maskClosable={false}
    >
      <h1>Content Here</h1>
    </Drawer>
  );
};

AddDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  handleOnClose: PropTypes.func.isRequired,
};

export default AddDrawer;
