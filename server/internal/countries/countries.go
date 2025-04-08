package countries

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"
)

type CountriesData []CountryData

type CountryData struct {
	Name      string     `json:"NAME"`
	Type      string     `json:"type"`
	AdminISO  string     `json:"adm0_iso"`
	IsoA2     string     `json:"ISO_A2"`
	Continent string     `json:"CONTINENT"`
	Subregion string     `json:"SUBREGION"`
	Bbox      [4]float64 `json:"bbox"` // [west, south, east, north]
}

func SetUp(filePath string) (CountriesData, error) {
	jsonFile, err := os.Open(filePath)
	if err != nil {
		log.Fatalf("Unable to open country data file at %s: %v", filePath, err)
	}
	defer jsonFile.Close()

	byteData, err := io.ReadAll(jsonFile)
	if err != nil {
		return CountriesData{}, fmt.Errorf("Unable to read jsonFile %s: %v", filePath, err)
	}

	var countries CountriesData
	err = json.Unmarshal(byteData, &countries)
	if err != nil {
		return CountriesData{}, fmt.Errorf("Unable to unmarshal byteData: %v", err)
	}

	fmt.Printf("Successfully read %d features from %s\n", len(countries), filePath)
	return countries, nil
}
