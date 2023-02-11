import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSelector } from "../../../store/features/auth/authSlice";
import AdminHoc from "../../AdminHoc";

type Props = {};

export default function Dashboard({}: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector(authSelector);

  useEffect(() => {
    console.log(user)
    if (!user) {
      navigate("/login");
    }

  }, [user, dispatch]);

  return (

      <AdminHoc contentTitle="Dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="m-0">Featured</h5>
                </div>
                <div className="card-body">
                  <h6 className="card-title">Data</h6>
                  <p className="card-text">......</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminHoc>
  );
}
