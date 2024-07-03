import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from '@/app/components/Buttons/Button';
import { FlexColumn, FlexRow } from '@/app/components/FlexDivs/FlexDiv';
import { formatDate } from '@/app/helpers/format';
import getAppointments, { AppointmentResponse, Services } from '@/app/services/getAppointments';
import { DrivewayColor } from '@/app/styles/colors';

interface AppointmentTitleProps {
  color: string;
}

export const AppointmentTitle = styled.p<AppointmentTitleProps>`
  color: ${({ color }) => color};
  font-size: 14px;
  line-height: 17px;
`;

export const AppointmentDates = styled(FlexColumn)`
  margin: 10px;
`;

export const AppointmentOption = styled(FlexRow)`
  cursor: pointer;
  gap: 5px;
  justify-content: flex-start;
  width: 220px;
`;

interface IndicatorProps {
  $isSelected: boolean;
}

export const Indicator = styled.div<IndicatorProps>`
  background-color: ${({ $isSelected }) => $isSelected ? DrivewayColor.lightBlue : 'transparent'};
  border-radius: 50%;
  border: 1px solid ${DrivewayColor.blue};
  height: 10px;
  width: 10px;
`;

export const DateText = styled.span`
  color: ${DrivewayColor.blue};
`;

interface AppointmentProps {
  hasError?: boolean;
  service: Services;
}

export default function Appointment({ hasError = false, service }: AppointmentProps) {
  const [serviceAppointment, setServiceAppointment] = useState<AppointmentResponse | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const onSelect = (date: string) => {
    const newSelectDate = selectedDate === date ? null : date;
    setSelectedDate(newSelectDate)
  }

  const onBookNow = () => {
    if (serviceAppointment != null && selectedDate != null) {
      alert(JSON.stringify({
        serviceId: serviceAppointment.serviceId,
        serviceName: serviceAppointment.serviceName,
        serviceDate: selectedDate
      }))
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await getAppointments(service, hasError);
        setServiceAppointment(response);
      } catch (error) {
        console.error(error);
      }

      setIsLoaded(true);
    })();
  }, [hasError, service]);

  return (
    <>
      <AppointmentTitle color={DrivewayColor.black}>Available Appointments</AppointmentTitle>
      <AppointmentDates>
        {
          isLoaded ? (serviceAppointment?.serviceDates != null ? (
              serviceAppointment.serviceDates.map((date, index) => (
                  <AppointmentOption key={`${date}-${index}`} onClick={() => onSelect(date)}>
                    <Indicator $isSelected={selectedDate === date}/>
                    <DateText>{formatDate(date)}</DateText>
                  </AppointmentOption>
                )
              )
            ) : (
              <AppointmentTitle color={DrivewayColor.darkGray}>
                No Appointments Available
              </AppointmentTitle>
            )
          ) : (
            <AppointmentTitle color={DrivewayColor.gray}>Loading...</AppointmentTitle>
          )
        }
      </AppointmentDates>
      <Button isDisabled={selectedDate == null} onClick={onBookNow}>Book Now</Button>
    </>
  );
}
