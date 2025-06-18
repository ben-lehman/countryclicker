import { useState } from "react";
import { Continent } from "@/data/WorldMapData.ts";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StartMenuProps {
  handleGameStart: (continent: Continent) => void;
}

function StartMenu({ handleGameStart }: StartMenuProps) {
  const [gameMode, setGameMode] = useState("world");
  const [targetContinent, setTargetContinent] = useState<Continent>(
    Continent.All,
  );

  return (
    <div className="start-menu flex flex-wrap gap-x-4 justify-center items-center p-8 z-9999 bg-rp-base border-2 border-color-rp-gold shadow-md shadow-black">
      <span className="text-rp-text">Selllllect a Game Mode</span>
      <Tabs
        defaultValue="world"
        className="w-full"
        onValueChange={(v) => setGameMode(v)}
      >
        <TabsList
          className="bg-rp-surface w-full"
        >
          <TabsTrigger
            value="world"
            className="text-rp-subtle hover:text-rp-text data-[state=active]:text-rp-text bg-rp-surface data-[state=active]:bg-rp-muted/10 cursor-pointer rounded-none focus:outline-none focus:ring-rp-foam ring-rp-foam focus:ring-inset ring-inset-rp-foam"
          >
            World
          </TabsTrigger>
          <TabsTrigger
            value="continent"
            className="text-rp-subtle hover:text-rp-text data-[state=active]:text-rp-text bg-rp-surface data-[state=active]:bg-rp-muted/10 cursor-pointer rounded-none"
          >
            Continents
          </TabsTrigger>
        </TabsList>
        <TabsContent value="world">
          <div className="h-[68px] w-full"></div>
        </TabsContent>
        <TabsContent value="continent">
          <div className="flex justify-center my-4">
            <Select
              onValueChange={(v: Continent) => {
                setTargetContinent(v);
              }}
            >
              <SelectTrigger className="w-[180px] text-rp-text">
                <SelectValue placeholder="Select Continent" />
              </SelectTrigger>
              <SelectContent className="bg-rp-overlay z-9999">
                <SelectItem value={Continent.Africa} className="text-rp-text">
                  Africa
                </SelectItem>
                <SelectItem value={Continent.Asia} className="text-rp-text">
                  Asia
                </SelectItem>
                <SelectItem value={Continent.Europe} className="text-rp-text">
                  Europe
                </SelectItem>
                <SelectItem
                  value={Continent.NorthAmerica}
                  className="text-rp-text"
                >
                  North America
                </SelectItem>
                <SelectItem value={Continent.Oceania} className="text-rp-text">
                  Oceania
                </SelectItem>
                <SelectItem
                  value={Continent.SouthAmerica}
                  className="text-rp-text"
                >
                  South America
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </TabsContent>
      </Tabs>
      <Button
        disabled={gameMode === "continent" && targetContinent === Continent.All}
        onClick={() => {
          if (gameMode === "world") {
            handleGameStart(Continent.All);
          } else {
            handleGameStart(targetContinent);
          }
        }}
        className="bg-rp-muted/10 hover:bg-rp-muted/20 text-rp-text cursor-pointer"
      >
        Start Game
      </Button>
    </div>
  );
}

export default StartMenu;
