import { IRefRotation, NewRefRotation } from './ref-rotation.model';

export const sampleWithRequiredData: IRefRotation = {
  id: 20693,
};

export const sampleWithPartialData: IRefRotation = {
  id: 14574,
};

export const sampleWithFullData: IRefRotation = {
  id: 31522,
  order: 25043,
};

export const sampleWithNewData: NewRefRotation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
