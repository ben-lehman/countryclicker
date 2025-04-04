package handlers

import "net/http"

func (h *Handlers) CheckHealth(w http.ResponseWriter, r *http.Request) {
    logger := h.deps.GetLogger()
    logger.Println("handling check health")

		w.Header().Set("Content-Type", "text/plain; charset=utf-8")
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(http.StatusText(http.StatusOK)))
}
