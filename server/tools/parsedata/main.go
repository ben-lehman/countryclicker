package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"

	"github.com/ben-lehman/countryclicker/server/internal/countries"
)

type FeatureCollection struct {
	Type     string    `json:"type"` // Should be "FeatureCollection"
	Features []Feature `json:"features"`
}

type Feature struct {
	Type       string     `json:"type"` // Should be "Feature"
	Geometry   Geometry   `json:"geometry"`
	Properties Properties `json:"properties"`
}

type Geometry struct {
	Type string `json:"type"` // "Polygon", "MultiPolygon", etc.
	// Use any to hold coordinates of varying structure
	Coordinates any `json:"coordinates"`
}

type Properties struct {
	Name      string    `json:"NAME"`
	Type      string    `json:"type"`
	AdminISO  string    `json:"adm0_iso"`
	IsoA2     string    `json:"ISO_A2"`
	IsoA3     string    `json:"ISO_A3"`
	Continent string    `json:"CONTINENT"`
	Subregion string    `json:"SUBREGION"`
	RegionWb  string    `json:"REGION_WB"`
	Bbox      [4]float64 `json:"bbox"` // [west, south, east, north]
}

func main() {
	inputPath := "../../../data/countriesv3.geo.json"
	outputPath := "../../data/countries-list.json"

	jsonFile, err := os.Open(inputPath)
	if err != nil {
		log.Fatalf("Unable to open country data file at %s: %v", inputPath, err)
	}
	defer jsonFile.Close()

	byteData, err := io.ReadAll(jsonFile)
	if err != nil {
		log.Fatalf("Unable to read jsonFile %s: %v", inputPath, err)
	}

	var featureCollection FeatureCollection
	err = json.Unmarshal(byteData, &featureCollection)
	if err != nil {
		log.Fatalf("Unable to unmarshal byteData: %v", err)
	}

	parsedCountries := make(countries.CountriesData, len(featureCollection.Features))
	for i, feature := range featureCollection.Features {
		country := countries.CountryData{
			Name:      feature.Properties.Name,
      Type: feature.Properties.Type,
      AdminISO: feature.Properties.AdminISO,
			IsoA2:     feature.Properties.IsoA2,
			Continent: feature.Properties.Continent,
      Subregion: feature.Properties.Subregion,
			Bbox:      feature.Properties.Bbox,
		}

		parsedCountries[i] = country
	}

	parsedJSON, err := json.Marshal(parsedCountries)

	parsedFile, err := os.Create(outputPath)
	if err != nil {
		log.Fatalf("Unable to create file at %s, %v", outputPath, err)
	}
	defer parsedFile.Close()

	err = os.WriteFile(outputPath, parsedJSON, 0644)
	if err != nil {
		log.Fatalf("Unable to copy file %s to %s, %v", inputPath, outputPath, err)
	}

	fmt.Printf("Successfull parsed data from %s to %s", inputPath, outputPath)
}
