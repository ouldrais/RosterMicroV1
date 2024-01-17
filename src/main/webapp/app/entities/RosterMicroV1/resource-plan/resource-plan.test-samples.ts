import { IResourcePlan, NewResourcePlan } from './resource-plan.model';

export const sampleWithRequiredData: IResourcePlan = {
  id: 19368,
};

export const sampleWithPartialData: IResourcePlan = {
  id: 29152,
  availability: true,
};

export const sampleWithFullData: IResourcePlan = {
  id: 5756,
  availability: false,
};

export const sampleWithNewData: NewResourcePlan = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
