import React, { Component } from "react";

class Breadcrumb extends Component {
  render() {
    return (
      <div className="page-breadcrumb">
        <div className="row">
          <div className="col-5 align-self-center">
            <h4 className="page-title">Dashboard</h4>
          </div>
          <div className="col-7 align-self-center">
            <div className="d-flex align-items-center justify-content-end">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Breadcrumb;
