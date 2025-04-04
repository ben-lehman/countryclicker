package countries

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"
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
	IsoA2     string    `json:"ISO_A2"`
	IsoA3     string    `json:"ISO_A3"`
	Continent string    `json:"CONTINENT"`
	Subregion string    `json:"SUBREGION"`
	RegionWb  string    `json:"REGION_WB"`
	Bbox      []float64 `json:"bbox"` // [west, south, east, north] 
}

func SetUp(filePath string) (FeatureCollection, error) {
  jsonFile, err := os.Open(filePath)
  if err != nil {
    log.Fatalf("Unable to open country data file at %s: %v", filePath, err)
  }
  defer jsonFile.Close()

  byteData, err := io.ReadAll(jsonFile)
  if err != nil {
    return FeatureCollection{}, fmt.Errorf("Unable to read jsonFile %s: %v", filePath, err)
  }

  var countries FeatureCollection;
  err = json.Unmarshal(byteData, &countries)
  if err != nil {
    return FeatureCollection{}, fmt.Errorf("Unable to unmarshal byteData: %v", err)
  }

  fmt.Printf("Successfully read %d features from %s\n", len(countries.Features), filePath)

  // Process Polygon and MultiPolygon Feature Geometry
  for _, feature := range countries.Features {
    switch feature.Geometry.Type {
    case "Polygon":
      _, ok := feature.Geometry.Coordinates.([][][]float64)
      if !ok {
        fmt.Println("Error: could not assert coordinates for Polygon: ", feature.Properties.Name)
        continue
      }
    case "MultiPolygon":
      _, ok := feature.Geometry.Coordinates.([][][][]float64)
      if !ok {
        fmt.Println("Error: couldn not assert coordinates for MultiPolygon: ", feature.Properties.Name)
        continue
      }
    default:
      fmt.Println("Error: unknown Geometry type for: ", feature.Properties.Name)
    }
  }

  return countries, nil
}

