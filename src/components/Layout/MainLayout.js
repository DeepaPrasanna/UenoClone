import React, { useRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import Header from "./Header";
import Preloader from "../Preloader";
import Screen from "./Screen";
import ShowDetail from "./ShowDetail";
import Content from "./Content";


const MainLayout = () => {
  const [loading, setLoading] = useState(true);
  // declare and initialize the ref
  const container = useRef(null);

  const toggleContainer = () => {
    container.current.classList.toggle("open");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="px-5">
      <Header toggleContainer={toggleContainer} />
      <Container fluid className="pt-5 screen-menu" ref={container}>
        <Screen toggleContainer={toggleContainer} />
      </Container>
      {loading ? (
        <Preloader />
      ) : (
        <Content>
          <ShowDetail />
        </Content>
      )}
    </div>
  );
};

export default MainLayout;
