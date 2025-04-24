import { Feature } from "geojson";
import { useCallback, useState } from "react";
import "leaflet/dist/leaflet.css";
import WorldMap from "./WorldMap.tsx";
import { getCountryList, getExpandedBbox, continentViewBox, CountryData, WORLDMAPBOUNDS } from "@/data/WorldMapData.ts";
import { StyleFunction } from "leaflet";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

async function fetchNextCountry(
  currentCountry: string,
  currentContinent: string,
): Promise<CountryData> {
  const countryList = await getCountryList(currentContinent)
  let nextCountry: CountryData;
  
  while (true) {
    const randomIndex = Math.floor(Math.random() * countryList.length)
    nextCountry = countryList[randomIndex]

    if (nextCountry.adminISO !== currentCountry) {
      break
    }
  } 

  return nextCountry;
}

enum Continent {
  All = "all",
  Africa = "africa",
  Asia = "asia",
  Europe = "europe",
  NorthAmerica = "northamerica",
  Oceania = "oceania",
  SouthAmerica = "southamerica"
}

function GameContainer() {
  const [gameStarted, setGameStarted] = useState(false);
  const [targetCountry, setTargetCountry] = useState<CountryData | null>(null);
  const [targetContinent, setTargetContinent] = useState<Continent>(Continent.All);
  const [viewBounds, setViewBounds] = useState<
    [number, number, number, number] | null
  >(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    selectRandomCountry();
  };

  const resetGameState = () => {
    setAttempts(0);
    setTargetCountry(null);
    setIsCorrect(false);
    setError(null);
    setMessage(null);
  };

  const resetMapView = () => {
    setViewBounds(WORLDMAPBOUNDS);
  };

  // Function to select a random country
  const selectRandomCountry = async () => {
    resetGameState();

    try {
      const data = await fetchNextCountry(
        targetCountry?.adminISO || "ZZZ",
        targetContinent,
      );
      setTargetCountry(data);

      if(targetContinent === Continent.All) {
        // get expanded bbox
        const expandedBbox = getExpandedBbox(data.bbox)
        setViewBounds(expandedBbox)
      } else {
       const continentViewBound = continentViewBox[targetContinent]
       setViewBounds(continentViewBound)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch country");
      console.error("Error fetching country:", err);
    }
  };

  const onContinentChange = (continent: Continent) => {
    setGameStarted(false);
    resetGameState();
    resetMapView();

    setTargetContinent(continent);
  };

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

  const countryStyle: StyleFunction = useCallback(
    (feature) => {
      if (!feature) {
        return {
          fillColor: "#6e6a86",
          weight: 1,
          opacity: 1,
          color: "white",
          fillOpacity: 1,
        };
      }

      if (isCorrect && feature.properties?.name === targetCountry?.name) {
        return {
          fillColor: "#31748f",
          weight: 1,
          opacity: 1,
          color: "#ebbcba",
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
        fillColor: "#6e6a86",
        color: "#ebbcba",
        weight: 1,
        opacity: 1,
        fillOpacity: 1,
      };
    },
    [targetCountry, attempts, isCorrect],
  );

  return (
    <div className="game-container w-full h-full p-4">
      <div className="flex justify-between items-center mb-2">
        <h1 className="logo text-rp-text pb-0 mb-0">COUNTRY CLICKER</h1>
        <Select
          value={targetContinent}
          onValueChange={(v: Continent) => {
            onContinentChange(v);
          }}
        >
          <SelectTrigger className="w-[180px] text-rp-text">
            <SelectValue placeholder="World" />
          </SelectTrigger>
          <SelectContent className="bg-rp-overlay z-9999">
            <SelectItem value={Continent.All} className="text-rp-text z-9999">
              World 
            </SelectItem>
            <SelectItem value={Continent.Africa} className="text-rp-text z-9999">
              Africa
            </SelectItem>
            <SelectItem value={Continent.Asia} className="text-rp-text">
              Asia
            </SelectItem>
            <SelectItem value={Continent.Europe} className="text-rp-text">
              Europe
            </SelectItem>
            <SelectItem value={Continent.NorthAmerica} className="text-rp-text">
              North America
            </SelectItem>
            <SelectItem value={Continent.Oceania} className="text-rp-text">
              Oceania
            </SelectItem>
            <SelectItem value={Continent.SouthAmerica} className="text-rp-text">
              South America
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      {!gameStarted && (
        <div className="absolute w-full h-full flex justify-center items-center z-9999">
          <Button onClick={() => startGame()}>Start Game</Button>
        </div>
      )}
      <WorldMap
        viewBounds={viewBounds || WORLDMAPBOUNDS}
        onCountryClick={onCountryClick}
        countryStyle={countryStyle}
      />
      <div className="controls flex flex-col gap-2 justify-center items-center">
        {error && <div className="error-message">{error}</div>}
        {targetCountry && !isCorrect && (
          <div className="target-country text-rp-text">
            Target Country: {targetCountry.name}
          </div>
        )}
        {message && (
          <div className={`message ${isCorrect ? "correct" : "wrong"}`}>
            {message}
          </div>
        )}
        {isCorrect && (
          <Button onClick={() => selectRandomCountry()}>Next Country</Button>
        )}
      </div>
    </div>
  );
}

export default GameContainer;
