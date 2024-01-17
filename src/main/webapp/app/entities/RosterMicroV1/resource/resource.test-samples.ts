import { IResource, NewResource } from './resource.model';

export const sampleWithRequiredData: IResource = {
  id: 16014,
};

export const sampleWithPartialData: IResource = {
  id: 25553,
  key: 24745,
  lastName: 'Pfannerstill',
};

export const sampleWithFullData: IResource = {
  id: 14600,
  key: 7523,
  firstName: 'Millie',
  lastName: 'Schaden',
  teamRole: 'abnormally',
  exchangeAllowed: false,
};

export const sampleWithNewData: NewResource = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
