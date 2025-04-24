package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"
	"slices"
	"strings"

	"github.com/ben-lehman/countryclicker/server/internal/countries"
	"github.com/paulmach/orb"
	"github.com/paulmach/orb/geojson"
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

type ClientGeoJSON map[string]Feature

type Properties struct {
	Name      string     `json:"name"`
	Type      string     `json:"type"`
	AdminISO  string     `json:"adm0_iso"`
	Continent string     `json:"continent"`
	Subregion string     `json:"subregion"`
	Bbox      [4]float64 `json:"bbox"` // [west, south, east, north]
}

type NewFeatureCollection struct {
	Type     string       `json:"type"` // Should be "FeatureCollection"
	Features []NewFeature `json:"features"`
}

type NewFeature struct {
	Type       string        `json:"type"` // Should be "Feature"
	Geometry   Geometry      `json:"geometry"`
	Properties NewProperties `json:"properties"`
}

type NewProperties struct {
	Name      string     `json:"name"`
	Type      string     `json:"type"`
	AdminISO  string     `json:"adminISO"`
	Continent string     `json:"continent"`
	Subregion string     `json:"subregion"`
	Bbox      [4]float64 `json:"bbox"` // [west, south, east, north]
}

// original countries geoJSON
// filter original
// geoJSONtoCountryList
// geoJSON to Continent
//   - add continent bbox
func main() {
  // renamePropOneShot()
	// filterGeoJSON()
	// geoJSONToCountryList()
	// groupCountryListByContinent()
}

func renamePropOneShot() {
	inputPath := "../../../data/countriesv4francefix.geo.json"
	outputPath := "../../../data/countriesv5.geo.json"

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

	var filteredCollection NewFeatureCollection
	filteredCollection.Type = featureCollection.Type
	for _, feature := range featureCollection.Features {
		newProperties := NewProperties{
			Name:      feature.Properties.Name,
			Type:      feature.Properties.AdminISO,
			AdminISO:  feature.Properties.AdminISO,
			Continent: feature.Properties.Continent,
			Subregion: feature.Properties.Subregion,
			Bbox:      feature.Properties.Bbox,
		}

		filteredCollection.Features = append(filteredCollection.Features, NewFeature{
			Type:       feature.Type,
			Geometry:   feature.Geometry,
			Properties: newProperties,
		})
	}

	parsedJSON, err := json.Marshal(filteredCollection)
	if err != nil {
		log.Fatalf("Unable to marshal filtered collection: %v", err)
	}

	parsedFile, err := os.Create(outputPath)
	if err != nil {
		log.Fatalf("Unable to create file at %s, %v", outputPath, err)
	}
	defer parsedFile.Close()

	err = os.WriteFile(outputPath, parsedJSON, 0644)
	if err != nil {
		log.Fatalf("Unable to copy file %s to %s, %v", inputPath, outputPath, err)
	}

	fmt.Printf("Successfully filtered data from %s to %s", inputPath, outputPath)
}

func filterGeoJSON() {
	inputPath := "../../../data/countriesv4.geo.json"
	outputPath := "../../../data/countriesv4francefix.geo.json"

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

	filterCountryISO := []string{"ATA", "ATF"}

	var filteredCollection FeatureCollection
	filteredCollection.Type = featureCollection.Type
	for _, feature := range featureCollection.Features {
		if !slices.Contains(filterCountryISO, feature.Properties.AdminISO) {
			filteredCollection.Features = append(filteredCollection.Features, feature)
		}
	}

	parsedJSON, err := json.Marshal(filteredCollection)
	if err != nil {
		log.Fatalf("Unable to marshal filtered collection: %v", err)
	}

	parsedFile, err := os.Create(outputPath)
	if err != nil {
		log.Fatalf("Unable to create file at %s, %v", outputPath, err)
	}
	defer parsedFile.Close()

	err = os.WriteFile(outputPath, parsedJSON, 0644)
	if err != nil {
		log.Fatalf("Unable to copy file %s to %s, %v", inputPath, outputPath, err)
	}

	fmt.Printf("Successfully filtered data from %s to %s", inputPath, outputPath)
}

func geoJSONToCountryList() {
	inputPath := "../../../data/countriesv4francefix.geo.json"
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
			Type:      feature.Properties.Type,
			AdminISO:  feature.Properties.AdminISO,
			Continent: feature.Properties.Continent,
			Subregion: feature.Properties.Subregion,
			Bbox:      feature.Properties.Bbox,
		}

		parsedCountries[i] = country
	}

	parsedJSON, err := json.Marshal(parsedCountries)
	if err != nil {
		log.Fatalf("Unable to marshal parsed countries: %v", err)
	}

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

type ContinentData struct {
	Bbox      [4]float64              `json:"bbox"`
	Countries countries.CountriesData `json:"countries"`
}

