package countries

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"
)

type MapData struct {
  AllCountries CountriesData `json:"all_countries"`
  Africa ContinentData `json:"africa"`
  Asia ContinentData `json:"asia"`
  Europe ContinentData `json:"europe"`
  NorthAmerica ContinentData `json:"north_america"`
  Oceania ContinentData `json:"oceania"`
  SouthAmerica ContinentData `json:"south_america"`
}

type CountriesData []CountryData

type ContinentData struct {
  Countries CountriesData `json:"countries"`
  Bbox [4]float64 `json:"bbox"`
}

type CountryData struct {
	Name      string     `json:"name"`
	Type      string     `json:"type"`
	AdminISO  string     `json:"adm0_iso"`
	Continent string     `json:"continent"`
	Subregion string     `json:"subregion"`
	Bbox      [4]float64 `json:"bbox"` // [west, south, east, north]
}

func SetUp(dataDir string) (MapData, error) {
  allFilePath := dataDir + "/countries-list.json"
	jsonFile, err := os.Open(allFilePath)
	if err != nil {
		log.Fatalf("Unable to open country data file at %s: %v", allFilePath, err)
	}
	defer jsonFile.Close()

	byteData, err := io.ReadAll(jsonFile)
	if err != nil {
		return MapData{}, fmt.Errorf("Unable to read jsonFile %s: %v", allFilePath, err)
	}

	var allCountries CountriesData
	err = json.Unmarshal(byteData, &allCountries)
	if err != nil {
		return MapData{}, fmt.Errorf("Unable to unmarshal byteData: %v", err)
	}

  africaFilePath := dataDir + "/africa-countries-list.json" 
  africaData, err := unMarshalContinentData(africaFilePath)
  if err != nil {
    log.Fatalf("Error reading africa data: %v", err)
  }
  asiaFilePath := dataDir + "/asia-countries-list.json" 
  asiaData, err := unMarshalContinentData(asiaFilePath)
  if err != nil {
    log.Fatalf("Error reading asia data: %v", err)
  }
  europeFilePath := dataDir + "/europe-countries-list.json" 
  europeData, err := unMarshalContinentData(europeFilePath)
  if err != nil {
    log.Fatalf("Error reading europe data: %v", err)
  }
  northamericaFilePath := dataDir + "/northamerica-countries-list.json" 
  northamericaData, err := unMarshalContinentData(northamericaFilePath)
  if err != nil {
    log.Fatalf("Error reading north america data: %v", err)
  }
  oceaniaFilePath := dataDir + "/oceania-countries-list.json" 
  oceaniaData, err := unMarshalContinentData(oceaniaFilePath)
  if err != nil {
    log.Fatalf("Error reading oceania data: %v", err)
  }
  southamericaFilePath := dataDir + "/southamerica-countries-list.json" 
  southamericaData, err := unMarshalContinentData(southamericaFilePath)
  if err != nil {
    log.Fatalf("Error reading southamerica data: %v", err)
  }

  return MapData{
    AllCountries: allCountries,
    Africa: africaData,
    Asia: asiaData,
    Europe: europeData,
    NorthAmerica: northamericaData,
    Oceania: oceaniaData,
    SouthAmerica: southamericaData,
  }, nil
}

func unMarshalContinentData(filePath string) (ContinentData, error) {
	jsonFile, err := os.Open(filePath)
	if err != nil {
		log.Fatalf("Unable to open country data file at %s: %v", filePath, err)
	}
	defer jsonFile.Close()

	byteData, err := io.ReadAll(jsonFile)
	if err != nil {
		return ContinentData{}, fmt.Errorf("Unable to read jsonFile %s: %v", filePath, err)
	}

	var countries ContinentData 
	err = json.Unmarshal(byteData, &countries)
	if err != nil {
		return ContinentData{}, fmt.Errorf("Unable to unmarshal byteData: %v", err)
	}



	return countries, nil
} 
