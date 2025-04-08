import { MapContainer, TileLayer, GeoJSON, useMap, Rectangle } from "react-leaflet";
import { Feature, FeatureCollection } from "geojson";
import { useCallback, useEffect, useState } from "react";
//import countryGeoJSON from "../../data/custom_with_bbox.geo.json";
import countryGeoJSON from "../../data/countriesv3.geo.json";
import "leaflet/dist/leaflet.css";
import "./App.css";
import { StyleFunction, LatLngBoundsExpression } from "leaflet";
import { Button } from "@/components/ui/button";

// Constants for world bounds
const WORLD_BOUNDS: [number, number, number, number] = [-180, -90, 180, 90];

// Function to expand bounding box with random positioning
const expandBoundingBox = (bbox: [number, number, number, number]): [number, number, number, number] => {
  const minExpansionFactor = 2
  const maxExpansionFactor = 5
  const expansionFactor = Math.floor(Math.random() * (maxExpansionFactor - minExpansionFactor + 1) + minExpansionFactor)
  const [west, south, east, north] = bbox;
  console.log("bbox:", bbox);

  // Calculate the current width and height
  const width = east - west;
  const height = north - south;
  console.log("width:", width, "height:", height);

  // Calculate the total expanded dimensions
  const minWidthForExpansion = 10;
  const minHeightForExpansion = 10;
  const expandedWidth = Math.max(minWidthForExpansion, width) * expansionFactor;
  const expandedHeight = Math.max(minHeightForExpansion, height) * expansionFactor;
  console.log("expandedWidth:", expandedWidth, "expandedHeight:", expandedHeight);

  // Calculate how much extra space we have to play with
  const maxExtraWidth = WORLD_BOUNDS[2] - WORLD_BOUNDS[0] - width;
  const maxExtraHeight = WORLD_BOUNDS[3] - WORLD_BOUNDS[1] - height;
  const extraWidth = Math.min(expandedWidth - width, maxExtraWidth);
  const extraHeight = Math.min(expandedHeight - height, maxExtraHeight);
  console.log("extraWidth:", extraWidth, "extraHeight:", extraHeight);

  // Generate random offsets within the available space
  const randomWestOffset = Math.random() * extraWidth;
  const randomSouthOffset = Math.random() * extraHeight;
  console.log("randomWestOffset:", randomWestOffset, "randomSouthOffset:", randomSouthOffset);

  // Calculate new bounds ensuring we don't exceed world bounds
  const newWest = Math.max(WORLD_BOUNDS[0], west - randomWestOffset);
  const newSouth = Math.max(WORLD_BOUNDS[1], south - randomSouthOffset);
  const newEast = Math.min(WORLD_BOUNDS[2], newWest + expandedWidth);
  const newNorth = Math.min(WORLD_BOUNDS[3], newSouth + expandedHeight);
  console.log("newWest:", newWest, "newSouth:", newSouth, "newEast:", newEast, "newNorth:", newNorth);

  // If we hit world bounds, adjust the opposite boundary to maintain the expanded size
  /* 
  const finalWest = newEast - expandedWidth < WORLD_BOUNDS[0] ? WORLD_BOUNDS[0] : newWest;
  const finalSouth = newNorth - expandedHeight < WORLD_BOUNDS[1] ? WORLD_BOUNDS[1] : newSouth;
  const finalEast = finalWest + expandedWidth > WORLD_BOUNDS[2] ? WORLD_BOUNDS[2] : finalWest + expandedWidth;
  const finalNorth = finalSouth + expandedHeight > WORLD_BOUNDS[3] ? WORLD_BOUNDS[3] : finalSouth + expandedHeight;
  console.log("finalWest:", finalWest, "finalSouth:", finalSouth, "finalEast:", finalEast, "finalNorth:", finalNorth);
  */
  return [newWest, newSouth, newEast, newNorth];
};

