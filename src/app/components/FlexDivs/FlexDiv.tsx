import styled from 'styled-components';

export const FlexRow = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
`;

export const FlexColumn = styled(FlexRow)`
  flex-flow: column nowrap;
`;
