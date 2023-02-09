import React from 'react'
import AdminHoc from '../../AdminHoc'
type Props = {}

export default function StaffCreate({}: Props) {
  return (
    <AdminHoc contentTitle="Staff Create">
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
  )
}