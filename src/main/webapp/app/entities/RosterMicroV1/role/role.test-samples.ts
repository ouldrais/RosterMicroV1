import { IRole, NewRole } from './role.model';

export const sampleWithRequiredData: IRole = {
  id: 10387,
};

export const sampleWithPartialData: IRole = {
  key: 6193,
  id: 6539,
};

export const sampleWithFullData: IRole = {
  key: 796,
  id: 9671,
};

export const sampleWithNewData: NewRole = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
