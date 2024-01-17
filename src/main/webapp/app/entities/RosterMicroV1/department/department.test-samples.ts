import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 11950,
};

export const sampleWithPartialData: IDepartment = {
  id: 29706,
};

export const sampleWithFullData: IDepartment = {
  id: 2146,
  key: 14683,
  team: 'receiver finance opulent',
};

export const sampleWithNewData: NewDepartment = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
