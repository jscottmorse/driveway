import expect from 'expect';

import getAppointments from '@/app/services/getAppointments';
import mockDetailingAppointment from '@/app/services/mockDetailingAppointment.json';
import mockOilAppointment from '@/app/services/mockOilAppointment.json';
import mockTireAppointment from '@/app/services/mockTireAppointment.json';

test('API returns oil data', async () => {
  expect(await getAppointments('oil')).toEqual(mockOilAppointment);
});

test('API returns tire data', async () => {
  expect(await getAppointments('tire')).toEqual(mockTireAppointment);
});

test('API returns detailing data', async () => {
  expect(await getAppointments('detailing')).toEqual(mockDetailingAppointment);
});

test('API returns an error', () => {
  expect(async () => await getAppointments('detailing', true)).rejects.toThrow(
    'Error while retrieving appointments'
  );
});

