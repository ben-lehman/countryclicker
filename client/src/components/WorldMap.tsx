import { MapContainer, GeoJSON, useMap, Rectangle } from "react-leaflet";
import countryGeoJSON from "../../../data/countriesv5.geo.json";
import { Feature, FeatureCollection } from "geojson";
import {
  LatLngBoundsExpression,
  LeafletMouseEvent,
  StyleFunction,
} from "leaflet";
import { useEffect, useRef, useState } from "react";
import { CountryData } from "@/data/WorldMapData";

function WorldMap({
  targetCountry,
  viewBounds,
  onCountryClick,
}: {
  targetCountry: CountryData | null;
  attempts: number;
  viewBounds: [number, number, number, number];
  onCountryClick: (feature: Feature) => void;
}) {
  const [activeCountry, setActiveCountry] = useState<string>("");
  const featureRef = useRef<LeafletMouseEvent>(null);

  const setFeatureStyle = (e: LeafletMouseEvent) => {
    if (featureRef.current) {
      featureRef.current.target.resetStyle();
    }
    featureRef.current = e;

    if (
      e.propagatedFrom.feature.properties.adminISO === targetCountry?.adminISO
    ) {
      e.propagatedFrom.setStyle({ fillColor: "#31748f" });
    } else {
      e.propagatedFrom.setStyle({ fillColor: "#eb6f92" });
    }
  };

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
      style={{
        height: "80vh",
        width: "100%",
        maxWidth: "80rem",
        margin: "0 auto",
        backgroundColor: "#1f1d2e",
      }}
    >
      <GeoJSON
        data={countryGeoJSON as FeatureCollection}
        style={countryStyle}
        eventHandlers={{
          click: (e) => {
            const feature = e.propagatedFrom.feature;
            setActiveCountry(feature.properties.adminISO);
            setFeatureStyle(e);
            onCountryClick(feature);
          },
          mouseover: (e) => {
            const layer = e.propagatedFrom;
            if (layer.feature.properties.adminISO !== activeCountry) {
              layer.setStyle({ fillColor: "#908caa" });
            }
          },
          mouseout: (e) => {
            const layer = e.propagatedFrom;
            if (layer.feature.properties.adminISO !== activeCountry) {
              e.target.resetStyle(layer);
            }
          },
        }}
      />
      <ZoomToCountry bounds={viewBounds} expandedBounds={viewBounds} />
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

  useEffect(() => {
    if (expandedBounds) {
      map.fitBounds(convertToLeafletBounds(expandedBounds))
    }
  }, [expandedBounds, map]);

  if (!bounds || !expandedBounds) return null;

  // Now we know bounds and expandedBounds are not null
  const originalBounds: [number, number, number, number] = bounds;
  const newBounds: [number, number, number, number] = expandedBounds;

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

const countryStyle: StyleFunction = (feature) => {
  if (!feature) return {};
  return {
    fillColor: "#6e6a86",
    color: "#ebbcba",
    weight: 1,
    opacity: 1,
    fillOpacity: 1,
    className: "feature-transition",
  };
};

export default WorldMap;
