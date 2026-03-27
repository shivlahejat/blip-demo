"use client";
import { faqs } from "@/constants/data";
import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import styles from "../customcss/FAQSection.module.css";
import Image from "next/image";


export default function MyFaqSection ({ isMobile }: { isMobile: boolean }){
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const plusicon = "/images/landing/plus.svg";

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.3,
        margin: isMobile ? "0px" : "100px",
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : isMobile ? 0.2 : 0.7,
        ease: "easeOut",
      }}
      className={styles.faqcontainer}
    >
      <h4 className={styles.headfaq}>Frequently Asked Questions</h4>
      <div className={styles.faqBox}>
        {faqs.map((item, index) => (
          <div key={index} className={styles.faqline}>
            <div
              className={`${styles.qacontainer} ${
                openIndex === index && index !== 0 ? styles.activefaq : ""
              }`}
            >
              <div
                className={`${styles.quediv} ${
                  openIndex !== index ? styles.closefaq : ""
                } ${
                  openIndex !== index && index !== 0 ? styles.closeques : ""
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div
                  className={`${styles.question} ${
                    index === 0 && openIndex === index ? styles.firstque : ""
                  }`}
                >
                  Q. {item.question}
                </div>
                <Image
                  src={plusicon}
                  alt="toggle"
                  width={125}
                  height={125}
                  loading="eager"
                  quality={50}
                  className={`${styles.plussvg} ${
                    openIndex === index ? styles.rotate : ""
                  }`}
                />
              </div>
              <div
                ref={(el) => {
                  refs.current[index] = el;
                }}
                className={`${styles.ansdiv} ${
                  openIndex === index && index === 0 ? styles.open : ""
                }`}
                style={{
                  maxHeight:
                    openIndex === index
                      ? refs.current[index]?.scrollHeight + "px"
                      : "0",
                }}
              >
                {item.answer}
              </div>
            </div>
            <div className={`${styles.line} `} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

