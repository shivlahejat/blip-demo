"use client";

import FeaturesSection from "@/imports/NewLandingPage/ui/components/FeaturesSection";
import AdManagementSection from "@/imports/NewLandingPage/ui/components/AdManagementSection";
import HeroSection from "@/imports/NewLandingPage/ui/components/HeroSection";
import Navbar from "@/imports/NewLandingPage/ui/components/Navbar";
import RatingCardsSection from "@/imports/NewLandingPage/ui/components/RatingCardsSection";
import SupportSection from "@/imports/NewLandingPage/ui/components/SupportSection";
import React from "react";
import styled from "styled-components";
import ReviewSection from "@/imports/NewLandingPage/ui/components/ReviewSection";
import MetaPartnersSection from "@/imports/NewLandingPage/ui/components/MetaPartnersSection";
import SetUpSection from "@/imports/NewLandingPage/ui/components/SetUpSection";
import TikTokSection from "@/imports/NewLandingPage/ui/components/TikTokSection";
import PricingSection from "@/imports/NewLandingPage/ui/components/PricingSection";
import AnalyticsSection from "@/imports/NewLandingPage/ui/components/AnalyticsSection";

const NewLandingPage = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <RatingCardsSection />
      <AdManagementSection />
      <FeaturesSection />
      <SupportSection />
      <ReviewSection />
      <SetUpSection />
      <MetaPartnersSection />
      <AnalyticsSection />
      <TikTokSection />
      <PricingSection />
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
