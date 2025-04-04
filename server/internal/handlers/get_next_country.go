package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/ben-lehman/countryclicker/server/internal/countries"
)

type CountryResponse struct {
  countries.CountryData
  ZoomBBox []float64 // [west, south, east, north]
}

func (h *Handlers) GetNextCountry(w http.ResponseWriter, r *http.Request) {
  logger := h.deps.GetLogger()
  countries := h.deps.GetCountries()

  logger.Println("Handling /api/next-country")
  type parameters struct {
    CurrentCountry string `json:"current_country"`
  }

	decoder := json.NewDecoder(r.Body)
	params := parameters{}
	err := decoder.Decode(&params)
	if err != nil {
		h.respondWithError(w, http.StatusInternalServerError, "Couldn't decode parameters", err)
		return
	}
} 
