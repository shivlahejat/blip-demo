"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "../customcss/TestimonialsSection.module.css";


export default function TestimonialSection({ isMobile }: { isMobile: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const Sam = "/images/landing/Sam.jpeg";
  const onward = "/images/landing/onward.png";
  const Henry = "/images/landing/Henry.jpg";
  const MK = "/images/landing/mk.webp";
  const MR = "/images/landing/mr.webp";
  const rose = "/images/landing/rose.svg";
  const swap = "/images/landing/Frame.svg";
  const settings = "/images/landing/setting.svg";
  const rocket = "/images/landing/rocket.svg";
  return (
    <section

      className={`${styles.content} ${styles.nopadding}`}
    >
      <section className={styles.testimonialSection} id="testimonials">
        <button className={styles.testimonialSubHeading}>
          Supporting 500+ Ad Launches Daily
        </button>
        <p className={styles.testimonialHeading}>
          People are calling it the best invention since sliced bread
        </p>
        <div className={styles.testimonialsGrid}>
          {/* Testimonial 1 */}
          <div className={`${styles.testimonialContainer} ${styles.color1}`}>
            <blockquote className={styles.testimonialQuote}>
              &quot;Jesus, It&apos;s super fast. It&apos;s everything I wanted
              to replace my ads manager workflow&quot;
            </blockquote>

            <div className={styles.testimonialProfile}>
              <Image
                src={Sam}
                alt="Samuel Appentsen"
                className={styles.profileImage}
                width={500}
                height={500}
                priority={true}
              />
              <span className={styles.profileName}>Samuel Appentsen</span>
            </div>
            <div className={styles.companyTitle}>Co Founder, Onward Agency</div>
            <Image
              src={onward}
              alt="Onward Agency"
              className={styles.companyLogo}
              width={500}
              height={500}
              priority={true}
            />
          </div>

          {/* Testimonial 2 */}
          <div className={`${styles.testimonialContainer} ${styles.color2}`}>
            <blockquote className={styles.testimonialQuote}>
              &quot;I used to dread having to get into Ads Manager to upload
              ads. Now with Blip, it takes just two clicks and anyone on the
              team can do it themselves.&quot;
            </blockquote>

            <div className={styles.testimonialProfile}>
              <Image
                src={Henry}
                alt="Person Name"
                className={styles.profileImage}
                width={500}
                height={500}
                priority={true}
              />
              <span className={styles.profileName}>Henry Boldizsar</span>
            </div>

            <div className={styles.companyTitle}>Mobile App Founder</div>
          </div>

          <div className={`${styles.testimonialContainer} ${styles.color3}`}>
            <blockquote className={styles.testimonialQuote}>
              &quot;We manage hundreds of creatives each week across multiple
              8/9 figure brands, and Blip has cut our launch time by 90% with
              zero friction and flawless accuracy. Fast, reliable,
              essential.&quot;
            </blockquote>

            <div className={styles.testimonialProfile}>
              <Image
                src={MK}
                alt="Person Name"
                className={styles.profileImage}
                width={500}
                height={500}
                priority={true}
              />
              <span className={styles.profileName}>MK</span>
            </div>

            <div className={styles.companyTitle}>Founder, JDGMNT Digital</div>
          </div>

          <div className={`${styles.testimonialContainer} ${styles.color4}`}>
            <blockquote className={styles.testimonialQuote}>
              I love Blip! Before I would spend way too much time launching ads in platform which was always an incredibly frustrating experience. Ads manager was slow to load, had a million pop-ups, and I had to constantly turn different settings off.

              Blip makes it super easy and intuitive to upload ads - including partnership and flex.

              I regained a ton of wasted time, and it actually makes me look forward to launching new ads.
            </blockquote>

            <div className={styles.testimonialProfile}>
              <Image
                src={MR}
                alt="Person Name"
                className={styles.profileImage}
                width={500}
                height={500}
                priority={true}
              />
              <span className={styles.profileName}>Michael Rizzo</span>
            </div>

            <div className={styles.companyTitle}>Senior Media Buyer</div>
          </div>
        </div>
      </section>

      <h2 className={styles.head} id="about">
        <Image
          loading="eager"
          quality={50}
          src={rose}
          width={24}
          height={24}
          alt="rose"
        />
        Escape from Button Clicking Hell
      </h2>
      <div className={styles.groupText}>
        <h3 className={styles.title1}>
          The fastest way to manage multiple ad accounts
        </h3>
        <p className={styles.subtitle1}>
          End context-switching whiplash. No more selecting the same settings
          over and over, copy-pasting text dozens of times, or sluggish UI.
        </p>
      </div>
      <div className={styles.buttonGroup}>
        <div className={styles.shadowButton}>
          <div className={styles.shadowWrapper}>
            <Image
              loading="eager"
              quality={50}
              src={swap}
              alt="swap"
              width={30}
              height={30}
              className={styles.myImg}
            />
            <p>Easily Swap Ad Accounts</p>
          </div>
        </div>
        <div className={styles.shadowButton}>
          <div className={styles.shadowWrapper}>
            <Image
              loading="eager"
              quality={50}
              src={settings}
              alt="settings"
              width={30}
              height={30}
              className={styles.myImg}
            />
            <p>Auto-Populate Settings</p>
          </div>
        </div>
        <div className={styles.shadowButton}>
          <div className={styles.shadowWrapper}>
            <Image
              loading="eager"
              quality={50}
              src={rocket}
              alt="rocket"
              width={30}
              height={30}
              className={styles.rocketIcon}
            />
            <p>Fast launch all creatives</p>
          </div>
        </div>
      </div>
    </section>
  );
};

