import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

import { FlexRow } from '@/app/components/FlexDivs/FlexDiv';

const StyledFlexRow = styled(FlexRow)`
  height: 40px;
  padding: 12px;
  position: absolute;
  top: 0;
  width: 100%;
`;

const StyledImage = styled(Image)`
  cursor: pointer;
`

export default function NavBar() {
  const router = useRouter()

  return (<StyledFlexRow>
    <StyledImage
      alt="Driveway logo"
      height={33}
      onClick={() => router.push('/')}
      src="/driveway-logo.webp"
      width={125}
    />
  </StyledFlexRow>);
}
