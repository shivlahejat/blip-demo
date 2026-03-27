"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "../customcss/AdTypesSection.module.css";


export default function WideVarietySection ({ isMobile }: { isMobile: boolean }){
  const shouldReduceMotion = useReducedMotion();
  const auto = "/images/landing/auto.svg";
  const autoImg = "/images/landing/dynamicauto1.webp";
  const cardmobile3 = "/images/landing/mobilecard3.webp";
  const carousel = "/images/landing/carousel.svg";
  const carouselImg = "/images/landing/carousel-img.webp";
  const cardmobile1 = "/images/landing/mobilecard1.webp";
  const shop = "/images/landing/shop.svg";
  const shopImg = "/images/landing/shop-img.webp";
  const cardmobile2 = "/images/landing/mobileCard2.webp";
  const dynamic = "/images/landing/dynamic.svg";
  const dynamicImg = "/images/landing/dynamic-img.webp";
  const cardmobile4 = "/images/landing/mobilecard4.webp";

  return (
    <div className={styles.cardsContainer}>
      <section
        // initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{
        //   once: true,
        //   amount: 0.3,
        //   margin: isMobile ? "0px" : "-100px",
        // }}
        // transition={{
        //   duration: shouldReduceMotion ? 0 : isMobile ? 0.2 : 0.7,
        //   ease: "easeOut",
        // }}
        className={styles.cardHeader}
      >
        {/* <div className={styles.cardHeader}> */}
        <h3 className={styles.cardHeading} id="realfeatures">
          Wide Variety of Ad Types Supported
        </h3>
        <p className={styles.cardPara}>
          Through a combination of auto detection and user selection we help you
          make the right type of ad based on campaign and ad set selected.
        </p>
        {/* </div> */}
      </section>

      <div className={styles.Cards}>
        <div className={styles.cardCarouselAuto1}>
          <div className={styles.cardsTitle}>
            <div className={styles.cardsHeader}>
              <Image
                loading="eager"
                quality={50}
                alt="auto"
                src={auto}
                width={18}
                height={18}
                className={styles.headSVG}
              />
              <p className={styles.cardsHeading}>Auto Grouped</p>
            </div>
            <p className={styles.cardsPara1}>
              Upload media of different aspect ratios to group together for one
              ad
            </p>
          </div>

          <div>
            <Image
              src={autoImg}
              className={styles.images}
              loading="eager"
              alt="auto"
              width={18}
              height={18}
              unoptimized
              style={{ height: "100%", width: "100%" }}
            />
            <Image
              src={cardmobile3}
              className={styles.mobileimages}
              loading="eager"
              alt="auto"
              width={18}
              height={18}
              unoptimized
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>

        <div className={styles.cardCarouselAuto}>
          <div className={styles.cardsTitle}>
            <div className={styles.cardsHeader}>
              <Image
                loading="eager"
                quality={50}
                alt="carosual"
                src={carousel}
                width={18}
                height={18}
                className={styles.headSVG}
              />
              <p className={styles.cardsHeading}>Carousel</p>
            </div>
            <p className={styles.cardsPara}>
              Easily rearrange cards, give unique text for each card or apply
              the same to all
            </p>
          </div>
          <div>
            <Image
              src={carouselImg}
              className={styles.images}
              loading="eager"
              alt="auto"
              width={18}
              height={18}
              unoptimized
              style={{ height: "100%", width: "100%" }}
            />
            <Image
              src={cardmobile1}
              className={styles.mobileimages}
              loading="eager"
              alt="auto"
              width={18}
              height={18}
              unoptimized
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>

        <div className={styles.cardShopDynamic}>
          <div className={styles.cardsTitle}>
            <div className={styles.cardsHeader}>
              <Image
                loading="eager"
                quality={50}
                alt="shop"
                src={shop}
                width={18}
                height={18}
                className={styles.headSVG}
              />
              <p className={styles.cardsHeading}>Shop Destination</p>
            </div>
            <p className={styles.cardsPara}>
              Auto detects when shop destination is needed and lets you select
            </p>
          </div>
          <div>
            <Image
              src={shopImg}
              className={styles.images}
              loading="eager"
              alt="auto"
              width={18}
              height={18}
              unoptimized
              style={{ height: "100%", width: "100%" }}
            />
            <Image
              src={cardmobile2}
              className={styles.mobileimages}
              loading="eager"
              alt="auto"
              width={18}
              height={18}
              unoptimized
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>

        <div className={styles.cardShopDynamic1}>
          <div className={styles.cardsTitle}>
            <div className={styles.cardsHeader}>
              <Image
                loading="eager"
                quality={50}
                alt="dynamic"
                src={dynamic}
                width={18}
                height={18}
                className={styles.headSVG}
              />
              <p className={styles.cardsHeading}>Flexible</p>
            </div>
            <p className={styles.cardsPara}>
              Provide multiple media and text options to test for the adset
            </p>
          </div>
          <div>
            <Image
              src={dynamicImg}
              className={styles.images}
              loading="eager"
              alt="auto"
              width={18}
              height={18}
              unoptimized
              style={{ height: "100%", width: "100%" }}
            />
            <Image
              src={cardmobile4}
              className={styles.mobileimages}
              loading="eager"
              alt="auto"
              width={18}
              height={18}
              unoptimized
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

