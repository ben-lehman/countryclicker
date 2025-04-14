package handlers

import (
	"encoding/json"
	"fmt"
	"math"
	"math/rand"
	"net/http"

	"github.com/ben-lehman/countryclicker/server/internal/countries"
)

func (h *Handlers) GetNextCountry(w http.ResponseWriter, r *http.Request) {
	type parameters struct {
		CurrentCountry string `json:"current_country"`
		Continent      string `json:"continent"`
	}
	type response struct {
		countries.CountryData
		ExpandedBbox [4]float64 `json:"expanded_bbox"` // [west, south, east, north]
	}

	logger := h.deps.GetLogger()
	mapData := h.deps.GetMapData()

	logger.Println("Handling /api/next-country")

	decoder := json.NewDecoder(r.Body)
	params := parameters{}
	err := decoder.Decode(&params)
	if err != nil {
		logger.Println("params: ", r.Body)
		h.respondWithError(w, http.StatusInternalServerError, "Couldn't decode parameters", err)
		return
	}

	var countriesList countries.CountriesData
	var expandedBbox [4]float64
	if params.Continent == "" {
		countriesList = mapData.AllCountries
	} else {
		countriesList, expandedBbox, err = getCountriesFromContinent(mapData, params.Continent)
    if err != nil {
      h.respondWithError(w, http.StatusBadRequest, "Couldn't get continent data", err)
      return
    }
	}

	currentCountry := params.CurrentCountry
	var nextCountry countries.CountryData
	for {
		randomIndex := rand.Intn(len(countriesList))
		nextCountry = countriesList[randomIndex]

		if nextCountry.AdminISO != currentCountry {
			break
		}
	}

	if params.Continent == "" {
		expandedBbox = ExpandBoundingBox(nextCountry.Bbox)
	}
	logger.Printf("Sending next country: %s\n", nextCountry.AdminISO)
	h.respondWithJSON(w, http.StatusOK, response{
		CountryData:  nextCountry,
		ExpandedBbox: expandedBbox,
	})
}

func getCountriesFromContinent(mapData countries.MapData, cont string) (countries.CountriesData, [4]float64, error) {
	switch cont {
	case "africa":
		return mapData.Africa.Countries, mapData.Africa.Bbox, nil
	case "asia":
		return mapData.Asia.Countries, mapData.Asia.Bbox, nil
	case "europe":
		return mapData.Europe.Countries, mapData.Europe.Bbox, nil
	case "northamerica":
		return mapData.NorthAmerica.Countries, mapData.NorthAmerica.Bbox, nil
	case "oceania":
		return mapData.Oceania.Countries, mapData.Oceania.Bbox, nil
	case "southamerica":
		return mapData.SouthAmerica.Countries, mapData.SouthAmerica.Bbox, nil
	default:
		return countries.CountriesData{}, [4]float64{}, fmt.Errorf("Invalid continent")
	}
}

/**
* Take boundary box from a specific country and return an expanded boundary box
* the targetted country should be fully in view of the expanded boundary box
* but it's postion should be randomized within the new boundary box
 */
func ExpandBoundingBox(bbox [4]float64) [4]float64 {
	const minExpansionFactor = 2
	const maxExpansionFactor = 5
	expansionFactor := rand.Intn(maxExpansionFactor-minExpansionFactor) + minExpansionFactor

	// max boundaries of world map
	WESTBOUND, SOUTHBOUND, EASTBOUND, NORTHBOUND := -180.0, -90.0, 180.0, 90.0
	west, south, east, north := bbox[0], bbox[1], bbox[2], bbox[3]

	width := east - west
	height := north - south

	// set min expansion sizes for countries with very small boundary boxes
	minWidthForExpansion, minHeightForExpansion := 10.0, 10.0
	expandedWidth := math.Max(width, minWidthForExpansion) * float64(expansionFactor)
	expandedHeight := math.Max(height, minHeightForExpansion) * float64(expansionFactor)

	maxExtraWidth := EASTBOUND - WESTBOUND - width
	maxExtraHeight := NORTHBOUND - SOUTHBOUND - height
	extraWidth := math.Min(expandedWidth-width, maxExtraWidth)
	extraHeight := math.Min(expandedHeight-height, maxExtraHeight)

	// generate random offsets within available space
	randomWestOffset := rand.Intn(int(extraWidth))
	randomSouthOffset := rand.Intn(int(extraHeight))

	newWest := math.Max(WESTBOUND, west-float64(randomWestOffset))
	newSouth := math.Max(SOUTHBOUND, south-float64(randomSouthOffset))
	newEast := math.Min(EASTBOUND, newWest+expandedWidth)
	newNorth := math.Min(NORTHBOUND, newSouth+expandedHeight)

	expandedBbox := [4]float64{newWest, newSouth, newEast, newNorth}

	return expandedBbox
}
