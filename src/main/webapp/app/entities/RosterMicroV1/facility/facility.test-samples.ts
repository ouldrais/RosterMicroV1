import { IFacility, NewFacility } from './facility.model';

export const sampleWithRequiredData: IFacility = {
  id: 9920,
};

export const sampleWithPartialData: IFacility = {
  id: 21377,
};

export const sampleWithFullData: IFacility = {
  key: 6637,
  id: 11711,
};

export const sampleWithNewData: NewFacility = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
