import { MapContainer, GeoJSON, useMap, Rectangle } from "react-leaflet";
import countryGeoJSON from "../data/countriesv5.geo.json";
import { Feature, FeatureCollection } from "geojson";
import {
  LatLngBoundsExpression,
  LeafletMouseEvent,
  StyleFunction,
} from "leaflet";
import { useCallback, useEffect, useRef, useState } from "react";
import { CountryData, WORLDMAPBOUNDS } from "@/data/WorldMapData";

function WorldMap({
  targetCountry,
  attempts,
  viewBounds,
  onCountryClick,
}: {
  targetCountry: CountryData | null;
  attempts: number;
  viewBounds: [number, number, number, number];
  onCountryClick: (feature: Feature) => void;
}) {
  const activeFeatureRef = useRef<LeafletMouseEvent>(null);
  const correctFeatureRef = useRef<CountryData>(null);

  const setFeatureStyle = (e: LeafletMouseEvent) => {
    if (activeFeatureRef.current) {
      activeFeatureRef.current.target.resetStyle();
    }
    activeFeatureRef.current = e;
  };

  const countryStyle: StyleFunction = useCallback(
    (feature) => {
      if (!feature) return {};

      const featureISO = feature.properties.adminISO;
      const activeFeatureISO =
        activeFeatureRef.current?.propagatedFrom.feature.properties.adminISO;
      const style = {
        fillColor: "#6e6a86",
        color: "#ebbcba",
        weight: 1,
        opacity: 1,
        fillOpacity: 1,
        className: "feature-transition",
      };

      // correct
      if (
        featureISO === activeFeatureISO &&
        featureISO === correctFeatureRef.current?.adminISO
      ) {
        // correct
        style.fillColor = "#31748f";
      } else if (featureISO === activeFeatureISO) {
        // incorrect
        style.fillColor = "#eb6f92";
      } else if (attempts >= 3 && featureISO === targetCountry?.adminISO) {
        // assist
        style.fillColor = "#c4a7e7";
      }

      return style;
    },
    [attempts, targetCountry?.adminISO],
  );

  const [popup, setPopup] = useState({
    visible: false,
    x: 0,
    y: 0,
    message: "",
    correct: false,
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showPopup = (e: LeafletMouseEvent) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const isCorrect =
      e.propagatedFrom.feature.properties.adminISO === targetCountry?.adminISO;

    setPopup({
      visible: true,
      x: e.originalEvent.clientX,
      y: e.originalEvent.clientY,
      message: e.propagatedFrom.feature.properties.name,
      correct: isCorrect,
    });

    timeoutRef.current = setTimeout(() => {
      setPopup((prevState) => ({ ...prevState, visible: false }));
    }, 1000);
  };

  return (
    <>
      <div className="fade-in">
        <MapContainer
          bounds={convertToLeafletBounds(WORLDMAPBOUNDS)}
          center={[40, 0]}
          zoom={2}
          zoomSnap={0.1}
          scrollWheelZoom={false}
          dragging={false}
          zoomControl={false}
          doubleClickZoom={false}
          touchZoom={false}
          boxZoom={false}
          keyboard={false}
          className="w-full bg-rp-surface"
          style={{
            background: "#1f1d2e",
          }}
        >
          <GeoJSON
            data={countryGeoJSON as FeatureCollection}
            style={countryStyle}
            eventHandlers={{
              click: (e) => {
                const feature = e.propagatedFrom.feature;
                correctFeatureRef.current = targetCountry;
                setFeatureStyle(e);
                showPopup(e);
                onCountryClick(feature);
              },
              mouseover: (e) => {
                const layer = e.propagatedFrom;
                if (
                  layer.feature.properties.adminISO !==
                  activeFeatureRef.current?.propagatedFrom.feature.properties
                    .adminISO
                ) {
                  layer.setStyle({ fillColor: "#908caa" });
                }
              },
              mouseout: (e) => {
                const layer = e.propagatedFrom;
                if (
                  layer.feature.properties.adminISO !==
                  activeFeatureRef.current?.propagatedFrom.feature.properties
                    .adminISO
                ) {
                  e.target.resetStyle(layer);
                }
              },
            }}
          />
          {targetCountry && (
            <ZoomToCountry bounds={viewBounds} expandedBounds={viewBounds} />
          )}
        </MapContainer>
      </div>
      {popup.visible && (
        <div
          style={{
            position: "fixed",
            top: `${popup.y}px`,
            left: `${popup.x}px`,
            transform: "translateX(15%) translatey(-75%)",
            padding: "10px 15px",
            backgroundColor: popup.correct ? "#9ccfd8" : "#eb6f92",
            color: "white",
            borderRadius: "5px",
            zIndex: 1000,
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          {popup.message}
        </div>
      )}
    </>
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
      setTimeout(() => {
        map.fitBounds(convertToLeafletBounds(expandedBounds));
      }, 1000);
    }
  }, [expandedBounds, map]);

  if (!bounds || !expandedBounds) return null;

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

export default WorldMap;
