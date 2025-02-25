import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MainNav from "./components/nav/MainNav";
import SideNav from "./components/nav/SideNav";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  padding-top: 160px;
  position: relative;
`;

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Container>
      <MainNav />
      <MainContainer>
        <SideNav />
        <Outlet />
      </MainContainer>
    </Container>
  );
}

export default App;
