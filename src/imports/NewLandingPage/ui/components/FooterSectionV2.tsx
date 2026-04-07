import {
  POLICY_ROUTES,
  ROUTES,
} from "@/imports/NewLandingPage/constants/ROUTES";
import FooterContact from "@/imports/NewLandingPage/ui/svgs/FooterContact";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import { CircleCheck } from "lucide-react";

const FooterSectionV2 = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shree@withblip.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

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
      <FooterImage src="/images/footer_image.webp" alt="Footer Image" />
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
                <PolicyWrapper
                  key={policy.name}
                  href={policy.path}
                  target="_blank"
                >
                  <IconWrapper>
                    <Icon />
                  </IconWrapper>
                  <PolicyText>{policy.name}</PolicyText>
                </PolicyWrapper>
              );
            })}
          </PolicyContainer>
          <InfoContainer>
            <ContactContainer onClick={handleCopyEmail}>
              <IconWrapper>
                {isCopied ? <CircleCheck size={24} /> : <FooterContact />}
              </IconWrapper>
              <ContactText>shree@withblip.com</ContactText>
            </ContactContainer>
            <FooterText>
              Blip use and transfer of information received from Google APIs to
              any other app will adhere to{" "}
              <FooterLink
                href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy"
                target="_blank"
              >
                Workspace API User Data and Developer Policy
              </FooterLink>
              , including the{" "}
              <FooterLink
                href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy#limited-use"
                target="_blank"
              >
                Limited use of user data.
              </FooterLink>
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

  @media (max-width: 768px) {
    padding: 40px 20px;
    border-radius: 40px 40px 0 0;
  }
`;

const FooterImage = styled.img`
  position: absolute;
  bottom: -50%;
  left: 0;
  object-fit: contain;
  z-index: 0;
  pointer-events: none;
  width: 1016.32px;
  height: 322.681px;
  aspect-ratio: 400/127;
  object-position: left;

  @media (max-width: 800px) {
    width: 120%;
    bottom: -190px;
    object-position: right;
    transform: rotate(-28deg);
    left: 50px;
    aspect-ratio: 400/127;

    /* left: 0; */
    z-index: 0;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  max-width: 1512px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 800px) {
    gap: 30px;
    position: relative;
    z-index: 1;
  }
`;

const RoutesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    display: contents;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 800px) {
    order: 1;
  }
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

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 26px;
    order: 5;
  }
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
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    display: contents;
  }
`;

const PolicyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;

  @media (max-width: 800px) {
    order: 3;
    gap: 10px;
    margin-top: -20px;
  }
`;

const PolicyWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

const PolicyText = styled.div`
  color: #1e1e1e;
  font-family: Alcyone-Bold;
  font-size: 24px;
  font-style: normal;
  line-height: 200%; /* 48px */
  letter-spacing: -0.48px;
  text-transform: capitalize;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;

  @media (max-width: 800px) {
    display: contents;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: end;
  cursor: pointer;

  @media (max-width: 800px) {
    justify-content: flex-start;
    order: 2;
    gap: 8 px;
  }
`;

const ContactText = styled.div`
  color: #1e1e1e;
  font-family: Alcyone-Bold;
  font-size: 24px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;

  @media (max-width: 800px) {
    font-size: 18px;
  }
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

  @media (max-width: 800px) {
    text-align: left;
    max-width: 100%;
    order: 4;
    margin-top: -20px;
  }
`;

const FooterLink = styled.a`
  color: #1e1e1e;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
