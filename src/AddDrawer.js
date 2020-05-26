import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Form, Input, Button, Checkbox } from 'antd';

const AddDrawer = ({
  show,
  handleOnClose,
  handleOnFinish,
  handleOnFinishFailed,
}) => {
  const initialValues = { firstName: '', lastName: '', phoneNumber: null };
  const [form] = Form.useForm();
  const [, forceUpdate] = useState(); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);
  return (
    <Drawer
      width={412}
      data-testid='add-contact-drawer'
      title='Add Contact'
      visible={show}
      onClose={handleOnClose}
      maskClosable={false}
    >
      <Form
        form={form}
        name='basic'
        initialValues={initialValues}
        onFinish={handleOnFinish}
        onFinishFailed={handleOnFinishFailed}
      >
        <Form.Item
          label='First Name'
          name='firstName'
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Last Name'
          name='lastName'
          rules={[
            {
              required: true,
              message: 'Please input your last name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Phone Number'
          name='phoneNumber'
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input type='tel' />
        </Form.Item>

        <Form.Item shouldUpdate>
          {() => (
            <Button
              type='primary'
              htmlType='submit'
              disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Add
            </Button>
          )}
        </Form.Item>
      </Form>
    </Drawer>
  );
};

AddDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  handleOnClose: PropTypes.func.isRequired,
  handleOnFinish: PropTypes.func.isRequired,
  handleOnFinishFailed: PropTypes.func.isRequired,
};

export default AddDrawer;
