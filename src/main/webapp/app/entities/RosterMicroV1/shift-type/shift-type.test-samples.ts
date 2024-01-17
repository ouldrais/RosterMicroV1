import dayjs from 'dayjs/esm';

import { IShiftType, NewShiftType } from './shift-type.model';

export const sampleWithRequiredData: IShiftType = {
  id: 9255,
};

export const sampleWithPartialData: IShiftType = {
  key: 29880,
  id: 23078,
  start: dayjs('2024-01-16T03:51'),
};

export const sampleWithFullData: IShiftType = {
  key: 15646,
  id: 38,
  start: dayjs('2024-01-16T09:36'),
  end: dayjs('2024-01-16T17:11'),
};

export const sampleWithNewData: NewShiftType = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
