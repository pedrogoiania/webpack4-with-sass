import React from "react";
import ReactDOM from "react-dom";

import "./theme/assets/dependencies";

import Header from "./theme/Header";
import Main from "./theme/Main";
import LeftMenu from "./theme/LeftMenu";
import PageWrapper from "./theme/PageWrapper";
import Footer from "./theme/Footer";
import Home from "./pages/Home";
const App = () => {
  return (
    <Main>
      <Header />
      <LeftMenu />
      <PageWrapper>
        <Home />
        <Footer />
      </PageWrapper>
    </Main>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
