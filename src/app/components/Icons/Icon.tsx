import { SVGProps } from 'react';
import styled from 'styled-components';

export interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

export const Icon = styled.svg<IconProps>`
  clip-rule: evenodd;
  fill-rule: evenodd;
  height: 100%;
  stroke-linejoin: round;
  stroke-miterlimit: 2;
  width: 100%;

  path {
    fill-rule: nonzero;
    fill: ${({ color }) => color};
  }
`;
