import {UserModel} from './user-model';

export interface StarredModel {
  id: number;
  name: string;
  full_name: string;
  owner: UserModel;
  description: string;
}
