'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

import Button from '@/app/components/Buttons/Button';
import { FlexColumn } from '@/app/components/FlexDivs/FlexDiv';
import { DrivewayColor } from '@/app/styles/colors';

const StyledFlexColumn = styled(FlexColumn)`
  height: 100%;
  margin: 51px 0 76px;
  width: 100%;
`;

const Title = styled.h2`
  color: ${DrivewayColor.blue};
  margin: 0 0 26px;
`;

const Message = styled.p`
  color: ${DrivewayColor.black};
  margin: 23px 0 53px;
  width: 466px;
`;

export default function Home() {
  const router = useRouter()

  return (
    <StyledFlexColumn>
      <Title>Welcome to Lithia Motors Service!</Title>
      <Image
        alt="home image"
        height={328}
        src="/home-image.svg"
        width={460}
      />
      <Message>
        Lithia motors wants to put you in full control of your car-owning
        experience by providing eat to book service
        appointments from the comfort of your own home!
      </Message>
      <Button
        onClick={() => router.push('/service-page')}
        size="large"
        type="primary"
      >
        Get Started
      </Button>
    </StyledFlexColumn>
  );
}
