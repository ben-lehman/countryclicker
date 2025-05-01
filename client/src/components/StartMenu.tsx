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
  const [targetContinent, setTargetContinent] = useState<Continent>(
    Continent.All,
  );

  return (
    <div className="start absolute flex flex-wrap gap-y-8 justify-center items-center p-8 z-9999 bg-rp-base border-2 border-color-rp-gold">
      <span className="text-rp-text">Select a Game Mode</span>
      <Tabs defaultValue="world" className="w-full">
        <TabsList className="bg-rp-surface w-full">
          <TabsTrigger
            value="world"
            className="text-rp-subtle hover:text-rp-text data-[state=active]:text-rp-text bg-rp-surface data-[state=active]:bg-rp-muted/10 cursor-pointer rounded-none focus:outline-none focus:ring-rp-foam ring-rp-foam focus:ring-inset ring-inset-rp-foam"
          >
            World
          </TabsTrigger>
          <TabsTrigger
            value="continents"
            className="text-rp-subtle hover:text-rp-text data-[state=active]:text-rp-text bg-rp-surface data-[state=active]:bg-rp-muted/10 cursor-pointer rounded-none"
          >
            Continents
          </TabsTrigger>
        </TabsList>
        <TabsContent value="world" className="text-rp-text">
          Guess Countries from the whole world selected at random.
        </TabsContent>
        <TabsContent value="continents">
          <Select
            onValueChange={(v: Continent) => {
              setTargetContinent(v);
            }}
          >
            <SelectTrigger className="w-[180px] text-rp-text">
              <SelectValue placeholder="Select Continent" />
            </SelectTrigger>
            <SelectContent className="bg-rp-overlay z-9999">
              <SelectItem
                value={Continent.Africa}
                className="text-rp-text"
              >
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
        </TabsContent>
      </Tabs>
      <Button onClick={() => handleGameStart(targetContinent)} className="cursor-pointer">
        Start Game
      </Button>
    </div>
  );
}

export default StartMenu;