func groupCountryListByContinent() {
	inputPath := "../../../data/countriesv4francefix.geo.json"
	inputListPath := "../../data/countries-list.json"
	outputDir := "../../data/"

	// read countries list
	jsonFile, err := os.Open(inputPath)
	if err != nil {
		log.Fatalf("Unable to open country data file at %s: %v", inputPath, err)
	}
	defer jsonFile.Close()

	byteData, err := io.ReadAll(jsonFile)
	if err != nil {
		log.Fatalf("Unable to read jsonFile %s: %v", inputPath, err)
	}

	fc, err := geojson.UnmarshalFeatureCollection(byteData)
	if err != nil {
		log.Fatalf("Error unmarshalling GeoJSON FeatureCollection from '%s': %v\n", inputPath, err)
	}

	continentFeatures := make(map[string][]*geojson.Feature)
	continentBbox := make(map[string][4]float64)
	worldOverallBound := orb.Bound{}
	firstPass := false
	for _, feature := range fc.Features {
		cont := feature.Properties.MustString("continent")
		cont = strings.ToLower(strings.ReplaceAll(cont, " ", ""))
		continentFeatures[cont] = append(continentFeatures[cont], feature)

		featureBound := feature.Geometry.Bound()
		if featureBound.IsEmpty() {
			log.Printf("Feature %v has empty/invalid geometry bound, skipping", feature.ID)
			continue
		}

		if firstPass {
			worldOverallBound = featureBound
			firstPass = false
		} else {
			worldOverallBound = worldOverallBound.Extend(featureBound.Min)
			worldOverallBound = worldOverallBound.Extend(featureBound.Max)
		}

		log.Printf("**** world bound: %v", worldOverallBound)
	}

	for cont, features := range continentFeatures {
		overallBound := orb.Bound{}
		firstPass := true
		log.Println("==================== calculated bbox for ", cont)
		for _, feature := range features {
			if feature.Geometry == nil {
				log.Printf("Feature %v has nil geometry, skipping", feature.ID)
				continue
			}

			// skip russia since it's HUGE
			if feature.Properties.MustString("adm0_iso") == "RUS" {
				continue
			}

			featureBound := feature.Geometry.Bound()
			if featureBound.IsEmpty() {
				log.Printf("Feature %v has empty/invalid geometry bound, skipping", feature.ID)
				continue
			}

			if firstPass {
				overallBound = featureBound
				firstPass = false
			} else {
				overallBound = overallBound.Extend(featureBound.Min)
				overallBound = overallBound.Extend(featureBound.Max)
			}
		}

		bbox := [4]float64{
			overallBound.Min.Lon(), // West
			overallBound.Min.Lat(), // South
			overallBound.Max.Lon(), // East
			overallBound.Max.Lat(), // North
		}
		continentBbox[cont] = bbox
		log.Println("cont bbox", continentBbox)
	}

	// read countries list
	jsonListFile, err := os.Open(inputListPath)
	if err != nil {
		log.Fatalf("Unable to open country data file at %s: %v", inputPath, err)
	}
	defer jsonFile.Close()

	byteListData, err := io.ReadAll(jsonListFile)
	if err != nil {
		log.Fatalf("Unable to read jsonFile %s: %v", inputPath, err)
	}

	var countriesList countries.CountriesData
	err = json.Unmarshal(byteListData, &countriesList)
	if err != nil {
		log.Fatalf("Unable to unmarshal byteData: %v", err)
	}

	// create map of countries with continent keys
	Continents := make(map[string]ContinentData)
	for _, country := range countriesList {
		cont := strings.ToLower(country.Continent)
		cont = strings.ReplaceAll(cont, " ", "")
		Continents[cont] = ContinentData{
			Bbox:      continentBbox[cont],
			Countries: append(Continents[cont].Countries, country),
		}
	}

	// each continent key writes to a <continent>-countries-list.json
	for cont, data := range Continents {
		jsonData, err := json.Marshal(data)
		if err != nil {
			log.Fatalf("Unable to marshal countries: %v", err)
		}

		outputPath := fmt.Sprintf("%s%s-countries-list.json", outputDir, strings.ToLower(cont))
		parsedFile, err := os.Create(outputPath)
		if err != nil {
			log.Fatalf("Unable to create file at %s, %v", outputPath, err)
		}
		defer parsedFile.Close()

		err = os.WriteFile(outputPath, jsonData, 0644)
		if err != nil {
			log.Fatalf("Unable to copy file %s to %s, %v", inputPath, outputPath, err)
		}

		fmt.Printf("Successfull parsed data from %s to %s", inputPath, outputPath)
	}
}

func geoJSONForClient() {
	inputPath := "../../../data/countriesv4.geo.json"
	outputPath := "../../../data/client.geo.json"

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

	var parsedCountries ClientGeoJSON
	parsedCountries = make(ClientGeoJSON)
	for _, feature := range featureCollection.Features {
		iso := feature.Properties.AdminISO
		parsedCountries[iso] = feature
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
