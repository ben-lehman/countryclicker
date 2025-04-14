package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/paulmach/orb"
	"github.com/paulmach/orb/geojson"
	// We don't directly use orb/geo, but geojson depends on it for Bound()
	// _ "github.com/paulmach/orb/geo"
)

func main() {
	initCommands()
	if len(os.Args) < 2 {
		fmt.Fprintf(os.Stderr, "Usage: %s <command> <...args>\n", os.Args[0])
		os.Exit(1)
	}

	cmd := os.Args[1]
	args := os.Args[:2]

	command, exists := commands[cmd]
	if !exists {
		fmt.Fprintf(os.Stderr, "Unknown command. List available commands by running help\n")
		os.Exit(1)
	}

	command.callback(args)
}

type Geometry struct {
	Type string `json:"type"` // "Polygon", "MultiPolygon", etc.
	// Use any to hold coordinates of varying structure
	Coordinates any `json:"coordinates"`
}

/*
 func GetBBoxFromGeometrySlice (geometries []geojson.Geometry) [4]float64 {
  overallBound := orb.Bound{}
  
  for geometry := range geometries {

    gBound := geometry
    if gBound.IsEmpty() {
      continue
    }

    overallBound.Extend(gBound)
  } 

  bbox := []float64{
      overallBound.Min.Lon(), // West
			overallBound.Min.Lat(), // South
			overallBound.Max.Lon(), // East
			overallBound.Max.Lat(), // North
  }
}
*/

func AddBBoxToGeoJSON(args []string) {
	if len(args) != 2 {
		fmt.Fprintf(os.Stderr, "Usage: countries <input_geojson_file> [output_geojson_file]\n")
		os.Exit(1)
	}
	inputFile := args[0]
	outputFile := args[1]

	inputBytes, err := os.ReadFile(inputFile)
	if err != nil {
		log.Fatalf("Error reading input file '%s': %v\n", inputFile, err)
	}

	fc, err := geojson.UnmarshalFeatureCollection(inputBytes)
	if err != nil {
		log.Fatalf("Error unmarshalling GeoJSON FeatureCollection from '%s': %v\n", inputFile, err)
	}

	log.Printf("Processing %d features...\n", len(fc.Features))
	featuresModified := 0
	for i, feature := range fc.Features {
		if feature.Geometry == nil {
			log.Printf("Feature %d (ID: %v) has nil geometry, skipping bbox calculation.\n", i, feature.ID)
			continue // Skip features without geometry
		}

		// Calculate the bounding box for the feature's geometry
		bound := feature.Geometry.Bound()

		if bound.IsEmpty() {
			log.Printf("Feature %d (ID: %v) has empty/invalid geometry bounds, skipping bbox assignment.\n", i, feature.ID)
			continue
		}

		bbox := []float64{
			bound.Min.Lon(), // West
			bound.Min.Lat(), // South
			bound.Max.Lon(), // East
			bound.Max.Lat(), // North
		}

		if feature.Properties == nil {
			fc.Features[i].Properties = make(map[string]interface{})
			log.Printf("Initialized nil Properties map for Feature %d (ID: %v)\n", i, feature.ID)
		}

		fc.Features[i].Properties["bbox"] = bbox

		featuresModified++
	}
	log.Printf("Added bounding boxes to %d features.\n", featuresModified)

	outputBytes, err := json.Marshal(fc)
	if err != nil {
		log.Fatalf("Error marshalling modified GeoJSON: %v\n", err)
	}

	err = os.WriteFile(outputFile, outputBytes, 0644)
	if err != nil {
		log.Fatalf("Error writing output file '%s': %v\n", outputFile, err)
	}
	log.Printf("Successfully wrote modified GeoJSON to '%s'\n", outputFile)
}

func commandHelp(args []string) {
	fmt.Println("Welcome to the Pokedex!")
	fmt.Printf("Useage:\n\n")
	for _, value := range commands {
		fmt.Printf("%s: %s\n", value.name, value.description)
	}
}
