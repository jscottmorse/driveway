'use client'

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { FlexColumn, FlexRow } from '@/app/components/FlexDivs/FlexDiv';
import { DrivewayColor } from '@/app/styles/colors';

const StyledFlexColumn = styled(FlexColumn)`
  height: 100%;
  margin: 80px 0 48px;
  width: 100%;
`;

const Title = styled.h1`
  color: ${DrivewayColor.gray};
  margin: 80px 0 0;
`;

const Message = styled.p`
  color: ${DrivewayColor.gray};
  margin: 24px 0 0;
`;

const LinksDiv = styled(FlexRow)`
  gap: 40px;
  margin: 48px 0 0;
`

const Link = styled.a`
  color: ${DrivewayColor.blue};
`;

export default function NotFound() {
  return (
    <StyledFlexColumn>
      <Image
        alt="lost-man-with-vehicle"
        height={425}
        src="/lost-man-with-vehicle.svg"
        width={854}
      />
      <Title>Un-Oh!</Title>
      <Message>You've reached the end of the road. But it's OK, you've got options.</Message>
      <LinksDiv>
        <Link href="/">Home Page</Link>
        <Link href="/service-page">Services Page</Link>
      </LinksDiv>
    </StyledFlexColumn>

  );
}
