"use client";

import React, { useEffect, useState } from "react";
import DesktopNavbar from "./Navbar/DesktopNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";
import { NAV_ITEMS } from "./Navbar/NavItems";
import { getLenis } from "@/lib/lenis";

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

    if (!el) return;

    const lenis = getLenis();

    if (lenis) {
      lenis.scrollTo(el, {
        offset: -100,
        duration: 1.6,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }

    setMobileMenuOpen(false);
  };

  return (
    <>
      <DesktopNavbar
        navItems={NAV_ITEMS}
        scrolled={scrolled}
        handleScrollTo={handleScrollTo}
      />
      <MobileNavbar
        navItems={NAV_ITEMS}
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleScrollTo={handleScrollTo}
      />
    </>
  );
};

export default Navbar;
