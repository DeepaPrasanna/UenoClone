import React, { useRef } from "react";
import { Container } from "react-bootstrap";

import Header from "./Header";
import Screen from "./Screen";

const MainLayout = () => {
  const container = useRef(null);

  const toggleContainer = () => {
    container.current.classList.toggle("open");
  };
  return (
    <div>
      <Header toggleContainer={toggleContainer} />
      <Container fluid className="pt-5 py-5 screen-menu" ref={container}>
        <Screen toggleContainer={toggleContainer} />
      </Container>
    </div>
  );
};

export default MainLayout;
