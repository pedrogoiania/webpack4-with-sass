import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import Breadcrumb from "../theme/Breadcrumb";
import Content from "../theme/Content";
import CardsComponent from "../components/CardsComponent";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb />
        <Content>
          <TableComponent />
          <CardsComponent />
        </Content>
      </React.Fragment>
    );
  }
}

export default Home;
