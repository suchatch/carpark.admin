import React, { useEffect } from "react";
import AdminHoc from "../../AdminHoc";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authSelector } from "../../../store/features/auth/authSlice";
type Props = {};

export default function InOut({}: Props) {

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

      <AdminHoc contentTitle="InOut">
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
