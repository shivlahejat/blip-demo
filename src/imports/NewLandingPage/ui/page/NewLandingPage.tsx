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
import TikTokSection from "@/imports/NewLandingPage/ui/components/TikTokSection";
import PricingSection from "@/imports/NewLandingPage/ui/components/PricingSection";
import AnalyticsSection from "@/imports/NewLandingPage/ui/components/AnalyticsSection";
import FAQsSection from "@/imports/NewLandingPage/ui/components/FAQsSection";
import { useHeroImageOverflow } from "@/imports/NewLandingPage/hooks/useHeroImageOverflow";
import FooterSectionV2 from "@/imports/NewLandingPage/ui/components/FooterSectionV2";

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
        <FeaturesWrapper $marginTop={imageOverflow}>
          <RatingCardsSection />
        </FeaturesWrapper>
        <AdManagementSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <SupportSection />
        <div id="blog">
          <ReviewSection />
        </div>
        <MetaPartnersSection />
        <div id="analytics">
          <AnalyticsSection />
        </div>
        <TikTokSection />
        <div id="pricing">
          <PricingSection />
        </div>
        <FAQsSection />
        <FooterSectionV2 />
      </ContentWrapper>
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
  gap: 200px;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    gap: 150px;
  }

  @media (max-width: 768px) {
    gap: 72px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 200px;
  overflow-x: hidden;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 150px;
  }

  @media (max-width: 768px) {
    gap: 72px;
  }
`;

const FeaturesWrapper = styled.div<{ $marginTop: number }>`
  margin-top: ${(props) => props.$marginTop}px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;
