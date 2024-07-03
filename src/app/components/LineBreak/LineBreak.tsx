import styled from 'styled-components';

import { DrivewayColor } from '@/app/styles/colors';

interface LineBreakProps {
  width: number;
}

export const LineBreak = styled.div<LineBreakProps>`
  border-top: 1px solid ${DrivewayColor.black};
  height: 1px;
  margin: 0;
  padding: 0;
  width: ${({ width }) => width}px;
`;
