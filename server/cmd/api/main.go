package main

import (
	"log"
	"net/http"

  "github.com/ben-lehman/country-clicker/server/internal/countries"
)


func main() {
  // Set up Data
  filePath := "../../../data/countriesv2.json"
  countriesData, err := countries.SetUp(filePath)
  if err != nil {
    log.Fatalf("Error setting up country data: %v", err)
  }

  // Set up Server
  const port = "8080"

  mux := http.NewServeMux()
  mux.HandleFunc("GET /", func(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "text/plain; charset=utf-8")
    w.WriteHeader(http.StatusOK)
    w.Write([]byte(http.StatusText(http.StatusOK)))
  })

  server := &http.Server{
    Addr: ":" + port,
    Handler: mux,
  }

  log.Printf("Listening on port: %s", port)
  log.Fatal(server.ListenAndServe())
}

type CountryData struct {
	Type     string `json:"type"`
	Features []struct {
		Type     string `json:"type"`
		Geometry struct {
			Type        string          `json:"type"`
			Coordinates [][][][]float64 `json:"coordinates"`
		} `json:"geometry"`
		Properties struct {
			Name      string    `json:"NAME"`
			IsoA2     string    `json:"ISO_A2"`
			IsoA3     string    `json:"ISO_A3"`
			Continent string    `json:"CONTINENT"`
			Subregion string    `json:"SUBREGION"`
			RegionWb  string    `json:"REGION_WB"`
			Bbox      []float64 `json:"bbox"`
		} `json:"properties"`
	} `json:"features"`
}
