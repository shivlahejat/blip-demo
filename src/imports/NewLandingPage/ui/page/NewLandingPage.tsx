"use client";

import Navbar from "@/imports/NewLandingPage/ui/components/Navbar";
import React from "react";
import styled from "styled-components";

const NewLandingPage = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default NewLandingPage;

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
