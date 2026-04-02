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
import FAQsSection from "@/imports/NewLandingPage/ui/components/FAQsSection";
import { useHeroImageOverflow } from "@/imports/NewLandingPage/hooks/useHeroImageOverflow";

const NewLandingPage = () => {
  const { heroContainerRef, handleImageRef, handleImageLoad, imageOverflow } =
    useHeroImageOverflow();

  return (
    <Container id="top">
      <Navbar />
      <div ref={heroContainerRef} style={{ width: "100%" }}>
        <HeroSection
          onImageRef={handleImageRef}
          onImageLoad={handleImageLoad}
        />
      </div>
      <ContentWrapper>
        <div id="features" style={{ marginTop: imageOverflow }}>
          <RatingCardsSection />
        </div>
        <AdManagementSection />
        <div id="analytics">
          <FeaturesSection />
        </div>
        <SupportSection />
        <div id="blog">
          <ReviewSection />
        </div>
        <SetUpSection />
        <MetaPartnersSection />
        <AnalyticsSection />
        <TikTokSection />
        <div id="pricing">
          <PricingSection />
        </div>
        <FAQsSection />
      </ContentWrapper>
    </Container>
  );
};

export default NewLandingPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  gap: 200px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 43px 0px;
  gap: 200px;
  overflow-x: hidden;
  width: 100%;
`;
