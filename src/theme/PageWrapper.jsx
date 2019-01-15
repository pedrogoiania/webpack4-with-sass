import React, { Component } from "react";

class PageWrapper extends Component {
  render() {
    return (
      <div className="page-wrapper" style={{ display: "block" }}>
        {this.props.children}
      </div>
    );
  }
}

export default PageWrapper;
