export enum ChampionType {
  SUPPORT = 'Protect other champions',
  ADC = 'Deals range damages',
  BRUISER = 'Deal damage in close-combat',
  TANK = 'Protect others champions by taking damages',
  JUNGLER = 'Kill monsters and help champions on their lanes'
}

export function findChampionTypeByKey(key: string | null): ChampionType | undefined {
  if (key == null || key.length == 0) {
    console.error("No key provided!");
    return undefined;
  }
  switch (key.trim().toUpperCase()) {
    case 'SUPPORT':
      return ChampionType.SUPPORT;
    case 'ADC':
      return ChampionType.ADC;
    case 'BRUISER':
      return ChampionType.BRUISER;
    case 'TANK':
      return ChampionType.TANK;
    case 'JUNGLER':
      return ChampionType.JUNGLER;
    default:
      console.error(`cannot find ChampionType with key: ${key}`)
      return undefined;
  }
}

export function findChampionTypeByDescription(description: string): ChampionType | undefined {
  if (description == null || description.length == 0) {
    console.error("No description provided!");
    return undefined;
  }
  switch (description) {
    case 'Protect other champions':
      return ChampionType.SUPPORT;
    case 'Deals range damages':
      return ChampionType.ADC;
    case 'Deal damage in close-combat':
      return ChampionType.BRUISER;
    case 'Protect others champions by taking damages':
      return ChampionType.TANK;
    case 'Kill monsters and help champions on their lanes':
      return ChampionType.JUNGLER;
    default:
      console.error(`No ChampionType found for description: ${description}`);
      return undefined;
  }
}
