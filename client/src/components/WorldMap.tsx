import { MapContainer, GeoJSON, useMap, Rectangle } from "react-leaflet";
import countryGeoJSON from "../../../data/countriesv5.geo.json";
import { Feature, FeatureCollection } from "geojson";
import { LatLngBoundsExpression, StyleFunction } from "leaflet";
import { useEffect } from "react";

function WorldMap({
  viewBounds,
  onCountryClick,
  countryStyle
}: {
  viewBounds: [number, number, number, number]
  onCountryClick: (feature: Feature) => void 
  countryStyle: StyleFunction
}) {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      zoomSnap={0.1}
      scrollWheelZoom={false}
      dragging={false}
      zoomControl={false}
      doubleClickZoom={false}
      touchZoom={false}
      boxZoom={false}
      keyboard={false}
      style={{ height: "80vh", width: "100%", backgroundColor: "#1f1d2e" }}
    >
      <GeoJSON
        data={countryGeoJSON as FeatureCollection}
        style={countryStyle}
        eventHandlers={{
          click: (e) => {
            onCountryClick(e.propagatedFrom.feature);
          },
          mouseover: (e) => {
            const layer = e.propagatedFrom
            layer.setStyle({fillColor: "#908caa"})
          },
          mouseout: (e) => {
            const layer = e.propagatedFrom
            e.target.resetStyle(layer)
          }
        }}
      />
      <ZoomToCountry
        bounds={viewBounds}
        expandedBounds={viewBounds}
      />
    </MapContainer>
  );
}

// Function to convert [west, south, east, north] to Leaflet bounds [[south, west], [north, east]]
const convertToLeafletBounds = (
  bbox: [number, number, number, number],
): LatLngBoundsExpression => {
  const [west, south, east, north] = bbox;
  return [
    [south, west],
    [north, east],
  ];
};

function ZoomToCountry({
  bounds,
  expandedBounds,
}: {
  bounds: [number, number, number, number] | null;
  expandedBounds: [number, number, number, number] | null;
}) {
  const map = useMap();
  // SA const test: [number, number, number, number] = [-81.4, -55.6, -34.73, 14.3];
  // Asia const test: [number, number, number, number] = [26.0, -10.4, 145, 55];

  useEffect(() => {
    if (expandedBounds) {
      map.fitBounds(convertToLeafletBounds(expandedBounds));
      // map.flyToBounds(convertToLeafletBounds(test))

      console.log("zoom info", map.getZoom(), map.getBounds());
    }
  }, [expandedBounds, map]);

  if (!bounds || !expandedBounds) return null;

  // Now we know bounds and expandedBounds are not null
  const originalBounds: [number, number, number, number] = bounds;
  const newBounds: [number, number, number, number] = expandedBounds

  return; // used for debugging expanded bounds. remove before production

  return (
    <>
      <Rectangle
        bounds={convertToLeafletBounds(originalBounds)}
        pathOptions={{
          color: "red",
          weight: 2,
          fillOpacity: 0.1,
        }}
      />
      <Rectangle
        bounds={convertToLeafletBounds(newBounds)}
        pathOptions={{
          color: "blue",
          weight: 2,
          fillOpacity: 0.1,
        }}
      />
    </>
  );
}



export default WorldMap;
