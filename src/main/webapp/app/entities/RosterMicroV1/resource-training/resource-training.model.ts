import dayjs from 'dayjs/esm';
import { IResource } from 'app/entities/RosterMicroV1/resource/resource.model';
import { ITraining } from 'app/entities/RosterMicroV1/training/training.model';

export interface IResourceTraining {
  id: number;
  status?: string | null;
  level?: string | null;
  trainer?: string | null;
  activeFrom?: dayjs.Dayjs | null;
  activeto?: dayjs.Dayjs | null;
  resource?: IResource | null;
  training?: ITraining | null;
}

export type NewResourceTraining = Omit<IResourceTraining, 'id'> & { id: null };
