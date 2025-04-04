package main

import (
	"log"
	"net/http"
	"os"

	"github.com/ben-lehman/countryclicker/server/internal/countries"
	"github.com/ben-lehman/countryclicker/server/internal/handlers"
)

type Application struct {
	logger    *log.Logger
	countries countries.CountriesData
}

func (a *Application) GetLogger() *log.Logger {
  return a.logger
}

func (a *Application) GetCountries() countries.CountriesData {
  return a.countries
}

func main() {
	// logging
	logger := log.New(os.Stdout, "", log.Ldate|log.Ltime)

	// load data
	filePath := "../../../data/countries-list.json"
	countriesData, err := countries.SetUp(filePath)
	if err != nil {
		logger.Fatalf("Error setting up country data: %v", err)
	}

	app := &Application{
		logger:    logger,
		countries: countriesData,
	}

	// Set up Server
	const port = "8080"

  h := handlers.NewHandlers(app)
	mux := http.NewServeMux()
  mux.HandleFunc("GET /next-country", h.GetNextCountry)
	mux.HandleFunc("GET /check-health", h.CheckHealth)

	server := &http.Server{
		Addr:    ":" + port,
		Handler: mux,
	}

	logger.Printf("Listening on port: %s", port)
	logger.Fatal(server.ListenAndServe())
}

