import {ObjectDto} from './ObjectDto';

export interface ObjectListResponse {
  type: string;
  version: string;
  data: Map<string, ObjectDto>;
}
