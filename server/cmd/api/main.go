package main

import (
	"log"
	"net/http"
)

func main() {
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
