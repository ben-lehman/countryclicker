import { Feature } from "geojson";
import { useCallback, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import WorldMap from "./WorldMap.tsx";
import StartMenu from "./StartMenu.tsx";
import {
  getCountryList,
  getExpandedBbox,
  Continent,
  continentViewBox,
  CountryData,
  WORLDMAPBOUNDS,
  getCountryGuessList,
} from "@/data/WorldMapData.ts";
import { StyleFunction } from "leaflet";
import { Button } from "@/components/ui/button";

async function fetchNextCountry(
  currentCountry: string,
  currentContinent: string,
): Promise<CountryData> {
  const countryList = await getCountryList(currentContinent);
  let nextCountry: CountryData;

  while (true) {
    const randomIndex = Math.floor(Math.random() * countryList.length);
    nextCountry = countryList[randomIndex];

    if (nextCountry.adminISO !== currentCountry) {
      break;
    }
  }

  return nextCountry;
}

function GameContainer() {
  const [gameStarted, setGameStarted] = useState(false);
  const [targetCountry, setTargetCountry] = useState<CountryData | null>(null);
  const [targetContinent, setTargetContinent] = useState<Continent>(
    Continent.All,
  );
  const [viewBounds, setViewBounds] = useState<
    [number, number, number, number] | null
  >(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [countryGuessList, setCountryGuessList] = useState<CountryData[]>([]);
  const [guessListPosition, setGuessListPosition] = useState<number>(0);

  const handleGameStart = async (continent: Continent) => {
    console.log("cont", continent);
    setTargetContinent(continent);
    setGameStarted(true);
    const guessList = await getCountryGuessList(continent);
    setCountryGuessList(guessList);
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

      if (targetContinent === Continent.All) {
        // get expanded bbox
        const expandedBbox = getExpandedBbox(data.bbox);
        setViewBounds(expandedBbox);
      } else {
        const continentViewBound = continentViewBox[targetContinent];
        setViewBounds(continentViewBound);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch country");
      console.error("Error fetching country:", err);
    }
  };

  const selectNextCountry = () => {
    resetGameState();

    const nextCountry = countryGuessList[guessListPosition];
    setTargetCountry(nextCountry);
    if (targetContinent === Continent.All) {
      // get expanded bbox
      const expandedBbox = getExpandedBbox(nextCountry.bbox);
      setViewBounds(expandedBbox);
    } else {
      const continentViewBound = continentViewBox[targetContinent];
      setViewBounds(continentViewBound);
    }
  };

  useEffect(() => {
    if (countryGuessList.length > 0) {
      selectNextCountry();
    }
  }, [countryGuessList]);

  const onCountryClick = useCallback(
    (feature: Feature) => {
      setAttempts(attempts + 1);
      const countryName = feature.properties?.name;
      const targetName = targetCountry?.name;

      // TODO: log guess in stats

      if (targetName && countryName && countryName === targetName) {
        setIsCorrect(true);
        // TODO: check if at end of guessList
        // if yes, then show end screen
        setGuessListPosition((pos) => pos + 1);
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
          fillColor: "#c4a7e7",
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
      </div>
      {!gameStarted && <StartMenu handleGameStart={handleGameStart} />}
      <div className={`${!gameStarted && "blur-sm"}`}>
        <WorldMap
          viewBounds={viewBounds || WORLDMAPBOUNDS}
          onCountryClick={onCountryClick}
          countryStyle={countryStyle}
        />
      </div>
      {gameStarted && (
        <div className="controls flex flex-col gap-2 justify-center items-center">
          {error && <div className="error-message">{error}</div>}
          <div>
            <span className="text-rp-text">
              {guessListPosition + 1}/{countryGuessList.length}
            </span>
          </div>
          {targetCountry && !isCorrect && (
            <div className="target-country text-rp-text">
              Find <span className="font-bold">{targetCountry.name}</span>
            </div>
          )}
          {message && (
            <div className={`message ${isCorrect ? "correct" : "wrong"}`}>
              {message}
            </div>
          )}
          {isCorrect && (
            <Button onClick={() => selectNextCountry()}>Next Country</Button>
          )}
        </div>
      )}
    </div>
  );
}

export default GameContainer;
