import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DrivewayColor } from '@/app/styles/colors';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: 700;
  gap: 10px;
  outline: none;
  padding: ${({ theme }) => theme.padding};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const ButtonSizes = {
  small: {
    fontSize: '12px',
    padding: '12px 28px',
  },
  large: {
    fontSize: '14px',
    padding: '15px 93px',
  }
};

const ButtonTypes = {
  primary: {
    backgroundColor: DrivewayColor.blue,
    color: DrivewayColor.white,
  },
  secondary: {
    backgroundColor: DrivewayColor.white,
    color: DrivewayColor.blue,
  }
};

interface ButtonProps {
  children: ReactNode;
  isDisabled?: boolean;
  onClick: () => void;
  size?: 'small' | 'large';
  type?: 'primary' | 'secondary';
}

export default function Button({
  children,
  isDisabled = false,
  onClick,
  size = 'small',
  type = 'primary'
}: ButtonProps) {
  const buttonSize = ButtonSizes[size];
  const buttonType = ButtonTypes[type];

  return (
    <ThemeProvider theme={buttonSize}>
      <ThemeProvider theme={buttonType}>
        <StyledButton disabled={isDisabled} onClick={onClick}>{children}</StyledButton>
      </ThemeProvider>
    </ThemeProvider>
  )
}
