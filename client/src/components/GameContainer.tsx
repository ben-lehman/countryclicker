import { Feature } from "geojson";
import { useCallback, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import StartMenu from "./StartMenu.tsx";
import WorldMap from "./WorldMap.tsx";
import {
  getExpandedBbox,
  Continent,
  continentViewBox,
  CountryData,
  WORLDMAPBOUNDS,
  getCountryGuessList,
} from "@/data/WorldMapData.ts";
import { Button } from "@/components/ui/button";

type GameState = "start" | "running" | "done";

function GameContainer() {
  const [gameState, setGameState] = useState<GameState>("start");
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
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [countryGuessList, setCountryGuessList] = useState<CountryData[]>([]);
  const [guessListPosition, setGuessListPosition] = useState(0);

  const handleGameStart = async (continent: Continent) => {
    setTargetContinent(continent);
    setGameState("running");
    setGuessListPosition(0);
    const guessList = await getCountryGuessList(continent);
    setCountryGuessList(guessList);
  };

  const selectNewGameMode = () => {
    resetGameState();
    setGameState("start")
    setViewBounds(WORLDMAPBOUNDS);
    setTotalAttempts(0);
  };

  const resetGameState = () => {
    setAttempts(0);
    setTargetCountry(null);
    setIsCorrect(false);
    setError(null);
    setMessage(null);
  };

  const selectNextCountry = () => {
    resetGameState();

    const nextCountry = countryGuessList[guessListPosition];
    setTargetCountry(nextCountry);
    if (targetContinent === Continent.All) {
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
      setTotalAttempts((att) => att + 1);
      const countryName = feature.properties?.name;
      const targetName = targetCountry?.name;

      // TODO: log guess in stats

      if (targetName && countryName && countryName === targetName) {
        setIsCorrect(true);
        if (guessListPosition === countryGuessList.length - 1) {
          setGameState("done");
        }
        setGuessListPosition((pos) => pos + 1);
        setMessage(`Correct! You found ${countryName}`);
      } else if (countryName) {
        setMessage(`Wrong! That was ${countryName}. Try again!`);
      }
    },
    [targetCountry, attempts],
  );


  return (
    <div className="game-container w-full h-full p-4">
      <div className="flex justify-between items-center mb-2 max-w-7xl mx-auto">
        <h1 className="logo text-rp-text pb-0 mb-0">COUNTRY CLICKER</h1>
      </div>
      {gameState === "start" ? (
        <>
          <StartMenu handleGameStart={handleGameStart} />
          <div
            className="blur-sm"
            style={{
              height: "80vh",
              width: "100%",
              maxWidth: "80rem",
              margin: "0 auto",
              backgroundColor: "#1f1d2e",
            }}
          ></div>
        </>
      ) : (
        <>
          {gameState === "done" && (
            <div className="absolute top-[50%] left-[50%] w-[350px] h-[280px] -ml-[175px] -mt-[140px] flex flex-wrap gap-x-4 justify-center items-center p-4 z-9999 bg-rp-base border-2 border-color-rp-gold">
              <span className="w-full text-rp-text text-center">Finished!</span>
              <span className="w-full text-rp-text text-center">
                Accuracy:{" "}
                {((countryGuessList.length / totalAttempts) * 100).toFixed(2)}%
              </span>
              <div className="flex justify-between w-full">
                <Button
                  className="bg-rp-muted/10 hover:bg-rp-muted/20 text-rp-text cursor-pointer"
                  onClick={() => handleGameStart(targetContinent)}
                >
                  Retry
                </Button>
                <Button
                  className="bg-rp-muted/10 hover:bg-rp-muted/20 text-rp-text cursor-pointer"
                  onClick={() => selectNewGameMode()}
                >
                  New Gamemode
                </Button>
                <Button className="bg-rp-muted/10 hover:bg-rp-muted/20 text-rp-text cursor-pointer">
                  Stats
                </Button>
              </div>
            </div>
          )}
          <div className={`${gameState === "done" && "blur-sm"}`}>
            <WorldMap
              targetCountry={targetCountry}
              attempts={attempts}
              viewBounds={viewBounds || WORLDMAPBOUNDS}
              onCountryClick={onCountryClick}
            />
          </div>
          <div className="w-full my-4 bg-rp-foam/10">
            <div className="h-12 max-w-7xl mx-auto px-4 flex justify-between items-center">
              {error && <div className="error-message">{error}</div>}
              <div>
                <span className="text-rp-foam">
                  {guessListPosition}/{countryGuessList.length}
                </span>
              </div>
              {targetCountry && !isCorrect && (
                <div className="target-country text-rp-foam">
                  Find <span className="font-bold">{targetCountry.name}</span>
                </div>
              )}
              {message && (
                <div className={`message ${isCorrect ? "correct" : "wrong"}`}>
                  {message}
                </div>
              )}
              {isCorrect && (
                <Button onClick={() => selectNextCountry()}>
                  Next Country
                </Button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default GameContainer;
