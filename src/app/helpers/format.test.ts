import expect from 'expect';

import { formatDate } from '@/app/helpers/format';

const dateString = '2024-07-05T08:00:00.000Z';
const formattedDate = 'Friday, July 5 at 8:00 AM'

test('Return date time', async () => {
  expect(formatDate(dateString)).toEqual(formattedDate);
});

test('Should throw an error', async () => {
  expect(formatDate('not a data string')).toEqual('Invalid Date');
});
