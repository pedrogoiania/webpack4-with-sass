import React, { Component } from "react";

export default class TableComponent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Latest Sales</h4>
            </div>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th className="border-top-0">NAME</th>
                    <th className="border-top-0">STATUS</th>
                    <th className="border-top-0">DATE</th>
                    <th className="border-top-0">PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="txt-oflo">Elite admin</td>
                    <td>
                      <span className="label label-success label-rounded">
                        SALE
                      </span>{" "}
                    </td>
                    <td className="txt-oflo">April 18, 2017</td>
                    <td>
                      <span className="font-medium">$24</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="txt-oflo">Real Homes WP Theme</td>
                    <td>
                      <span className="label label-info label-rounded">
                        EXTENDED
                      </span>
                    </td>
                    <td className="txt-oflo">April 19, 2017</td>
                    <td>
                      <span className="font-medium">$1250</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="txt-oflo">Ample Admin</td>
                    <td>
                      <span className="label label-purple label-rounded">
                        Tax
                      </span>
                    </td>
                    <td className="txt-oflo">April 19, 2017</td>
                    <td>
                      <span className="font-medium">$1250</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="txt-oflo">Medical Pro WP Theme</td>
                    <td>
                      <span className="label label-success label-rounded">
                        Sale
                      </span>
                    </td>
                    <td className="txt-oflo">April 20, 2017</td>
                    <td>
                      <span className="font-medium">-$24</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="txt-oflo">Hosting press html</td>
                    <td>
                      <span className="label label-success label-rounded">
                        SALE
                      </span>
                    </td>
                    <td className="txt-oflo">April 21, 2017</td>
                    <td>
                      <span className="font-medium">$24</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="txt-oflo">Digital Agency PSD</td>
                    <td>
                      <span className="label label-danger label-rounded">
                        Tax
                      </span>{" "}
                    </td>
                    <td className="txt-oflo">April 23, 2017</td>
                    <td>
                      <span className="font-medium">-$14</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
