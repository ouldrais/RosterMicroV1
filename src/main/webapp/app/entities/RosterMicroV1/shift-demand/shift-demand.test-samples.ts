import { IShiftDemand, NewShiftDemand } from './shift-demand.model';

export const sampleWithRequiredData: IShiftDemand = {
  id: 20994,
};

export const sampleWithPartialData: IShiftDemand = {
  id: 2817,
};

export const sampleWithFullData: IShiftDemand = {
  id: 8888,
  count: 25130,
};

export const sampleWithNewData: NewShiftDemand = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
