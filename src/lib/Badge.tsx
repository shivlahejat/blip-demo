"use client";

import React from "react";
import styled, { css } from "styled-components";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "outlineFilled"
  | "ghost"
  | "danger";

interface BadgeProps {
  variant?: BadgeVariant;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const variants = {
  primary: css`
    background: #ffbe85;
    color: #6c3403;
  `,
  secondary: css``,
  outline: css``,
  outlineFilled: css``,
  ghost: css``,
  danger: css``,
};

const Wrapper = styled.div<{ variant?: BadgeVariant }>`
  display: flex;
  padding: 9px 25px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  font-family: Alcyone-SemiBold;
  font-size: 16px;
  letter-spacing: -0.48px;

  ${({ variant = "primary" }) => variants[variant]}
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
`;

export const Badge = ({ icon, children, variant = "primary" }: BadgeProps) => {
  return (
    <Wrapper variant={variant}>
      {icon && <Icon>{icon}</Icon>}
      {children}
    </Wrapper>
  );
};
