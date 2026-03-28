"use client";

import { Button } from "@/lib/Button";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <NavLinksContainer>
        <NavLinks>About</NavLinks>
        <NavLinks>Pricing</NavLinks>
        <NavLinks>Blog</NavLinks>
        <NavLinks>Analytics</NavLinks>
      </NavLinksContainer>
      <LogoContainer>
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
        <Button variant="outline">Login</Button>
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
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0px 1px 10px 0px #0000001a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: #fff;
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
  margin-left: 23.23px;
`;

const NavLinks = styled.div`
  color: #000;
  font-family: NexaRound;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.28px;
  text-transform: capitalize;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 13.04px;
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
