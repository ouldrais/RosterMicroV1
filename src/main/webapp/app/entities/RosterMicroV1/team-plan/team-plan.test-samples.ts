import { ITeamPlan, NewTeamPlan } from './team-plan.model';

export const sampleWithRequiredData: ITeamPlan = {
  id: 7206,
};

export const sampleWithPartialData: ITeamPlan = {
  id: 14370,
};

export const sampleWithFullData: ITeamPlan = {
  id: 29257,
};

export const sampleWithNewData: NewTeamPlan = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
