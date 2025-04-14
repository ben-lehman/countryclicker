package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/ben-lehman/countryclicker/server/internal/countries"
	"github.com/ben-lehman/countryclicker/server/internal/handlers"
	"github.com/ben-lehman/countryclicker/server/internal/middleware"
)

type Application struct {
	logger  *log.Logger
	mapData countries.MapData
}

func (a *Application) GetLogger() *log.Logger {
	return a.logger
}

func (a *Application) GetMapData() countries.MapData {
	return a.mapData
}

func main() {
	// logging
	logger := log.New(os.Stdout, "", log.Ldate|log.Ltime)

	// load data
	dataDir, err := filepath.Abs("../../data")
	if err != nil {
		logger.Fatalf("Unable to get country data file: %v", err)
	}

	mapData, err := countries.SetUp(dataDir)
	if err != nil {
		logger.Fatalf("Error setting up country data: %v", err)
	}

	app := &Application{
		logger:  logger,
		mapData: mapData,
	}

	// Set up Server
	const port = "8080"

	h := handlers.NewHandlers(app)
	mux := http.NewServeMux()
	mux.HandleFunc("POST /api/next-country", h.GetNextCountry)
	mux.HandleFunc("GET /api/checkhealth", h.CheckHealth)

	corsAppliedMux := middleware.EnableCORS(mux)

	server := &http.Server{
		Addr:    ":" + port,
		Handler: corsAppliedMux,
	}

	logger.Printf("Listening on port: %s", port)
	logger.Fatal(server.ListenAndServe())
}
