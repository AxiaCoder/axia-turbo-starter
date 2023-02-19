import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Sidebar } from "./sidebar/sidebar.component";
import { Content } from "./content.component";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }: ILayoutProps) => (
  <>
    <Sidebar />
    <Content>{children}</Content>
    <ToastContainer position="bottom-right" />
  </>
);
