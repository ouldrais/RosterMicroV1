import dayjs from 'dayjs/esm';

import { IShiftTemplate, NewShiftTemplate } from './shift-template.model';

export const sampleWithRequiredData: IShiftTemplate = {
  id: 32218,
};

export const sampleWithPartialData: IShiftTemplate = {
  id: 22957,
};

export const sampleWithFullData: IShiftTemplate = {
  id: 14529,
  key: 14754,
  shiftStart: dayjs('2024-01-16T05:37'),
  shiftEnd: dayjs('2024-01-16T09:12'),
  type: 'at',
};

export const sampleWithNewData: NewShiftTemplate = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
