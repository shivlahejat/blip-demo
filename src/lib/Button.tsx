"use client";
import Image from "next/image";
import React from "react";
import styled, { css } from "styled-components";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "outlineFilled"
  | "ghost"
  | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: string;
  leftIconWidth?: number;
  leftIconHeight?: number;
}

const variants = {
  primary: css`
    color: #fff;
    border: 2px solid #3f3e3e;
    background: linear-gradient(0deg, #414141 0%, #000 77.88%);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
  `,
  secondary: css`
    border: 1px solid #6c3403;
    background: #ffbe85;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    color: #6c3403;
  `,
  outline: css`
    background: transparent;
    color: #000;
    border: 1px solid #000;
  `,

  outlineFilled: css`
    border: 2px solid #1d1d1d;
    background: #fff;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: #1d1d1d;
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

export const Button = ({
  leftIcon,
  leftIconWidth = 21,
  leftIconHeight = 32,
  children,
  variant,
  size,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} {...rest}>
      {leftIcon && (
        <Image
          src={leftIcon}
          alt="button icon"
          width={leftIconWidth}
          height={leftIconHeight}
          style={{ width: "auto", height: `${leftIconHeight}px` }}
        />
      )}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<Pick<ButtonProps, "variant" | "size">>`
  display: inline-flex;
  padding: 8px 39px 9px 39px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 221px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: Alcyone-SemiBold;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  text-transform: capitalize;

  ${({ variant = "primary" }) => variants[variant]}
  ${({ size = "md" }) => sizes[size]}

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
