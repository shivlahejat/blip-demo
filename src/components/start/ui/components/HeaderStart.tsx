"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "/src/app/Landing.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const HeaderStart = () => {
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const landingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollHandler = () => {
      if (landingRef.current) {
        setIsScrolled(landingRef.current.scrollTop > 10);
      }
    };

    landingRef.current?.addEventListener("scroll", scrollHandler);
    return () =>
      landingRef.current?.removeEventListener("scroll", scrollHandler);
  }, []);


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

  const searchParams = useSearchParams();

  useEffect(() => {
    const component = searchParams.get("component");
    if (component) {
      const section = document.getElementById(component);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [searchParams]);
  return (
    <div>
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
            <Link href="/">
              about
            </Link>
            <Link href="/">
              features
            </Link>
            <Link href="/blog">
            blogs
          </Link>
          <Link
           href="/"
          >
            reviews
          </Link>
            <Link href="/">
              pricing
            </Link>

            <a href="https://app.withblip.com" className={styles.startBtn}>
              Start Free Trial
            </a>
          </div>
          <nav
            className={`${styles.navLinks} ${
              isScrolled ? styles.scrolled : ""
            }`}
          >
            <Link href="/">
              about
            </Link>
            <Link href="/">
              features
            </Link>
            <Link href="/blog">
            blogs
          </Link>
           <Link
           href="/"
          >
            reviews
          </Link>
            <Link href="/">
              pricing
            </Link>
            {/* <button className={styles.startBtn}>Start Now</button> */}
            <a href="https://app.withblip.com" className={styles.startBtn}>
              Log In
            </a>

            <a href="https://app.withblip.com" className={styles.FreeTrial}>
              Start Free Trial
            </a>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default HeaderStart;
