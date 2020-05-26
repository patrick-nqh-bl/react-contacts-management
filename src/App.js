import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Layout, Table, Menu, Breadcrumb } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import AddDrawer from './AddDrawer';
import { connect } from 'react-redux';
import { addContact } from './redux/contacts/actions';

const { Header, Content, Footer, Sider } = Layout;

const App = ({ contacts, addContact }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [errorInfo, setErrorInfo] = useState({});
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (isCollapsed) => {
    setCollapsed(isCollapsed);
  };

  const handleAddFormOnFinish = (data) => {
    addContact({
      key: contacts.length + 1,
      ...data,
    });
    setShowDrawer(false);
  };
  const handleAddFormOnFinishFailed = (errorInfo) => {
    setErrorInfo(errorInfo);
  };

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
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className='logo' />
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'></Menu>
        </Sider>
        <Layout className='site-layout'>
          <Header
            className='site-layout-background'
            style={{ padding: 0, background: '#fff' }}
          />
          <Content style={{ margin: '0 16px' }}>
            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: 360 }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}
              >
                <div></div>
                <div>
                  <Button
                    type='primary'
                    icon={<PlusCircleFilled />}
                    data-testid='add-contact-button'
                    onClick={() => setShowDrawer(true)}
                  >
                    Add
                  </Button>
                </div>
              </div>

              <Layout.Content>
                <Table dataSource={contacts} columns={columns} />
              </Layout.Content>
              <AddDrawer
                show={showDrawer}
                handleOnClose={() => setShowDrawer(false)}
                handleOnFinish={handleAddFormOnFinish}
                handleOnFinishFailed={handleAddFormOnFinishFailed}
              />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts && state.contacts.allContacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => {
      dispatch(addContact(contact));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
