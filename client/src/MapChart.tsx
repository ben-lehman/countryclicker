import { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import {
  AF_geodata,
  AS_geodata,
  EU_geodata,
  NA_geodata,
  OC_geodata,
  SA_geodata,
  Country,
} from "./countryData.ts";

function MapChart({ chosenCountry }: { chosenCountry: Country }) {
  const includedCountries = getCountriesFromContinent(
    chosenCountry.continent_code,
  );
  const includedCountriesList = Object.keys(includedCountries);
  console.log('data', am5geodata_worldLow);

  function getCountriesFromContinent(continent_code: string) {
    switch (continent_code) {
      case "AF":
        return AF_geodata;
      case "AS":
        return AS_geodata;
      case "EU":
        return EU_geodata;
      case "NA":
        return NA_geodata;
      case "OC":
        return OC_geodata;
      case "SA":
        return SA_geodata;
      default:
        throw new Error("invalid continent_code");
    }
  }

  const mapChartRef: React.RefObject<am5map.MapChart | null> = useRef(null);

  useLayoutEffect(() => {
    console.log("cc", chosenCountry);
    const root = am5.Root.new("mapchartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    const mapChart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoNaturalEarth1(),
        zoomLevel: 2,
      }),
    );

    const polygonSeries = mapChart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        include: includedCountriesList,
      }),
    );
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
      fill: am5.color(0xaaaaaa),
    });

    polygonSeries.mapPolygons.template.adapters.add("fill", (fill, target) => {
      if (
        (target.dataItem?.dataContext as { id: string })?.id ===
        chosenCountry.country_code
      ) {
        return am5.color(0xff0000); // Red color for chosen country
      }
      return fill;
    });

    polygonSeries.events.on("datavalidated", () => {
      const country = polygonSeries.getDataItemById(chosenCountry.country_code);
      if (country) {
        polygonSeries.zoomToDataItem(country);
      }
    });

    polygonSeries.mapPolygons.template.events.on("click", function(ev) {
      // console.log(ev.target.dataItem.dataContext);
    });

    mapChartRef.current = mapChart;

    return () => {
      root.dispose();
    };
  }, [chosenCountry, includedCountriesList]);

  return (
    <div id="mapchartdiv" style={{ height: "500px", width: "500px" }}></div>
  );
}

export default MapChart;
