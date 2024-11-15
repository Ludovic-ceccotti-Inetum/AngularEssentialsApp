import {ChampionType} from './ChampionType';
import {Position} from './Position';

export class Champion {
  private _name: String;
  private _type: ChampionType | null;
  private _positions: Position [];

  constructor(name: String | null = '', type: ChampionType | null = null, positions: Position[] | null = []) {
    this._name = name ?? '';
    this._type = type ?? null;
    this._positions = positions ?? [];
  }



  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get type(): ChampionType {
    return <ChampionType>this._type ?? null;
  }

  set type(value: ChampionType) {
    this._type = value;
  }

  get positions(): Position[] {
    return this._positions;
  }

  set positions(value: Position[]) {
    this._positions = value;
  }
}