// Function to convert [west, south, east, north] to Leaflet bounds [[south, west], [north, east]]
const convertToLeafletBounds = (bbox: [number, number, number, number]): LatLngBoundsExpression => {
  const [west, south, east, north] = bbox;
  return [[south, west], [north, east]];
};

// Component to handle map zooming and draw bounding boxes
function ZoomToCountry({ bounds }: { bounds: [number, number, number, number] | null }) {
  const map = useMap();
  const [expandedBounds, setExpandedBounds] = useState<[number, number, number, number] | null>(null);

  useEffect(() => {
    if (bounds) {
      const expanded = expandBoundingBox(bounds);
      setExpandedBounds(expanded);
      map.fitBounds(convertToLeafletBounds(expanded));
      console.log("zoom info", map.getZoom(), map.getBounds())
    }
  }, [bounds, map]);

  if (!bounds || !expandedBounds) return null;

  return
  return (
    <>
      <Rectangle
        bounds={convertToLeafletBounds(bounds)}
        pathOptions={{
          color: 'red',
          weight: 2,
          fillOpacity: 0.1,
        }}
      />
      <Rectangle
        bounds={convertToLeafletBounds(expandedBounds)}
        pathOptions={{
          color: 'blue',
          weight: 2,
          fillOpacity: 0.1,
        }}
      />
    </>
  );
}

function App() {
  const [targetCountry, setTargetCountry] = useState<Feature | null>(null);
  const [countryBounds, setCountryBounds] = useState<[number, number, number, number] | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  // Function to select a random country
  const selectRandomCountry = useCallback(() => {
    const features = (countryGeoJSON as FeatureCollection).features;
    console.log('countries len', features.length)
    const randomIndex = Math.floor(Math.random() * features.length);
    const selected = features[randomIndex];
    console.log("selected:", selected);
    setTargetCountry(selected);
    setMessage(null);

    // Get bbox from selected country
    const bbox = selected.properties?.bbox;
    if (bbox) {
      setCountryBounds(bbox as [number, number, number, number]);
    }
  }, []);

  const onCountryClick = useCallback((feature: Feature) => {
    const countryName = feature.properties?.name;
    const targetName = targetCountry?.properties?.name;

    if (targetName && countryName && countryName === targetName) {
      setMessage(`Correct! You found ${countryName}`);
    } else if (countryName) {
      setMessage(`Wrong! That was ${countryName}. Try again!`);
    }
  }, [targetCountry]);

  const countryStyle: StyleFunction<any> = useCallback((feature) => {
    if (!feature) {
      return {
        fillColor: '#cccccc',
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 1,
      };
    }

    if (feature.properties?.name === targetCountry?.properties?.name) {
      return {
        fillColor: 'green',
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 1,
      };
    }

    return {
      fillColor: '#cccccc',
      color: 'white',
      weight: 1,
      opacity: 1,
      fillOpacity: 1,
    };
  }, [targetCountry]);

  return (
    <div className="game-container">
      <div className="controls">
        <Button onClick={selectRandomCountry}>Select Random Country</Button>
        {targetCountry && (
          <div className="target-country">
            Target Country: {targetCountry.properties?.name}
          </div>
        )}
        {message && (
          <div className={`message ${message.startsWith("Correct") ? "correct" : "wrong"}`}>
            {message}
          </div>
        )}
      </div>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={false}
        dragging={false}
        zoomControl={false}
        doubleClickZoom={false}
        touchZoom={false}
        boxZoom={false}
        keyboard={false}
        style={{ height: "80vh", width: "100%" }}
      >
        <GeoJSON
          data={countryGeoJSON as FeatureCollection}
          style={countryStyle}
          eventHandlers={{
            click: (e) => {
              onCountryClick(e.propagatedFrom.feature);
            }
          }}
        />
        <ZoomToCountry bounds={countryBounds} />
      </MapContainer>
    </div>
  );
}

export default App;
