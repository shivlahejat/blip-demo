import {
  POLICY_ROUTES,
  ROUTES,
} from "@/imports/NewLandingPage/constants/ROUTES";
import FooterContact from "@/imports/NewLandingPage/ui/svgs/FooterContact";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const FooterSectionV2 = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 100;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };
  return (
    <Container>
      <FooterImage src="/images/footer_image.png" alt="Footer Image" />
      <InnerWrapper>
        <RoutesContainer>
          <LogoContainer>
            <LogoImage
              src="/images/landing/logo.webp"
              alt="Logo"
              width={40}
              height={40}
            />
            <LogoText>Blip</LogoText>
          </LogoContainer>
          <RoutesTextWrapper>
            {ROUTES.map((route) => (
              <RouteText
                key={route.name}
                onClick={() => handleScrollTo(route.path)}
              >
                {route.name}
              </RouteText>
            ))}
          </RoutesTextWrapper>
        </RoutesContainer>
        <ContentContainer>
          <PolicyContainer>
            {POLICY_ROUTES.map((policy) => {
              const Icon = policy.icon;
              return (
                <PolicyWrapper key={policy.name}>
                  <Icon />
                  <PolicyText>{policy.name}</PolicyText>
                </PolicyWrapper>
              );
            })}
          </PolicyContainer>
          <InfoContainer>
            <ContactContainer>
              <FooterContact />
              <ContactText>shree@withblip.com</ContactText>
            </ContactContainer>
            <FooterText>
              Blip use and transfer of information received from Google APIs to
              any other app will adhere to Workspace API User Data and Developer
              Policy, including the Limited use of user data.
            </FooterText>
          </InfoContainer>
        </ContentContainer>
      </InnerWrapper>
    </Container>
  );
};

export default FooterSectionV2;

const Container = styled.div`
  width: 100%;
  border-radius: 60px 60px 0 0;
  border: 2px solid #1e1e1e;
  background: #f6eddc;
  box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.25);
  padding: 64px;
  position: relative;
  overflow: hidden;
`;

const FooterImage = styled.img`
  position: absolute;
  bottom: -50%;
  left: 0;
  object-fit: contain;
  z-index: 100;
  width: 1016.32px;
  height: 322.681px;
  aspect-ratio: 400/127;
  object-position: left;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  max-width: 1512px;
  margin: 0 auto;
`;

const RoutesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const LogoImage = styled(Image)`
  width: 39.074px;
  height: 39.074px;
  aspect-ratio: 1/1;
  border-radius: 8px;
`;

const LogoText = styled.div`
  color: #1e1e1e;
  font-family: Alcyone-Bold;
  font-size: 24px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-transform: capitalize;
`;

const RoutesTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
`;

const RouteText = styled.div`
  color: #1e1e1e;
  font-family: Alcyone-SemiBold;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-transform: capitalize;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PolicyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const PolicyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PolicyText = styled.div`
  color: #1e1e1e;
  font-family: Alcyone-Bold;
  font-size: 24px;
  font-style: normal;
  line-height: 200%; /* 48px */
  letter-spacing: -0.48px;
  text-transform: capitalize;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: end;
`;

const ContactText = styled.div`
  color: #1e1e1e;
  font-family: Alcyone-Bold;
  font-size: 24px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
`;

const FooterText = styled.div`
  color: #1e1e1e;
  text-align: right;
  font-family: Alcyone;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.28px;
  max-width: 389.424px;
`;
