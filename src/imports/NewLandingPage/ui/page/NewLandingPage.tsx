"use client";

import FeaturesSection from "@/imports/NewLandingPage/ui/components/FeaturesSection";
import HeroSection from "@/imports/NewLandingPage/ui/components/HeroSection";
import Navbar from "@/imports/NewLandingPage/ui/components/Navbar";
import RatingCardsSection from "@/imports/NewLandingPage/ui/components/RatingCardsSection";
import React from "react";
import styled from "styled-components";

const NewLandingPage = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <RatingCardsSection />
      <FeaturesSection />
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
  padding: 36px 0px 43px 0px;
  gap: 200px;
`;
