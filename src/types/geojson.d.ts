declare module "*.geojson" {
  const value: GeoJSON.FeatureCollection;
  export default value;
}

declare module "*.json" {
  const value: any;
  export default value;
} 