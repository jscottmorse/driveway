import expect from 'expect';

import getAppointments from '@/app/services/getAppointments';

import mockOilAppointment from './mockOilAppointment.json';
import mockTireAppointment from './mockTireAppointment.json';

test('API returns oil data', async () => {
  expect(await getAppointments('oil')).toEqual(mockOilAppointment);
});

test('API returns tire data', async () => {
  expect(await getAppointments('tire')).toEqual(mockTireAppointment);
});

test('API returns an error', () => {
  expect(async () => await getAppointments('detailing', true)).rejects.toThrow(
    'Error while retrieving appointments'
  );
});

