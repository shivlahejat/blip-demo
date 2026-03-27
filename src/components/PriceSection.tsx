"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "../customcss/PricingSection.module.css";


export default function PriceSection({ isMobile }: { isMobile: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  const brand = "/images/landing/shop.webp";
  const bulb = "/images/landing/bulb.webp";
  const check = "/images/landing/check-circle.svg";
  const agency = "/images/landing/agency.webp";

  return (
    <>
      <div className={styles.pricingHeader} id="pricing">
        <h2 className={styles.pricingTitle}>
          Money cant buy you happiness.<br></br> But it can save you from Ads
          Manager.<br></br> Which is like the same thing.
        </h2>
      </div>
      <section

        className={styles.wrapperStart}
      >
        <div className={styles.container4Start}>
          <div className={styles.startcontent3}>
            <p className={styles.price1Start}>Starter</p>

            <p className={styles.priceStart}>$49/month</p>
            <Image
              loading="eager"
              quality={50}
              src={brand}
              alt="description"
              width={125}
              height={125}
              style={{
                marginTop: "24px",
                marginBottom: "26px",
                filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2))",
              }}
            />
            <ul className={styles.featureStart}>
              <li className={styles.feature}>
                <span className={styles.icon}>
                  <Image
                    loading="eager"
                    quality={50}
                    src={check}
                    alt="check"
                    width={14}
                    height={14}
                  />
                </span>
                1 Ad Account
              </li>
              <li className={styles.feature}>
                <span className={styles.icon}>
                  <Image
                    loading="eager"
                    quality={50}
                    src={check}
                    alt="check"
                    width={14}
                    height={14}
                  />
                </span>
                Unlimited Ad Launches, spend & team seats
              </li>
              <li className={styles.feature}>
                <span className={styles.icon}>
                  <Image
                    loading="eager"
                    quality={50}
                    src={check}
                    alt="check"
                    width={14}
                    height={14}
                  />
                </span>
                Bulk publish ads using existing Post IDs, or normal duplication
              </li>
              <li className={styles.feature}>
                <span className={styles.icon}>
                  <Image
                    src={check}
                    alt="check"
                    width={14}
                    height={14}
                    loading="eager"
                    quality={50}

                  />
                </span>
                Supports Standard ads, Carousels, Flex, Partnership ads, and more
              </li>
              <li className={styles.feature}>
                <span className={styles.icon}>
                  <Image
                    src={check}
                    alt="check"
                    width={14}
                    height={14}
                    loading="eager"
                    quality={50}
                  />
                </span>
                Google Drive and Dropbox Integration
              </li>
            </ul>
            <a
              href="https://app.withblip.com/signup"
              className={styles.ctaBtnStart}
              style={{ color: "#7B68EE" }}
            >
              Start Your 7 Day Free Trial
            </a>
            <p className={styles.descriptionStart}>
              No CC required.
            </p>
          </div>
        </div>

        <div className={styles.container3Start}>
          <div className={styles.startcontent3}>
            <p className={styles.price1Start}>Light</p>

            <p className={styles.priceStart}>$199/month</p>
            <Image
              loading="eager"
              quality={50}
              src={bulb}
              alt="description"
              width={125}
              height={125}
              style={{
                marginTop: "24px",
                marginBottom: "26px",
                filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2))",
              }}
            />
            <ul className={styles.featureStart}>
              <li className={styles.feature}>
                <span className={styles.icon}>
                  <Image
                    loading="eager"
                    quality={50}
                    src={check}
                    alt="check"
                    width={14}
                    height={14}
                  />
                </span>
                5 Ad Accounts
              </li>

              <li className={styles.feature}>
                <span className={styles.icon}>
                  <Image
                    loading="eager"
                    quality={50}
                    src={check}
                    alt="check"
                    width={14}
                    height={14}
                  />
                </span>
                Unlimited Ad Launches, spend & team seats
              </li>

              <li className={styles.feature}>
                <span className={styles.icon}>
                  <Image
                    loading="eager"
                    quality={50}
                    src={check}
                    alt="check"
                    width={14}
                    height={14}
                  />
                </span>
                Bulk publish ads using existing Post IDs, or normal duplication
              </li>
              <li className={styles.feature}>
                <span className={styles.icon}>
                  <Image
                    loading="eager"
                    quality={50}
                    src={check}
                    alt="check"
                    width={14}
                    height={14}
                  />
                </span>
                Supports Standard ads, Carousels, Flex, Partnership ads, and more
              </li>
              <li className={styles.feature}>
                <span className={styles.icon}>
                  <Image
                    src={check}
                    alt="check"
                    width={14}
                    height={14}
                    loading="eager"
                    quality={50}
                  />
                </span>
                Google Drive and Dropbox Integration
              </li>
            </ul>

            <a
              href="https://app.withblip.com/signup"
              className={styles.ctaBtnStart}
              style={{ color: "#EB8339" }}
            >
              Start your 7 Day Free Trial
            </a>
            <p className={styles.descriptionStart}>
              No CC required
            </p>
          </div>
        </div>

        <div className={styles.container2Start}>
          <div className={styles.startcontent3}>
            <div className={styles.price1Start}>Pro</div>

            <div className={styles.priceStart}>$370/month</div>
            <Image
              loading="eager"
              quality={50}
              src={agency}
              alt="description"
              width={125}
              height={125}
              style={{
                marginTop: "24px",
                marginBottom: "26px",
                filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2))",
              }}
            />
            <ul className={styles.featureStart1}>
              <li className={styles.feature}>
                <span className={styles.icon}>
                  <Image
                    loading="eager"
                    quality={50}
                    src={check}
                    alt="check"
                    width={14}
                    height={14}
                  />
                </span>
                Unlimited Ad Accounts
              </li>
              <li className={styles.feature}>
                <span className={styles.icon}>
                  <Image
                    loading="eager"
                    quality={50}
                    src={check}
                    alt="check"
                    width={14}
                    height={14}
                  />
                </span>
                Unlimited Ad Launches, spend & team seats
              </li>

              <li className={styles.feature}>
                <span className={styles.icon}>
                  <Image
                    loading="eager"
                    quality={50}
                    src={check}
                    alt="check"
                    width={14}
                    height={14}
                  />
                </span>
                Bulk publish ads using existing Post IDs, or normal duplication
              </li>
              <li className={styles.feature}>
                <span className={styles.icon}>
                  <Image
                    src={check}
                    alt="check"
                    width={14}
                    height={14}
                    loading="eager"
                    quality={50}
                  />
                </span>
                Supports Standard ads, Carousels, Flex, Partnership ads, and more
              </li>
              <li className={styles.feature}>
                <span className={styles.icon}>
                  <Image
                    src={check}
                    alt="check"
                    width={14}
                    height={14}
                    loading="eager"
                    quality={50}
                  />
                </span>
                Google Drive and Dropbox Integration
              </li>

            </ul>

            <a
              href="https://app.withblip.com/signup"
              className={styles.ctaBtnStart}
            >
              Start your 7 Day Free Trial
            </a>
            <p className={styles.descriptionStart}>
              No CC required
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
