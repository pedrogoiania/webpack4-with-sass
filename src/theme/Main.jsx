import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div
        id="main-wrapper"
        data-navbarbg="skin6"
        data-theme="light"
        data-layout="vertical"
        data-sidebartype="full"
        data-boxed-layout="full"
      >
        {this.props.children}
      </div>
    );
  }
}

export default Main;
