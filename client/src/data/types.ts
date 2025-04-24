export interface GeoJSON {
  type: string;
  features: [Feature]
}

interface Feature {
  type: string;
  geometry: Geometry;
  properties: Properties;
}

interface Geometry {
  type: string;
  coordinates: [number];
}

interface Properties {
  name: string;
  type: string;
  adminISO: string;
  continent: string;
  subregion: string;
  bbox: [number, number, number, number]
}
