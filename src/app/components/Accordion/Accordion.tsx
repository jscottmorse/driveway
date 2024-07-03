import { ReactNode, useState } from 'react';
import styled from 'styled-components';

import { FlexColumn, FlexRow } from '@/app/components/FlexDivs/FlexDiv';
import ChevronDown from '@/app/components/Icons/ChevronDown';
import ChevronUp from '@/app/components/Icons/ChevronUp';
import { LineBreak } from '@/app/components/LineBreak/LineBreak';

const StyledFlexColumn = styled(FlexColumn)`
  box-shadow: 0 4px 4px 0 #00000040;
  padding: 0 17px;
  width: 100%;
`;

const TitleMainDiv = styled(FlexRow)`
  cursor: pointer;
  height: 97px;
  width: 100%;
`;

const TitleContentDiv = styled(FlexRow)`
  width: calc(100% - 24px);
`;

const ChevronDiv = styled(FlexRow)`
  height: 24px;
  padding: 4px;
  width: 24px;
`;

const ChildrenDiv = styled(FlexColumn)`
  align-items: flex-start;
  gap: 7px;
  height: 100%;
  padding: 0 16px 16px;
  width: 100%;
`;

interface AccordionProps {
  title: ReactNode;
  children: ReactNode;
}

export default function Accordion({ children, title }: AccordionProps) {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <StyledFlexColumn>
      <TitleMainDiv onClick={() => setIsActive(!isActive)}>
        <TitleContentDiv>
          {title}
        </TitleContentDiv>
        <ChevronDiv>
          {isActive ? <ChevronUp/> : <ChevronDown/>}
        </ChevronDiv>
      </TitleMainDiv>
      {isActive && (
        <ChildrenDiv>
          <LineBreak width={545}/>
          {children}
        </ChildrenDiv>
      )}
    </StyledFlexColumn>
  )
}
