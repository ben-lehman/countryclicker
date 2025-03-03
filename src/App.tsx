import { useState } from "react";
import AutocompleteList from "./AutocompleteList.tsx";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import countrydata from "./assets/countrydata.json";

function App() {
  const typedCountryData = countrydata as Countries;
  const allCountryNames = Object.keys(typedCountryData);
  const totalCountries = allCountryNames.length;

  const [chosenCountry, setChosenCountry] = useState<Country>(
    getRandomCountry(allCountryNames),
  );

  function getRandomCountry(countries: Array<string>, currentCountryName = "") {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const countryName: string = countries[randomIndex];

    if (currentCountryName == countryName) {
      console.log("same country:", countryName, currentCountryName);
      return getRandomCountry(countries, currentCountryName);
    }
    const country: Country = typedCountryData[countryName];
    return country;
  }

  return (
    <>
      <div className="card">
        <p>Country Count {totalCountries}</p>
        <p>Current Country: {chosenCountry.displayName} </p>
        <button
          onClick={() =>
            setChosenCountry(
              getRandomCountry(allCountryNames, chosenCountry.displayName),
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

type Country = {
  displayName: string;
  url: string;
  attribution: string;
};

type Countries = {
  [key: string]: Country;
};
