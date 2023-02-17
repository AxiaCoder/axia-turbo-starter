import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Sidebar } from './sidebar/sidebar.component';
import { Content } from './content.component';

export const Layout: React.FC = () => (
  <>
    <Sidebar />
    <Content>
      <Outlet />
    </Content>
    <ToastContainer position="bottom-right" />
  </>
);
