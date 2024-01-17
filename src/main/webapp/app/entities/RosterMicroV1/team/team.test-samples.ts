import { ITeam, NewTeam } from './team.model';

export const sampleWithRequiredData: ITeam = {
  id: 19971,
};

export const sampleWithPartialData: ITeam = {
  id: 31224,
};

export const sampleWithFullData: ITeam = {
  key: 8702,
  id: 32066,
};

export const sampleWithNewData: NewTeam = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
