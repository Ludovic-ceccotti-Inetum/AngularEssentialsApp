import {ChampionType} from './ChampionType';
import {Position} from './Position';

export class Champion {
  private _name: String;
  private _type: ChampionType;
  private _positions: Position [];


  constructor(name: String, type: ChampionType, positions: Position[]) {
    this._name = name;
    this._type = type;
    this._positions = positions;
  }


  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get type(): ChampionType {
    return this._type;
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
