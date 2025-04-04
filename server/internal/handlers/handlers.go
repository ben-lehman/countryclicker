package handlers

import (
	"log"

	"github.com/ben-lehman/countryclicker/server/internal/countries"
)

type Dependencies interface {
  GetLogger() *log.Logger
  GetCountries() countries.CountriesData
}

type Handlers struct{
  deps Dependencies
}

func NewHandlers(deps Dependencies) *Handlers {
  if deps == nil {
    panic("handlers.NewHandlers: dependencies cannot be nil")
  }

  if deps.GetLogger() == nil {
    panic("handlers.NewHandlers: GetLogger() dependency cannot be nil")
  }

  return &Handlers{
    deps: deps,
  }
}


