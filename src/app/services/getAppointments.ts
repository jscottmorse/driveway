import mockOilAppointment from './mockOilAppointment.json';
import mockTireAppointment from './mockTireAppointment.json';

export type Services = 'detailing' | 'oil' | 'tire';

export type AppointmentResponse = {
  serviceId: string;
  serviceName: string;
  serviceDates: string[];
}

const appointment = {
  detailing: mockOilAppointment,
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

