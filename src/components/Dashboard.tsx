import React from "react";
import AdminHoc from "./AdminHoc";

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <>
      <AdminHoc contentTitle="HOME">
        <div className="container-fluid"></div>
      </AdminHoc>
    </>
  );
}
