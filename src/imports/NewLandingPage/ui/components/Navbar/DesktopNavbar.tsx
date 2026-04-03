"use client";

import { Button } from "@/lib/Button";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { NavItem } from "./NavItems";

interface DesktopNavbarProps {
  navItems: NavItem[];
  scrolled: boolean;
  handleScrollTo: (id: string) => void;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  navItems,
  scrolled,
  handleScrollTo,
}) => {
  return (
    <Container className={scrolled ? "scrolled" : ""}>
      <NavLinksContainer>
        {navItems.map((item) => {
          return (
            <NavLinks key={item.id} onClick={() => handleScrollTo(item.id)}>
              {item.label}
            </NavLinks>
          );
        })}
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
    </Container>
  );
};

export default DesktopNavbar;

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 942.5px;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;

  @media (max-width: 1024px) {
    gap: 20px;
  }
`;

const NavLinks = styled.div`
  color: #000;
  font-family: Alcyone-semibold;
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
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const LogoImage = styled(Image)`
  width: 39.074px;
  height: 39.074px;
  aspect-ratio: 1/1;
  border-radius: 8px;
`;

const LogoText = styled.div`
  color: #330c00;
  font-family: Alcyone-Bold;
  font-size: 24px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-transform: capitalize;
`;

const DesktopCTAContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;
