import {
  MapContainer,
  GeoJSON,
  useMap,
  Rectangle,
} from "react-leaflet";
import { Feature, FeatureCollection } from "geojson";
import { useCallback, useEffect, useState } from "react";
import countryGeoJSON from "../../../data/countriesv4filtered.geo.json";
import "leaflet/dist/leaflet.css";
import { StyleFunction, LatLngBoundsExpression } from "leaflet";
import { Button } from "@/components/ui/button";

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

// Component to handle map zooming and draw bounding boxes
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
      map.fitBounds(convertToLeafletBounds(expandedBounds));
      console.log("zoom info", map.getZoom(), map.getBounds());
    }
  }, [expandedBounds, map]);

  if (!bounds || !expandedBounds) return null;

  // Now we know bounds and expandedBounds are not null
  const originalBounds: [number, number, number, number] = bounds;
  const finalExpandedBounds: [number, number, number, number] = expandedBounds;

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
        bounds={convertToLeafletBounds(finalExpandedBounds)}
        pathOptions={{
          color: "blue",
          weight: 2,
          fillOpacity: 0.1,
        }}
      />
    </>
  );
}

interface CountryData {
  name: string;
  type: string;
  adminISO: string;
  continent: string;
  subregion: string;
  bbox: [number, number, number, number];
  expanded_bbox: [number, number, number, number];
}

async function fetchNextCountry(currentCountry: string): Promise<CountryData> {
  const url = "http://localhost:8080/api/next-country";

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ current_country: currentCountry }),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data: CountryData = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(`Unable to fetch next country ${error}`);
    }
  }
}

function GameContainer() {
  const [gameStarted, setGameStarted] = useState(false);
  const [targetCountry, setTargetCountry] = useState<CountryData | null>(null);
  const [countryBounds, setCountryBounds] = useState<[number, number, number, number] | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    selectRandomCountry();
  }

  // Function to select a random country
  const selectRandomCountry = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setAttempts(0);
    setIsCorrect(false);

    try {
      const data = await fetchNextCountry(targetCountry?.adminISO || "ZZZ");
      setTargetCountry(data);
      setMessage(null);
      if (data.expanded_bbox) {
        setCountryBounds(data.expanded_bbox);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch country");
      console.error("Error fetching country:", err);
    } finally {
      setIsLoading(false);
    }
  }, [targetCountry?.adminISO]);

  const onCountryClick = useCallback(
    (feature: Feature) => {
      setAttempts(attempts + 1);
      const countryName = feature.properties?.name;
      const targetName = targetCountry?.name;

      if (targetName && countryName && countryName === targetName) {
        setIsCorrect(true);
        setMessage(`Correct! You found ${countryName}`);
      } else if (countryName) {
        setMessage(`Wrong! That was ${countryName}. Try again!`);
      }
    },
    [targetCountry, attempts],
  );

  const countryStyle: StyleFunction<any> = useCallback(
    (feature) => {
      if (!feature) {
        return {
          fillColor: "#cccccc",
          weight: 1,
          opacity: 1,
          color: "white",
          fillOpacity: 1,
        };
      }

      if (isCorrect && feature.properties?.name === targetCountry?.name) {
        return {
          fillColor: "green",
          weight: 1,
          opacity: 1,
          color: "white",
          fillOpacity: 1,
        };
      }

      if (feature.properties?.name === targetCountry?.name && attempts >= 3) {
        return {
          fillColor: "lightblue",
          weight: 1,
          opacity: 1,
          color: "white",
          fillOpacity: 1,
        };
      }

      return {
        fillColor: "#cccccc",
        color: "white",
        weight: 1,
        opacity: 1,
        fillOpacity: 1,
      };
    },
    [targetCountry, attempts],
  );

  return (
    <div className="game-container w-full h-full p-4">
      {!gameStarted && (
        <div className="absolute w-full h-full flex justify-center items-center z-9999">
          <Button onClick={() => startGame()}>Start Game</Button>
        </div>
      )}
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
            },
          }}
        />
        <ZoomToCountry bounds={countryBounds} expandedBounds={countryBounds} />
      </MapContainer>
      <div className="controls flex flex-col gap-2 justify-center items-center">
        {error && <div className="error-message">{error}</div>}
        {targetCountry && (
          <div className="target-country">
            Target Country: {targetCountry.name}
          </div>
        )}
        {message && (
          <div
            className={`message ${message.startsWith("Correct") ? "correct" : "wrong"}`}
          >
            {message}
            {message.startsWith("Correct") && attempts > 0 && (
              <Button onClick={() => selectRandomCountry()}>Next Country</Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default GameContainer;
