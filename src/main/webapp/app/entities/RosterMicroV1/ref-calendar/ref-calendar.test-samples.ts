import { IRefCalendar, NewRefCalendar } from './ref-calendar.model';

export const sampleWithRequiredData: IRefCalendar = {
  id: 159,
};

export const sampleWithPartialData: IRefCalendar = {
  key: 7869,
  id: 466,
};

export const sampleWithFullData: IRefCalendar = {
  key: 2895,
  id: 23416,
  status: 'evil psst',
};

export const sampleWithNewData: NewRefCalendar = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
