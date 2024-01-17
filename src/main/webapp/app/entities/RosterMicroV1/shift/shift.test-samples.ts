import dayjs from 'dayjs/esm';

import { IShift, NewShift } from './shift.model';

export const sampleWithRequiredData: IShift = {
  id: 25656,
};

export const sampleWithPartialData: IShift = {
  id: 17774,
  key: 29503,
  type: 'envision but bah',
};

export const sampleWithFullData: IShift = {
  id: 25323,
  key: 15112,
  shiftStart: dayjs('2024-01-16T07:06'),
  shiftEnd: dayjs('2024-01-16T18:45'),
  type: 'mechanically',
};

export const sampleWithNewData: NewShift = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
