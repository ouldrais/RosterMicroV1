import { IResourceRoles, NewResourceRoles } from './resource-roles.model';

export const sampleWithRequiredData: IResourceRoles = {
  id: 19713,
};

export const sampleWithPartialData: IResourceRoles = {
  id: 32384,
};

export const sampleWithFullData: IResourceRoles = {
  id: 5331,
};

export const sampleWithNewData: NewResourceRoles = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
