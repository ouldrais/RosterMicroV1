import { IFacility } from 'app/entities/RosterMicroV1/facility/facility.model';

export interface IDepartment {
  id: number;
  key?: number | null;
  team?: string | null;
  facility?: IFacility | null;
}

export type NewDepartment = Omit<IDepartment, 'id'> & { id: null };
