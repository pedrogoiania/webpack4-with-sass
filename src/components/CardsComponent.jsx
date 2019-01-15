import React, { Component } from "react";

class CardsComponent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Recent Comments</h4>
            </div>
            <div className="comment-widgets" style={{ height: 430 }}>
              <div className="d-flex flex-row comment-row m-t-0">
                <div className="p-2">
                  <img
                    src={require("../theme/assets/images/users/1.jpg")}
                    alt="user"
                    width="50"
                    className="rounded-circle"
                  />
                </div>
                <div className="comment-text w-100">
                  <h6 className="font-medium">James Anderson</h6>
                  <span className="m-b-15 d-block">
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry.{" "}
                  </span>
                  <div className="comment-footer">
                    <span className="text-muted float-right">
                      April 14, 2016
                    </span>
                    <span className="label label-rounded label-primary">
                      Pending
                    </span>
                    <span className="action-icons">
                      <a href="javascript:void(0)">
                        <i className="ti-pencil-alt" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-check" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-heart" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row comment-row">
                <div className="p-2">
                  <img
                    src={require("../theme/assets/images/users/4.jpg")}
                    alt="user"
                    width="50"
                    className="rounded-circle"
                  />
                </div>
                <div className="comment-text active w-100">
                  <h6 className="font-medium">Michael Jorden</h6>
                  <span className="m-b-15 d-block">
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry.{" "}
                  </span>
                  <div className="comment-footer ">
                    <span className="text-muted float-right">
                      April 14, 2016
                    </span>
                    <span className="label label-success label-rounded">
                      Approved
                    </span>
                    <span className="action-icons active">
                      <a href="javascript:void(0)">
                        <i className="ti-pencil-alt" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="icon-close" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-heart text-danger" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row comment-row">
                <div className="p-2">
                  <img
                    src={require("../theme/assets/images/users/5.jpg")}
                    alt="user"
                    width="50"
                    className="rounded-circle"
                  />
                </div>
                <div className="comment-text w-100">
                  <h6 className="font-medium">Johnathan Doeting</h6>
                  <span className="m-b-15 d-block">
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry.{" "}
                  </span>
                  <div className="comment-footer">
                    <span className="text-muted float-right">
                      April 14, 2016
                    </span>
                    <span className="label label-rounded label-danger">
                      Rejected
                    </span>
                    <span className="action-icons">
                      <a href="javascript:void(0)">
                        <i className="ti-pencil-alt" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-check" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-heart" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row comment-row m-t-0">
                <div className="p-2">
                  <img
                    src={require("../theme/assets/images/users/2.jpg")}
                    alt="user"
                    width="50"
                    className="rounded-circle"
                  />
                </div>
                <div className="comment-text w-100">
                  <h6 className="font-medium">Steve Jobs</h6>
                  <span className="m-b-15 d-block">
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry.{" "}
                  </span>
                  <div className="comment-footer">
                    <span className="text-muted float-right">
                      April 14, 2016
                    </span>
                    <span className="label label-rounded label-primary">
                      Pending
                    </span>
                    <span className="action-icons">
                      <a href="javascript:void(0)">
                        <i className="ti-pencil-alt" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-check" />
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-heart" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Temp Guide</h4>
              <div className="d-flex align-items-center flex-row m-t-30">
                <div className="display-5 text-info">
                  <i className="wi wi-day-showers" />{" "}
                  <span>
                    73<sup>°</sup>
                  </span>
                </div>
                <div className="m-l-10">
                  <h3 className="m-b-0">Saturday</h3>
                  <small>Ahmedabad, India</small>
                </div>
              </div>
              <table className="table no-border mini-table m-t-20">
                <tbody>
                  <tr>
                    <td className="text-muted">Wind</td>
                    <td className="font-medium">ESE 17 mph</td>
                  </tr>
                  <tr>
                    <td className="text-muted">Humidity</td>
                    <td className="font-medium">83%</td>
                  </tr>
                  <tr>
                    <td className="text-muted">Pressure</td>
                    <td className="font-medium">28.56 in</td>
                  </tr>
                  <tr>
                    <td className="text-muted">Cloud Cover</td>
                    <td className="font-medium">78%</td>
                  </tr>
                </tbody>
              </table>
              <ul className="row list-style-none text-center m-t-30">
                <li className="col-3">
                  <h4 className="text-info">
                    <i className="wi wi-day-sunny" />
                  </h4>
                  <span className="d-block text-muted">09:30</span>
                  <h3 className="m-t-5">
                    70<sup>°</sup>
                  </h3>
                </li>
                <li className="col-3">
                  <h4 className="text-info">
                    <i className="wi wi-day-cloudy" />
                  </h4>
                  <span className="d-block text-muted">11:30</span>
                  <h3 className="m-t-5">
                    72<sup>°</sup>
                  </h3>
                </li>
                <li className="col-3">
                  <h4 className="text-info">
                    <i className="wi wi-day-hail" />
                  </h4>
                  <span className="d-block text-muted">13:30</span>
                  <h3 className="m-t-5">
                    75<sup>°</sup>
                  </h3>
                </li>
                <li className="col-3">
                  <h4 className="text-info">
                    <i className="wi wi-day-sprinkle" />
                  </h4>
                  <span className="d-block text-muted">15:30</span>
                  <h3 className="m-t-5">
                    76<sup>°</sup>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardsComponent;
