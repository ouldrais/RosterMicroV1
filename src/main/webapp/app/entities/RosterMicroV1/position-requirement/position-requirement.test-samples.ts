import { IPositionRequirement, NewPositionRequirement } from './position-requirement.model';

export const sampleWithRequiredData: IPositionRequirement = {
  id: 1170,
};

export const sampleWithPartialData: IPositionRequirement = {
  id: 22392,
};

export const sampleWithFullData: IPositionRequirement = {
  id: 27568,
  mandatoty: 'canine even',
};

export const sampleWithNewData: NewPositionRequirement = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
