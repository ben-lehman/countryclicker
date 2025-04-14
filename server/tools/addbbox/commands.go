package main

type cliCommand struct {
	name        string
	description string
	callback    func([]string)
}

var commands map[string]cliCommand

func initCommands() {
	commands = map[string]cliCommand{
		"countries": {
			name:        "countries",
      description: "Adds boundary box to countries GeoJSON. Usage: countries <input-file> <output-file>",
			callback:    AddBBoxToGeoJSON,
		},
    "continent": {
      name: "continent",
      description: "Adds boundary box to continent. Usage: continent <input-file> <output-file>",
      callback: addBBoxToContinent,
    },
    "help": {
      name: "hep",
      description: "displays help information",
      callback: commandHelp,
    },
  }
}
