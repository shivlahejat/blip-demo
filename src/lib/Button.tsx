"use client";
import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variants = {
  primary: css`
    background: #000;
    color: #fff;
  `,
  secondary: css`
    background: #fff;
    color: #000;
    border: 1px solid #000;
  `,
  outline: css`
    background: transparent;
    color: #000;
    border: 1px solid #000;
  `,
  ghost: css`
    background: transparent;
    color: #000;
  `,
  danger: css`
    background: #ff3e03;
    color: #fff;
  `,
};

const sizes = {
  sm: css`
    padding: 6px 16px;
    font-size: 12px;
  `,
  md: css`
    padding: 10px 23px;
    font-size: 14px;
  `,
  lg: css`
    padding: 14px 28px;
    font-size: 16px;
  `,
};

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 221px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: "NexaRound", sans-serif;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;

  ${({ variant = "primary" }) => variants[variant]}
  ${({ size = "md" }) => sizes[size]}

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
