package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/paulmach/orb/geojson"
	// We don't directly use orb/geo, but geojson depends on it for Bound()
	// _ "github.com/paulmach/orb/geo"
)

func main() {
	if len(os.Args) < 2 || len(os.Args) > 3 {
		fmt.Fprintf(os.Stderr, "Usage: %s <input_geojson_file> [output_geojson_file]\n", os.Args[0])
		fmt.Fprintf(os.Stderr, "If output file is omitted, the result is printed to standard output.\n")
		os.Exit(1)
	}
	inputFile := os.Args[1]
	outputFile := ""
	if len(os.Args) == 3 {
		outputFile = os.Args[2]
	}

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

	if outputFile != "" {
		err = os.WriteFile(outputFile, outputBytes, 0644)
		if err != nil {
			log.Fatalf("Error writing output file '%s': %v\n", outputFile, err)
		}
		log.Printf("Successfully wrote modified GeoJSON to '%s'\n", outputFile)
	} else {
		fmt.Println(string(outputBytes))
	}
}
