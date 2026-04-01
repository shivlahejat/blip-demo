"use client";

import { Button } from "@/lib/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
  };
  return (
    <Container className={scrolled ? "scrolled" : ""}>
      <NavLinksContainer>
        <NavLinks onClick={() => handleScrollTo("features")}>Features</NavLinks>
        <NavLinks onClick={() => handleScrollTo("pricing")}>Pricing</NavLinks>
        <NavLinks onClick={() => handleScrollTo("blog")}>Blog</NavLinks>
        <NavLinks onClick={() => handleScrollTo("analytics")}>
          Analytics
        </NavLinks>
      </NavLinksContainer>
      <LogoContainer onClick={() => handleScrollTo("top")}>
        <LogoImage
          src="/images/landing/logo.webp"
          alt="Logo"
          height={39.074}
          width={39.074}
        />
        <LogoText>Blip</LogoText>
      </LogoContainer>
      <CTAContainer>
        <Button>Start Free Trial</Button>
        <Button variant="secondary">Login</Button>
      </CTAContainer>
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
  padding: 36px 19px;

  transition:
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  border: 1px solid transparent;

  &.scrolled {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    border: 1px solid #000;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
  margin-left: 23.23px;
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
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin-right: 14px;
`;
