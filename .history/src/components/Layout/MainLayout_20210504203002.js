import React, { useRef } from "react";
import { Container } from "react-bootstrap";

import Header from "./Header";
import Screen from "./Screen";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Container fluid className="pt-5 screen-menu">
        <Screen />
      </Container>
    </div>
  );
};

export default MainLayout;
