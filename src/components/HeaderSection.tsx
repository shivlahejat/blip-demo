"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../customcss/Header.module.css";
import Link from "next/link";


type NavigationRoute = {
  label: string;
  href: string;
  sectionId: string | null;
  isLink?: boolean;
};

const NAVIGATION_ROUTES: NavigationRoute[] = [
  { label: "about", href: "#about", sectionId: "realfeatures" },
  { label: "features", href: "#realfeatures", sectionId: "about" },
  { label: "reviews", href: "#testimonials", sectionId: "testimonials" },
  { label: "pricing", href: "#pricing", sectionId: "pricing" },
  // { label: "blog", href: "/blog", sectionId: null, isLink: true },
];


export default function HeaderSection({ isScrolled }: any) {
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as Element;
      if (
        menuOpen &&
        target &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const scrollToSection = useCallback(
    (e: React.MouseEvent, sectionId: string) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
      }
    },
    []
  );
  return (
    <div>
      <Link href="/" className={styles.logoWrapper}>
        <Image
          loading="eager"
          quality={50}
          src="/images/landing/logo.webp"
          alt="Logo"
          width={48}
          height={48}
          className={styles.blipLogo}
          priority
        />
        <span className={styles.brandText}>Blip</span>
      </Link>
      <header className={styles.header}>
        <div className={styles.brand}>
          <Image
            loading="eager"
            quality={50}
            src="/images/landing/logo.webp"
            alt="Logo"
            width={32}
            height={32}
            className={styles.blipLogo}
            priority
          />
          <span className={styles.brandText}>Blip</span>
        </div>
        <button
          className={styles.menuBtn}
          ref={menuBtnRef}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <div className={styles.menuBtnText}>Menu</div>
        </button>

        <div
          ref={mobileMenuRef}
          className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
        >
          {NAVIGATION_ROUTES.map((route) =>
            route.isLink ? (
              <Link key={route.label} href={route.href}>
                {route.label}
              </Link>
            ) : (
              <a
                key={route.label}
                href={route.href}
                onClick={(e) => scrollToSection(e, route.sectionId!)}
              >
                {route.label}
              </a>
            )
          )}

          <a href="https://app.withblip.com/signup" className={styles.startBtn}>
            Start Free Trial
          </a>
        </div>
        <nav
          className={`${styles.navLinks} ${isScrolled ? styles.scrolled : ""}`}
        >
          {NAVIGATION_ROUTES.map((route) =>
            route.isLink ? (
              <Link key={route.label} href={route.href}>
                {route.label}
              </Link>
            ) : (
              <a
                key={route.label}
                href={route.href}
                onClick={(e) => scrollToSection(e, route.sectionId!)}
              >
                {route.label}
              </a>
            )
          )}

          <a href="https://app.withblip.com" className={styles.startBtn}>
            Log In
          </a>
          <a
            href="https://app.withblip.com/signup"
            className={styles.FreeTrial}
          >
            Start Free Trial
          </a>
        </nav>
      </header>
    </div>
  );
};
