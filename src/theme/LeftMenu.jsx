import React, { Component } from "react";

class LeftMenu extends Component {
  render() {
    return (
      <aside className="left-sidebar" data-sidebarbg="skin5">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav" className="in">
              <li className="sidebar-item selected">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link active"
                  href="#"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-av-timer" />
                  <span className="hide-menu">Dashboard</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="#"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-account-network" />
                  <span className="hide-menu">Profile</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="#"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-arrange-bring-forward" />
                  <span className="hide-menu">Form Basic</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="#"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-border-none" />
                  <span className="hide-menu">Table</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="#"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-face" />
                  <span className="hide-menu">Icon</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="#"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-file" />
                  <span className="hide-menu">Blank</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="#"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-alert-outline" />
                  <span className="hide-menu">404</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

export default LeftMenu;
