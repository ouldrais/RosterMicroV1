import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 3600,
};

export const sampleWithPartialData: ITask = {
  id: 26503,
};

export const sampleWithFullData: ITask = {
  key: 7275,
  id: 30254,
  description: 'measurement',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
