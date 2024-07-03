'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import Accordion from '@/app/components/Accordion/Accordion';
import { FlexColumn, FlexRow } from '@/app/components/FlexDivs/FlexDiv';
import Appointment from '@/app/service-page/Appointments/Appointment';
import { Services } from '@/app/services/getAppointments';
import { DrivewayColor } from '@/app/styles/colors';

const StyledFlexColumn = styled(FlexColumn)`
  height: 100%;
  margin: 52px 0 40px;
  width: 100%;
`;

const PageTitle = styled.h2`
  color: ${DrivewayColor.blue};
  margin: 0 0 69px;
`;

const ServicesDiv = styled(FlexColumn)`
  gap: 34px;
  width: 598px;
`

const AccordionTitleRow = styled(FlexRow)`
  flex: 1;
  gap: 40px;
  padding-left: 46px;
`

const ServiceTitle = styled.h3`
  color: ${DrivewayColor.darkGray};
`

type ServicesRecord = {
  alt: string;
  image: string;
  title: string;
}

const services: Record<Services, ServicesRecord> = {
  detailing: {
    alt: 'car-icon',
    image: '/car-icon.svg',
    title: 'Express Auto Detailing',
  },
  oil: {
    alt: 'oil-icon',
    image: '/oil-icon.svg',
    title: 'Synthetic Oil Change',
  },
  tire: {
    alt: 'tire-icon',
    image: '/tires-icon.svg',
    title: 'Tire Rotation & Inspection',
  }
}

interface AccordionTitleProps {
  service: Services;
}

function AccordionTitle({ service }: AccordionTitleProps) {
  const { image, alt, title } = services[service];

  return (
    <AccordionTitleRow>
      <Image
        alt={alt}
        height={89}
        src={image}
        width={109}
      />
      <ServiceTitle>{title}</ServiceTitle>
    </AccordionTitleRow>
  )
}

export default function ServicePage() {
  return (
    <StyledFlexColumn>
      <PageTitle>Select a Service</PageTitle>
      <ServicesDiv>
        <Accordion title={<AccordionTitle service="oil"/>}>
          <Appointment service="oil"/>
        </Accordion>
        <Accordion title={<AccordionTitle service="tire"/>}>
          <Appointment service="tire"/>
        </Accordion>
        <Accordion title={<AccordionTitle service="detailing"/>}>
          <Appointment hasError service="detailing"/>
        </Accordion>
      </ServicesDiv>
    </StyledFlexColumn>
  );
}
