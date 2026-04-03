"use client";

import { Button } from "@/lib/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 100;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <Container className={scrolled ? "scrolled" : ""}>
      <LogoContainer onClick={() => handleScrollTo("top")}>
        <LogoImage
          src="/images/landing/logo.webp"
          alt="Logo"
          height={39.074}
          width={39.074}
        />
        <LogoText>Blip</LogoText>
      </LogoContainer>

      <NavLinksContainer className={mobileMenuOpen ? "open" : ""}>
        <NavLinks onClick={() => handleScrollTo("features")}>Features</NavLinks>
        <NavLinks onClick={() => handleScrollTo("pricing")}>Pricing</NavLinks>
        <NavLinks onClick={() => handleScrollTo("blog")}>Blog</NavLinks>
        <NavLinks onClick={() => handleScrollTo("analytics")}>
          Analytics
        </NavLinks>
        <MobileCTAContainer>
          <Button style={{ width: "100%" }}>Start Free Trial</Button>
          <Button variant="secondary" style={{ width: "100%" }}>
            Login
          </Button>
        </MobileCTAContainer>
      </NavLinksContainer>

      <DesktopCTAContainer>
        <Button
          style={{ padding: "9px 20px" }}
          leftIcon="/images/rocket2.svg"
          leftIconWidth={16}
          leftIconHeight={24}
        >
          Start Free Trial
        </Button>
        <Button variant="secondary">Login</Button>
      </DesktopCTAContainer>

      <MobileNavIcons>
        <Button
          style={{ padding: "8px 15px", fontSize: "12px" }}
          leftIcon="/images/rocket2.svg"
          leftIconWidth={12}
          leftIconHeight={18}
        >
          Start Free Trial
        </Button>
        <Hamburger onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
      </MobileNavIcons>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 942.5px;
  height: 68.7px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: #fff;
  padding: 0 19px;

  transition:
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  border: 1px solid transparent;

  &.scrolled {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    border: 1px solid #000;
  }

  @media (max-width: 1024px) {
    width: 90%;
    top: 5px;
  }

  @media (max-width: 768px) {
    width: 95%;
    height: 60px;
    border-radius: 30px;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    display: none;
    &.open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      background: white;
      padding: 20px;
      border-radius: 20px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      border: 1px solid #eee;
      gap: 15px;
    }
  }
`;

const NavLinks = styled.div`
  color: #000;
  font-family: Alcyone;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.28px;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 13.04px;
  cursor: pointer;
`;

const LogoImage = styled(Image)`
  width: 39.074px;
  height: 39.074px;
  aspect-ratio: 1/1;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const LogoText = styled.div`
  color: #330c00;
  font-family: NexaRound;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.48px;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const DesktopCTAContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavIcons = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 25px;
    height: 2px;
    background-color: #333;
    border-radius: 2px;
  }
`;

const MobileCTAContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin-top: 10px;
  }
`;
