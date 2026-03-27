"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "../customcss/VideoDemoSection.module.css";
import Image from "next/image";



export default function AdsSection({ isMobile }: { isMobile: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const light = "/images/landing/light.webp";

  return (
    <section
      className={styles.videoSectionContainer}
    >
      <div className={styles.videoSectionHeader}>
        <Image
          src={light}
          alt="Lightning"
          className={styles.videoSectionIcon}
          loading="eager"
          quality={50}
          width={18}
          height={18}
        />
        <h2 className={styles.videoSectionHeading}>
          Ad Account Set up faster than Facebook changes its algorithm
        </h2>
        <p className={styles.videoSectionPara}>
          Watch a quick demo of how easy it is to configure all your existing
          preferences from ads manager to Blip!
        </p>
      </div>
      <div className={styles.videoWrapper}>
        <video
          className={`${styles.autoplayVideo} ${styles.desktopVideo}`}
          muted
          loop
          playsInline
          controls
          autoPlay
        >
          <source src="/video/setup-demo.mp4" type="video/mp4" />
        </video>

        <video
          className={`${styles.autoplayVideo} ${styles.mobileVideo}`}
          muted
          loop
          playsInline
          controls
          autoPlay
        >
          <source src="/video/setup-demo-mobile.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

