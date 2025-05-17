export interface CountryData {
  name: string;
  type: string;
  adminISO: string;
  continent: string;
  subregion: string;
  bbox: [number, number, number, number];
}

export interface ContinentData {
  countries: [CountryData];
  bbox: [number, number, number, number] | null;
}

export enum Continent {
  All = "all",
  Africa = "africa",
  Asia = "asia",
  Europe = "europe",
  NorthAmerica = "northamerica",
  Oceania = "oceania",
  SouthAmerica = "southamerica"
}

export const WORLDMAPBOUNDS: [number, number, number, number] = [-180, -55.7, 180, 83.7];

export const continentViewBox: {[key: string]: [number, number, number, number]} = {
  "africa": [-17.62504269049066,-34.81916635512371,51.13387,37.349994411766545],
  "asia": [26.04335127127257,-10.359987481327956,145.5431372418027,55.38525014914353],
  "europe": [-24.326184047939336,34.91998769788964,40.080789015469406,70],
  "northamerica": [-171.79111060289122,7.220541490096537,-12.20855,70],
  "oceania": [113.33895307826242,-46.641235446967876,180,-2.500002129734007],
  "southamerica": [-81.41094255239946,-55.61183,-34.729993455533034,12.437303168177309],
}

export async function getCountryGuessList(continent: Continent) {
  const countryList = await getCountryList(continent)

  // fisher yates shuffle
  for(let i = countryList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [countryList[i], countryList[j]] = [countryList[j], countryList[i]]
  }
  
  return countryList

}

/**
* Take boundary box from a specific country and return an expanded boundary box
* the targetted country should be fully in view of the expanded boundary box
* but it's postion should be randomized within the new boundary box
 */
export function getExpandedBbox(bbox: [number, number, number, number]):  [number, number, number, number] {
  const minExpansionFactor = 2
  const maxExpansionFactor = 5
  const expansionFactor = Math.floor(Math.random() * (maxExpansionFactor - minExpansionFactor)) + minExpansionFactor

  const [west, south, east, north] = bbox

  const width = east - west
  const height = north - south

  // set min expansion sizes for countries with very small bboxes
  const minWidthForExpansion = 10
  const minHeightForExpansion = 10
  const expandedWidth = Math.max(width, minWidthForExpansion) * expansionFactor
  const expandedHeight = Math.max(height, minHeightForExpansion) * expansionFactor

  const maxExtraWidth = WORLDMAPBOUNDS[2] - WORLDMAPBOUNDS[0] - width
  const maxExtraHeight = WORLDMAPBOUNDS[3] - WORLDMAPBOUNDS[1] - height
  const extraWidth = Math.min(expandedWidth - width, maxExtraWidth)
  const extraHeight = Math.min(expandedHeight - height, maxExtraHeight)

  const randomWestOffset = Math.floor(Math.random() * extraWidth)
  const randomSouthOffset = Math.floor(Math.random() * extraHeight)

  const newWest = Math.max(WORLDMAPBOUNDS[0], west - randomWestOffset)
  const newSouth = Math.max(WORLDMAPBOUNDS[1], south - randomSouthOffset)
  const newEast = Math.min(WORLDMAPBOUNDS[2], newWest + expandedWidth)
  const newNorth = Math.min(WORLDMAPBOUNDS[3], newSouth + expandedHeight)

  return [newWest, newSouth, newEast, newNorth]
}

export async function getCountryList(continent: string) {
  let data;
  switch (continent) {
    case "africa":
      data = await import("./africa-countries-list.json")
      return data.default.countries as CountryData[] 
    case "asia":
      data = await import('./asia-countries-list.json')
      return data.default.countries as CountryData[] 
    case "europe":
      data = await import('./europe-countries-list.json')
      return data.default.countries as CountryData[] 
    case "northamerica":
      data = await import('./northamerica-countries-list.json')
      return data.default.countries as CountryData[] 
    case "oceania":
      data = await import('./oceania-countries-list.json')
      return data.default.countries as CountryData[]
    case "southamerica":
      data = await import('./southamerica-countries-list.json')
      return data.default.countries as CountryData[] 
    default:
      data = await import("./countries-list.json")
      return data.default as CountryData[] 
  }
}
