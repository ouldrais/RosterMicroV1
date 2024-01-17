import { ITraining, NewTraining } from './training.model';

export const sampleWithRequiredData: ITraining = {
  id: 24148,
};

export const sampleWithPartialData: ITraining = {
  id: 6577,
  description: 'whoa',
};

export const sampleWithFullData: ITraining = {
  id: 10354,
  key: 6827,
  description: 'as swiftly procurement',
};

export const sampleWithNewData: NewTraining = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
