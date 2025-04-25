import { useState } from "react";
import { Continent} from "@/data/WorldMapData.ts"
import { Button } from "@/components/ui/button";
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
  const [targetContinent, setTargetContinent] = useState<Continent>(Continent.All);

  return (
    <div className="start absolute flex flex-wrap gap-y-8 justify-center items-center p-8 z-9999 bg-rp-overlay border-2 border-color-rp-gold">
      <span className="text-rp-text">Select a Game Mode</span>
      <div className="w-full flex justify-between items-center">
        <Button className={`${targetContinent === Continent.All && "border-2 border-rp-gold"}`} onClick={() => setTargetContinent(Continent.All)}>World</Button>
        <span className="text-rp-text">OR</span>
        <Select
          onValueChange={(v: Continent) => {
            setTargetContinent(v);
          }}
        >
          <SelectTrigger className={`w-[180px] text-rp-text ${targetContinent !== Continent.All && "border-2 border-rp-gold"}`}>
            <SelectValue placeholder="Select Continent" />
          </SelectTrigger>
          <SelectContent className="bg-rp-overlay z-9999">
            <SelectItem
              value={Continent.Africa}
              className="text-rp-text z-9999"
            >
              Africa
            </SelectItem>
            <SelectItem value={Continent.Asia} className="text-rp-text">
              Asia
            </SelectItem>
            <SelectItem value={Continent.Europe} className="text-rp-text">
              Europe
            </SelectItem>
            <SelectItem value={Continent.NorthAmerica} className="text-rp-text">
              North America
            </SelectItem>
            <SelectItem value={Continent.Oceania} className="text-rp-text">
              Oceania
            </SelectItem>
            <SelectItem value={Continent.SouthAmerica} className="text-rp-text">
              South America
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={() => handleGameStart(targetContinent)}>Start Game</Button>
    </div>
  );
}

export default StartMenu;
