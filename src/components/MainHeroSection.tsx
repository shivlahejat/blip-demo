"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "../customcss/HeroSection.module.css";


export default function MainHeroSection({ isMobile }: { isMobile: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const roket = "/images/landing/uploadrocket2.webp";
  const star = "/images/landing/star.webp";
  const right = "/images/landing/light.webp";
  const meta = "/images/landing/metanew.webp";
  const videoRef = useRef<HTMLVideoElement>(null);
  const MobileVideoRef = useRef<HTMLVideoElement>(null);
  const sampleVideo = "/video/Demo.mp4";

  useEffect(() => {
    const timer = setTimeout(() => {
      videoRef.current?.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = MobileVideoRef.current;
    if (!video) return;

    let transitionEnabled = false;

    // Start playback after 3 seconds
    const playTimer = setTimeout(() => {
      video.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }, 2000); // Change to 2000 for 2 seconds

    const handleTimeUpdate = () => {
      const time = video.currentTime;

      if (!transitionEnabled && time > 18) {
        video.style.transition = 'object-position 0.5s ease-in-out';
        transitionEnabled = true;
      }

      if (time < 19) {
        video.style.objectPosition = '5% center';
      } else if (time < 24) {
        video.style.objectPosition = '75% center';
      } else if (time < 28) {
        video.style.objectPosition = '5% center';
      } else {
        video.style.objectPosition = '75% center';
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      clearTimeout(playTimer);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const enableControls = () => {
    if (MobileVideoRef.current) {
      MobileVideoRef.current.setAttribute("controls", "true");
    }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        animate={{ opacity: 1, y: 0 }} // Change from whileInView to animate
        transition={{
          duration: shouldReduceMotion ? 0 : isMobile ? 0.2 : 0.7,
          ease: "easeOut",
          delay: 0.2, // Optional delay for better effect
        }}
        className={styles.textcontainer}
      >
        <div className={styles.heroText}>
          The simplest,{" "}
          <span
            className={styles.inlineIcon}
            style={{ display: "inline-block", overflow: "visible" }}
          >
            <motion.img
              src={roket}
              alt="rocket"
              className={styles.herorocket}
              style={{
                transformOrigin: "center center !important",
                verticalAlign: "top",
              }}
              initial={{
                y: 50,
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1.9,
              }}
              transition={{
                type: "spring",
                stiffness: 700,
                damping: 25,
                delay: 0.5,
              }}
            />
            quickest <span style={{ marginRight: 5 }} />
          </span>
          <br />
          bulk ad uploader
          <span
            className={styles.inlineIcon}
            style={{ display: "inline-block", overflow: "visible" }}
          >
            <motion.img
              src={star}
              alt="sparkles"
              className={styles.sparkle}
              style={{ transformOrigin: "center" }}
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1.3 }}
              transition={{
                type: "spring",
                stiffness: 700,
                damping: 25,
                delay: 0.8,
              }}
            />
          </span>
          for Meta.
        </div>
        <div className={styles.subText}>
          <div className={styles.griditem}>
            <Image
              loading="eager"
              quality={50}
              src={right}
              alt="right"
              width={21}
              height={21}
            />
            <p className={styles.text}> Launch 100s of ads together</p>
          </div>
          <div className={styles.griditem}>
            <Image
              loading="eager"
              quality={50}
              src={right}
              alt="right"
              width={21}
              height={21}
            />
            <p className={styles.text}> Unlimited Team Seats</p>
          </div>
          <div className={styles.griditem}>
            <Image
              loading="eager"
              quality={50}
              src={right}
              alt="right"
              width={21}
              height={21}
            />
            <p className={styles.text}>
              {" "}
              Save your settings and launch an ad in seconds
            </p>
          </div>
        </div>
        <div className={styles.buttoncontainer}>
          <a href="https://app.withblip.com/signup" className={styles.button}>
            Start Free Trial
          </a>
          <a href="https://calendly.com/peter-withblip/30min" className={styles.buttonBlack} target="_blank"
            rel="noopener noreferrer">
            Get a Demo
          </a>
        </div>
        <p className={styles.buttonLabel}>NO CC Required. Free For 7 Days.</p>
        <div className={styles.metacontainer}>
          <Image
            loading="eager"
            quality={50}
            src={meta}
            alt="meta"
            width={20}
            height={20}
            className={styles.metaimage}
          />
          <p className={styles.metaText}>Meta Verified Partner</p>
        </div>
        <div className={styles.imageWrapper1}>
          <video
            ref={videoRef}
            className={`${styles.image} ${styles.aspectVideo}`}
            width={1200}
            height={800}
            controls
            muted
            loop
          >
            <source src={sampleVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.section>
      <motion.section
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.3,
          margin: isMobile ? "0px" : "-100px",
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : isMobile ? 0.2 : 0.7,
          ease: "easeOut",
        }}
        className={styles.textcontainerstart}
      >
        <div className={styles.heroTextStart}>
          The simplest,
          <span className={styles.inlineIconStart}>
            <motion.img
              src={roket}
              alt="rocket"
              className={styles.herorocketStart}
              style={{ transformOrigin: "center" }}
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1.7 }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 25,
                delay: 0.5,
              }}
            />
            <span style={{ marginRight: "5px" }} />
            <br />
            quickest bulk ad
          </span>
          <br />
          <span className={styles.inlineIconStart}>
            uploader
            <motion.img
              src={star}
              alt="sparkles"
              className={styles.sparkleStart}
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1.3 }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 25,
                delay: 0.7,
              }}
            />
            for Meta.
          </span>
        </div>
        <div className={styles.subText}>
          <div className={styles.griditem}>
            <Image
              loading="eager"
              quality={50}
              src={right}
              alt="right"
              width={21}
              height={21}
            />
            <p className={styles.text}> Launch 100s of ads together</p>
          </div>
          <div className={styles.griditem}>
            <Image
              loading="eager"
              quality={50}
              src={right}
              alt="right"
              width={21}
              height={21}
            />
            <p className={styles.text}> Unlimited Team Seats</p>
          </div>
          <div className={styles.griditem}>
            <Image
              loading="eager"
              quality={50}
              src={right}
              alt="right"
              width={21}
              height={21}
            />
            <p className={styles.text}>
              {" "}
              Save settings and launch ads instantly
            </p>
          </div>
          <div className={styles.griditem}>
            <Image
              loading="eager"
              quality={50}
              src={right}
              alt="right"
              width={21}
              height={21}
            />
            <p className={styles.text}>
              {" "}
              Scale Existing Winners With Post ID            </p>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.videoContainer}>
            <video
              className={styles.mobileVideo}
              ref={MobileVideoRef}
              muted
              // autoPlay
              loop
              playsInline
              onClick={enableControls}
              style={{ objectPosition: '5% center' }}  // Force initial position
            >
              <source src="/video/Demo.mp4" type="video/mp4" />
              Your browser does not support the video tag
            </video>
          </div>
        </div>
        <div className={styles.buttonScontainer}>
          <a
            href="https://app.withblip.com/signup"
            className={styles.buttoncontainer}
          >
            <p className={styles.button1Start}>Start Free Trial</p>
          </a>
          <a
            href="https://calendly.com/peter-withblip/30min"
            className={styles.buttoncontainer}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={styles.button2Start}>Get A Demo</p>
          </a>
          <p className={styles.buttonLabelMobile}>
            NO CC Required. Free For 7 Days.
          </p>
          <div className={styles.metacontainerStart}>
            <Image
              loading="eager"
              quality={50}
              src={meta}
              alt="meta"
              width={10}
              height={10}
              className={styles.metaimageStart}
            />
            <p className={styles.metaTextStart}>Meta Verified Partner</p>
          </div>
        </div>


      </motion.section>
    </>
  );
};

