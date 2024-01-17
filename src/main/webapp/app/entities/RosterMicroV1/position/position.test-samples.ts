import { IPosition, NewPosition } from './position.model';

export const sampleWithRequiredData: IPosition = {
  id: 17840,
};

export const sampleWithPartialData: IPosition = {
  id: 21972,
  key: 15847,
};

export const sampleWithFullData: IPosition = {
  id: 30645,
  key: 21702,
  leadership: 'foolhardy of vulgarize',
};

export const sampleWithNewData: NewPosition = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
