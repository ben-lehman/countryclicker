import { useState } from "react";
import MapChart from "./MapChart.tsx";
import AutocompleteList from "./AutocompleteList.tsx";
import {geodata, Country, Countries} from './countryData.ts';
import "./App.css";

// import am5geodata_data_countries2 from "@amcharts/amcharts5-geodata/data/countries2";
function App() {
  const typedCountryData = geodata as Countries;
  const allCountryCodes = Object.keys(typedCountryData);
  const allCountryNames = Object.entries(typedCountryData).map(([key, value]) => {
    return value.country
  })

  const [chosenCountry, setChosenCountry] = useState<Country>(
    getRandomCountry(allCountryCodes),
  );
  // const [guesses, setGuesses] = useState<string[]>(['', '', '', '', '', '']);

  function getRandomCountry(countries: Array<string>, currentCountryName = "") {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const countryCode: string = countries[randomIndex];

    if (currentCountryName == countryCode) {
      return getRandomCountry(countries, currentCountryName);
    }
    const country: Country = typedCountryData[countryCode];
    return country;
  }

  function guessCountry (guess : string) {
    if(guess === chosenCountry.country) {
      // correct message
    } else {
    //  setGuessRemaining((prev) => prev + 1);

    }
  }

  return (
    <>
      <div className="card">
        <MapChart chosenCountry={chosenCountry} />
        <p>Current Country: {chosenCountry.country} </p>
        <button
          onClick={() =>
            setChosenCountry(
              getRandomCountry(allCountryCodes, chosenCountry.country),
            )
          }
        >
          Chose New Country
        </button>
      </div>
      <AutocompleteList options={allCountryNames} />
    </>
  );
}

export default App;

