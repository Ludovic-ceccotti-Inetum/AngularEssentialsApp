import {GoldDto} from './GoldDto';

export interface ObjectDto {
  name: string;
  description: string;
  plaintext: string;
  into: string[];
  gold: GoldDto;
  tags: string[];
  maps: { [key: string]: boolean };
  stats: { [key: string]: number };

}
