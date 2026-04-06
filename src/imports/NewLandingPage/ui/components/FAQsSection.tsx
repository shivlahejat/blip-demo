"use client";

import PlusIcon from "@/imports/NewLandingPage/ui/svgs/PlusIcon";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

export const FAQ_DATA = [
  {
    id: 1,
    question: "Which ad formats and creative types does Blip support?",
    answer:
      "Blip supports a wide range of ad formats including image, video, carousel, and dynamic creatives. It is designed to work seamlessly with major ad platforms and their supported formats.",
  },
  {
    id: 2,
    question: "Does Blip save my unique preferences across each ad account?",
    answer:
      "Yes, Blip saves your preferences for each ad account, allowing you to maintain consistency while also customizing settings per account.",
  },
  {
    id: 3,
    question: "Does Blip support placement customization?",
    answer:
      "Yes, Blip allows you to customize ad placements based on your campaign needs, including automatic and manual placement options.",
  },
  {
    id: 4,
    question: "Can I set up my own naming conventions in Blip?",
    answer:
      "Yes, Blip lets you define and apply custom naming conventions to keep your campaigns organized and consistent.",
  },
  {
    id: 5,
    question: "Is there any ad account suspension risk to using Blip?",
    answer:
      "No, Blip operates within platform guidelines and does not increase the risk of ad account suspension when used properly.",
  },
];

const FAQsSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Container>
      <HeaderContainer>
        <Title>
          Who wants to be a millionaire?
          <br /> I mean... Frequently Asked Questions
        </Title>
        <Underline
          src={"/images/faq_underline.png"}
          alt=""
          width={374.56}
          height={45.544}
        />
      </HeaderContainer>
      <AccordianContainer>
        {FAQ_DATA.map((item) => {
          const isOpen = openId === item.id;
          return (
            <AccordianItem key={item.id}>
              <FAQQuestionContainer
                onClick={() => toggleOpen(item.id)}
                aria-expanded={isOpen}
              >
                <FAQQuestion>{item.question}</FAQQuestion>
                <IconWrapper
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <PlusIcon />
                </IconWrapper>
              </FAQQuestionContainer>
              <AnimatePresence>
                {isOpen && (
                  <AnswerContainer
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <AnswerContent>{item.answer}</AnswerContent>
                  </AnswerContainer>
                )}
              </AnimatePresence>
              <BorderBottom />
            </AccordianItem>
          );
        })}
      </AccordianContainer>
    </Container>
  );
};

export default FAQsSection;

const Container = styled.div`
  display: flex;
  max-width: 937.521px;
  width: 100%;
  flex-direction: column;
  gap: 61px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 438px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
    text-align: center;
    align-items: center;
  }
`;

const Title = styled.div`
  color: #000;
  font-family: Alcyone-SemiBold;
  font-size: 24px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Underline = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: -0.002px;
  bottom: -30px;

  @media (max-width: 768px) {
    bottom: -15px;
  }
`;

const AccordianContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const AccordianItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const FAQQuestionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 14px 0;
  user-select: none;

  &:hover {
    opacity: 0.8;
  }
`;

const FAQQuestion = styled.div`
  color: #000;
  font-family: Alcyone-SemiBold;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnswerContainer = styled(motion.div)`
  overflow: hidden;
  width: 100%;
`;

const AnswerContent = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-family: Alcyone;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  font-style: normal;
  padding-bottom: 16px;
  max-width: 800px;
`;

const BorderBottom = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  opacity: 0.2;
  margin-top: 28px;
`;
