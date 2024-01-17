import { ITeam } from 'app/entities/RosterMicroV1/team/team.model';
import { IShift } from 'app/entities/RosterMicroV1/shift/shift.model';

export interface ITeamPlan {
  id: number;
  team?: ITeam | null;
  shift?: IShift | null;
}

export type NewTeamPlan = Omit<ITeamPlan, 'id'> & { id: null };
