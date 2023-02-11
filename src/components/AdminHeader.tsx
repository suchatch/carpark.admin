import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/features/auth/authSlice"

type Props = {};

export default function AdminHeader({}: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state:any) => state.auth)
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="index3.html" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell" />
              <span className="badge badge-warning navbar-badge"></span>
            </a>
            {user && (
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                {/* <button onClick={()=>navigate('/userchangepassword')} className="dropdown-item">
                  <i className="fas fa-envelope mr-2" /> Change Password
                  <span className="float-right text-muted text-sm">
                    เปลี่ยนรหัสผ่าน
                  </span>
                </button> */}
                <button onClick={()=>dispatch(logout())} className="dropdown-item">
                  <i className="fas fa-envelope mr-2" /> Logout
                  <span className="float-right text-muted text-sm">
                    ออกจากระบบ
                  </span>
                </button>
              </div>
            )}
          </li>
        </ul>
    </nav>
  );
}
