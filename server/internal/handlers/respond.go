package handlers

import (
	"encoding/json"
	"net/http"
)

func (h *Handlers) respondWithError(w http.ResponseWriter, code int, msg string, err error) {
  logger := h.deps.GetLogger()

	if err != nil {
		logger.Println(err)
	}
	if code > 499 {
		logger.Printf("Responding with 5XX error: %s", msg)
	}
	type errorResponse struct {
		Error string `json:"error"`
	}
	h.respondWithJSON(w, code, errorResponse{
		Error: msg,
	})
}

func (h *Handlers) respondWithJSON(w http.ResponseWriter, code int, payload interface{}) {
  logger := h.deps.GetLogger()

	w.Header().Set("Content-Type", "application/json")
	data, err := json.Marshal(payload)
	if err != nil {
		logger.Printf("Error marshalling JSON: %s", err)
		w.WriteHeader(500)
		return
	}
	w.WriteHeader(code)
	w.Write(data)
}
