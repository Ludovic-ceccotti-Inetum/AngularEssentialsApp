export enum Position {
  TOP = 'TOPLANE',
  BOTTOM = 'BOTLANE',
  MID = 'MIDLANE',
  JUNGLE = 'JUNGLE'
}

export function findPositionByKey(key: string | null): Position | undefined {
  if(key == null || key.length === 0) {
    console.error('No key provided!');
    return undefined;
  }
  switch (key.trim().toUpperCase()) {
    case 'TOP':
      return Position.TOP;
    case 'BOTTOM':
      return Position.BOTTOM;
    case 'MID':
      return Position.MID;
    case 'JUNGLE':
      return Position.JUNGLE
    default:
      console.error(`Cannot find Position with key ${key}`)
      return undefined;
  }
}
