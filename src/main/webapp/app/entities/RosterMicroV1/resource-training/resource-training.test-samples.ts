import dayjs from 'dayjs/esm';

import { IResourceTraining, NewResourceTraining } from './resource-training.model';

export const sampleWithRequiredData: IResourceTraining = {
  id: 4722,
};

export const sampleWithPartialData: IResourceTraining = {
  id: 15894,
  status: 'whoever',
  activeFrom: dayjs('2024-01-17T00:04'),
};

export const sampleWithFullData: IResourceTraining = {
  id: 7258,
  status: 'outside',
  level: 'ethernet',
  trainer: 'intrepid impala stow',
  activeFrom: dayjs('2024-01-16T18:13'),
  activeto: dayjs('2024-01-16T18:03'),
};

export const sampleWithNewData: NewResourceTraining = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
