import { IRole } from 'app/entities/RosterMicroV1/role/role.model';
import { IResource } from 'app/entities/RosterMicroV1/resource/resource.model';

export interface IResourceRoles {
  id: number;
  role?: IRole | null;
  resource?: IResource | null;
}

export type NewResourceRoles = Omit<IResourceRoles, 'id'> & { id: null };
