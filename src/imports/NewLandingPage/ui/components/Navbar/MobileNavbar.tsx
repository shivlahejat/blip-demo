"use client";

import { Button } from "@/lib/Button";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { NavItem } from "./NavItems";
import MenuIcon from "../../svgs/MenuIcon";
import CloseIcon from "@/imports/NewLandingPage/ui/svgs/CloseIcon";

interface MobileNavbarProps {
  navItems: NavItem[];
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  handleScrollTo: (id: string) => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  navItems,
  scrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  handleScrollTo,
}) => {
  return (
    <Container
      className={`${scrolled ? "scrolled" : ""} ${mobileMenuOpen ? "open" : ""}`}
    >
      <HeaderRow>
        <LogoContainer onClick={() => handleScrollTo("top")}>
          <LogoImage
            src="/images/landing/logo.webp"
            alt="Logo"
            height={39}
            width={39}
          />
          <LogoText>Blip</LogoText>
        </LogoContainer>

        <MobileNavIcons>
          <Hamburger onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <IconSwap className={mobileMenuOpen ? "open" : ""}>
              <span className="menu-icon">
                <MenuIcon />
              </span>
              <span className="close-icon">
                <CloseIcon />
              </span>
            </IconSwap>
          </Hamburger>
        </MobileNavIcons>
      </HeaderRow>

      <NavLinksContainer className={mobileMenuOpen ? "open" : ""}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLinks key={item.id} onClick={() => handleScrollTo(item.id)}>
              <IconWrapper>{Icon && <Icon />}</IconWrapper>
              {item.label}
            </NavLinks>
          );
        })}
        <MobileCTAContainer>
          <Button
            style={{ width: "100%", padding: "13px 53px 13px 48px" }}
            leftIcon="/images/rocket2.svg"
            leftIconWidth={16}
            leftIconHeight={24}
          >
            Start Free Trial
          </Button>
          <Button
            variant="outlineFilled"
            style={{ width: "100%", padding: "13px 53px 13px 48px" }}
            leftIcon="/images/MeetIcon.svg"
            leftIconWidth={20}
            leftIconHeight={20}
          >
            Get A Demo
          </Button>
        </MobileCTAContainer>
      </NavLinksContainer>
    </Container>
  );
};

export default MobileNavbar;

const Container = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: auto;
    min-height: 68.7px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background: #fff9f4;
    border: 1px solid rgba(0, 0, 0, 0.1);
    z-index: 1000;
    overflow: hidden;
    padding: 0;
    border: 1px solid #000;

    transition:
      box-shadow 0.55s cubic-bezier(0.4, 0, 0.2, 1),
      max-height 0.65s cubic-bezier(0.4, 0, 0.2, 1);

    &.scrolled {
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 68.7px;
  padding: 0 19px;
  flex-shrink: 0;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 13.04px;
  cursor: pointer;
`;

const LogoImage = styled(Image)`
  width: 30px;
  height: 30px;
  aspect-ratio: 1/1;
  border-radius: 8px;
`;

const LogoText = styled.div`
  color: #330c00;
  font-family: Alcyone-Bold;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-transform: capitalize;
`;

const MobileNavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Hamburger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  gap: 25px;
  align-items: flex-start;

  max-height: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition:
    max-height 0.65s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.08s,
    padding 0.65s cubic-bezier(0.4, 0, 0.2, 1),
    visibility 0.65s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.08s;

  &.open {
    max-height: 1000px;
    opacity: 1;
    visibility: visible;
    padding: 25px 20px;
    transform: translateY(0);
  }
`;

const NavLinks = styled.div`
  color: #000;
  font-family: Alcyone;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: 0;
  transform: translateX(-8px);

  /* Exit (close) transition — no delay so items fade out with the panel */
  transition:
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Staggered enter (open) transitions */
  ${NavLinksContainer}.open & {
    opacity: 1;
    transform: translateX(0);
  }
  ${NavLinksContainer}.open &:nth-child(1) {
    transition:
      opacity 0.45s ease 0.18s,
      transform 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.18s;
  }
  ${NavLinksContainer}.open &:nth-child(2) {
    transition:
      opacity 0.45s ease 0.24s,
      transform 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.24s;
  }
  ${NavLinksContainer}.open &:nth-child(3) {
    transition:
      opacity 0.45s ease 0.3s,
      transform 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
  }
  ${NavLinksContainer}.open &:nth-child(4) {
    transition:
      opacity 0.45s ease 0.36s,
      transform 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.36s;
  }
  ${NavLinksContainer}.open &:nth-child(5) {
    transition:
      opacity 0.45s ease 0.42s,
      transform 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.42s;
  }
  ${NavLinksContainer}.open &:nth-child(n+6) {
    transition:
      opacity 0.45s ease 0.48s,
      transform 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.48s;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 26px;
  flex-shrink: 0;
`;

const MobileCTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  margin-top: 15px;
  opacity: 0;
  transform: translateY(6px);

  /* Exit (close) transition — smooth fade out with the panel */
  transition:
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Enter (open) transition — slides up with a delay */
  ${NavLinksContainer}.open & {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 0.45s ease 0.52s,
      transform 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.52s;
  }
`;

const IconSwap = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .menu-icon {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
  .close-icon {
    opacity: 0;
    transform: rotate(-90deg) scale(0.7);
  }

  &.open .menu-icon {
    opacity: 0;
    transform: rotate(90deg) scale(0.7);
  }
  &.open .close-icon {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
`;
