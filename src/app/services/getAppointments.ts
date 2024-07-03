import mockDetailingAppointment from '@/app/services/mockDetailingAppointment.json';
import mockOilAppointment from '@/app/services/mockOilAppointment.json';
import mockTireAppointment from '@/app/services/mockTireAppointment.json';

export type Services = 'detailing' | 'oil' | 'tire';

export type AppointmentResponse = {
  serviceId: string;
  serviceName: string;
  serviceDates: string[];
}

const appointment = {
  detailing: mockDetailingAppointment,
  oil: mockOilAppointment,
  tire: mockTireAppointment,
}
export default function getAppointments(service: Services, hasError = false): Promise<AppointmentResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasError) {
        reject('Error while retrieving appointments');
      }

      resolve(appointment[service])
    }, 300);
  })
}

