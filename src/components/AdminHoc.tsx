import React from "react";
import AdminContent from "./AdminContent";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

type Props = {
  children: JSX.Element;
  contentTitle: string;
};

export default function AdminHoc({ children,contentTitle }: Props) {
  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <AdminContent title={contentTitle}>
        {children}
      </AdminContent>
      <AdminFooter />
    </>
  );
}
