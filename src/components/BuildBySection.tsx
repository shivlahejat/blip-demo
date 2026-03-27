"use client";

import { features } from "@/constants/data";
import { motion, useReducedMotion } from "framer-motion";
import styles from "../customcss/BuiltByBestSection.module.css";
import Image from "next/image";



export default function BuildBySection({ isMobile }: { isMobile: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const iconOrange = "/images/landing/iconOrange.svg";

  return (
    <section
      className={styles.wrapperIcon}

    >
      <button className={styles.badgeTitle}>Built by the best</button>
      <h2 className={`${styles.title} ${styles.titleupdate}`}>
        Blip was built by Meta Agency Partners who have spent over $100M on ads
      </h2>
      <div className={`${styles.subtitle} ${styles.nosubtitle}`}>
        The team has more than a decade of experience in performance marketing.
        The experience has been tailored to the absolute essentials which will
        improve your quality of life.
      </div>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            {feature.title === "Post ID Scaling" ? (
              <div
                className={`${styles.iconBox} ${styles.activeToggle} ${feature.iconClass}`}
              >
                <Image
                  src={iconOrange}
                  alt="toggle"
                  loading="eager"
                  quality={50}
                  width={18}
                  height={18}
                />
              </div>
            ) : (
              <div className={`${styles.iconBox} ${feature.iconClass}`}>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  loading="eager"
                  quality={50}
                  width={18}
                  height={18}
                />
              </div>
            )}
            <p className={styles.featureText}>{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

