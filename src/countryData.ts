export type Country = {
  country: string;
  country_code: `${string}${string}`;
  continent_code: string;
  continent: string;
  maps: string[];
};

export type Countries = {
  [key: string]: Country;
};


export const countryCodes = [
  "AD",
  "AE",
  "AF",
  "AG",
  "AI",
  "AL",
  "AM",
  "AO",
  "AQ",
  "AR",
  "AS",
  "AT",
  "AU",
  "AW",
  "AX",
  "AZ",
  "BA",
  "BB",
  "BD",
  "BE",
  "BF",
  "BG",
  "BH",
  "BI",
  "BJ",
  "BL",
  "BM",
  "BN",
  "BO",
  "BQ",
  "BR",
  "BS",
  "BT",
  "BV",
  "BW",
  "BY",
  "BZ",
  "CA",
  "CC",
  "CD",
  "CF",
  "CG",
  "CH",
  "CI",
  "CK",
  "CL",
  "CM",
  "CN",
  "CO",
  "CR",
  "CU",
  "CV",
  "CW",
  "CX",
  "CY",
  "CZ",
  "DE",
  "DJ",
  "DK",
  "DM",
  "DO",
  "DZ",
  "EC",
  "EE",
  "EG",
  "EH",
  "ER",
  "ES",
  "ET",
  "FI",
  "FJ",
  "FK",
  "FM",
  "FO",
  "FR",
  "GA",
  "GB",
  "GB-CHA",
  "GD",
  "GE",
  "GF",
  "GG",
  "GH",
  "GI",
  "GL",
  "GM",
  "GN",
  "GP",
  "GQ",
  "GR",
  "GS",
  "GT",
  "GU",
  "GW",
  "GY",
  "HK",
  "HM",
  "HN",
  "HR",
  "HT",
  "HU",
  "ID",
  "IE",
  "IL",
  "IM",
  "IN",
  "IO",
  "IQ",
  "IR",
  "IS",
  "IT",
  "JE",
  "JM",
  "JO",
  "JP",
  "KE",
  "KG",
  "KH",
  "KI",
  "KM",
  "KP",
  "KR",
  "KN",
  "KW",
  "KY",
  "KZ",
  "LA",
  "LB",
  "LC",
  "LI",
  "LK",
  "LR",
  "LS",
  "LT",
  "LU",
  "LV",
  "LY",
  "MA",
  "MC",
  "MD",
  "ME",
  "MF",
  "MG",
  "MH",
  "MK",
  "ML",
  "MM",
  "MN",
  "MO",
  "MP",
  "MQ",
  "MR",
  "MS",
  "MT",
  "MU",
  "MV",
  "MW",
  "MX",
  "MY",
  "MZ",
  "NA",
  "NC",
  "NE",
  "NF",
  "NG",
  "NI",
  "NL",
  "NO",
  "NP",
  "NR",
  "NU",
  "NZ",
  "OM",
  "PA",
  "PE",
  "PF",
  "PG",
  "PH",
  "PK",
  "PL",
  "PM",
  "PN",
  "PR",
  "PS",
  "PT",
  "PW",
  "PY",
  "QA",
  "RE",
  "RO",
  "RS",
  "RU",
  "RW",
  "SA",
  "SB",
  "SC",
  "SD",
  "SE",
  "SG",
  "SH",
  "SI",
  "SJ",
  "SK",
  "SL",
  "SM",
  "SN",
  "SO",
  "SR",
  "SS",
  "ST",
  "SV",
  "SX",
  "SY",
  "SZ",
  "TC",
  "TD",
  "TF",
  "TG",
  "TH",
  "TJ",
  "TK",
  "TL",
  "TM",
  "TN",
  "TO",
  "TR",
  "TT",
  "TV",
  "TW",
  "TZ",
  "UA",
  "UG",
  "UM",
  "US",
  "UY",
  "UZ",
  "VA",
  "VC",
  "VE",
  "VG",
  "VI",
  "VN",
  "VU",
  "WF",
  "WS",
  "YE",
  "YT",
  "ZA",
  "ZM",
  "ZW",
  "XK"
]

export const AF_geodata = {
  "AO": {
    "country": "Angola",
    "country_code": "AO",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "angolaLow",
      "angolaHigh"
    ]
  },
  "BF": {
    "country": "Burkina Faso",
    "country_code": "BF",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "burkinaFasoLow",
      "burkinaFasoHigh"
    ]
  },
  "BI": {
    "country": "Burundi",
    "country_code": "BI",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "burundiLow",
      "burundiHigh"
    ]
  },
  "BJ": {
    "country": "Benin",
    "country_code": "BJ",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "beninLow",
      "beninHigh"
    ]
  },
  "BW": {
    "country": "Botswana",
    "country_code": "BW",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "botswanaLow",
      "botswanaHigh"
    ]
  },
  "CD": {
    "country": "Congo, the Democratic Republic of the",
    "country_code": "CD",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "congoDRLow",
      "congoDRHigh"
    ]
  },
  "CF": {
    "country": "Central African Republic",
    "country_code": "CF",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "centralAfricanRepublicLow",
      "centralAfricanRepublicHigh"
    ]
  },
  "CG": {
    "country": "Congo",
    "country_code": "CG",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "congoLow",
      "congoHigh"
    ]
  },
  "CI": {
    "country": "Cote d'Ivoire",
    "country_code": "CI",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "cotedIvoireLow",
      "cotedIvoireHigh"
    ]
  },
  "CM": {
    "country": "Cameroon",
    "country_code": "CM",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "cameroonLow",
      "cameroonHigh"
    ]
  },
  "CV": {
    "country": "Cape Verde",
    "country_code": "CV",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "capeVerdeLow",
      "capeVerdeHigh"
    ]
  },
  "DJ": {
    "country": "Djibouti",
    "country_code": "DJ",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "djiboutiLow",
      "djiboutiHigh"
    ]
  },
  "DZ": {
    "country": "Algeria",
    "country_code": "DZ",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "algeriaLow",
      "algeriaHigh"
    ]
  },
  "EG": {
    "country": "Egypt",
    "country_code": "EG",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "egyptLow",
      "egyptHigh"
    ]
  },
  "EH": {
    "country": "Western Sahara",
    "country_code": "EH",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "ER": {
    "country": "Eritrea",
    "country_code": "ER",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "eritreaLow",
      "eritreaHigh"
    ]
  },
  "ET": {
    "country": "Ethiopia",
    "country_code": "ET",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "ethiopiaLow",
      "ethiopiaHigh"
    ]
  },
  "GA": {
    "country": "Gabon",
    "country_code": "GA",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "gabonLow",
      "gabonHigh"
    ]
  },
  "GH": {
    "country": "Ghana",
    "country_code": "GH",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "ghanaLow",
      "ghanaHigh"
    ]
  },
  "GM": {
    "country": "Gambia",
    "country_code": "GM",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "gambiaLow",
      "gambiaHigh"
    ]
  },
  "GN": {
    "country": "Guinea",
    "country_code": "GN",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "guineaLow",
      "guineaHigh"
    ]
  },
  "GQ": {
    "country": "Equatorial Guinea",
    "country_code": "GQ",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "equatorialGuineaLow",
      "equatorialGuineaHigh"
    ]
  },
  "GW": {
    "country": "Guinea-Bissau",
    "country_code": "GW",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "guineaBissauLow",
      "guineaBissauHigh"
    ]
  },
  "KE": {
    "country": "Kenya",
    "country_code": "KE",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "kenyaLow",
      "kenyaHigh"
    ]
  },
  "KM": {
    "country": "Comoros",
    "country_code": "KM",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "comorosLow",
      "comorosHigh"
    ]
  },
  "LR": {
    "country": "Liberia",
    "country_code": "LR",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "liberiaLow",
      "liberiaHigh"
    ]
  },
  "LS": {
    "country": "Lesotho",
    "country_code": "LS",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "lesothoLow",
      "lesothoHigh"
    ]
  },
  "LY": {
    "country": "Libya",
    "country_code": "LY",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "libyaLow",
      "libyaHigh"
    ]
  },
  "MA": {
    "country": "Morocco",
    "country_code": "MA",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "moroccoLow",
      "moroccoHigh"
    ]
  },
  "MG": {
    "country": "Madagascar",
    "country_code": "MG",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "madagascarProvinceLow",
      "madagascarProvinceHigh",
      "madagascarRegionLow",
      "madagascarRegionHigh"
    ]
  },
  "ML": {
    "country": "Mali",
    "country_code": "ML",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "maliLow",
      "maliHigh"
    ]
  },
  "MR": {
    "country": "Mauritania",
    "country_code": "MR",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "mauritaniaLow",
      "mauritaniaHigh"
    ]
  },
  "MU": {
    "country": "Mauritius",
    "country_code": "MU",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "mauritiusLow",
      "mauritiusHigh"
    ]
  },
  "MW": {
    "country": "Malawi",
    "country_code": "MW",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "malawiLow",
      "malawiHigh"
    ]
  },
  "MZ": {
    "country": "Mozambique",
    "country_code": "MZ",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "mozambiqueLow",
      "mozambiqueHigh"
    ]
  },
  "NA": {
    "country": "Namibia",
    "country_code": "NA",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "namibiaLow",
      "namibiaHigh"
    ]
  },
  "NE": {
    "country": "Niger",
    "country_code": "NE",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "nigerLow",
      "nigerHigh"
    ]
  },
  "NG": {
    "country": "Nigeria",
    "country_code": "NG",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "nigeriaLow",
      "nigeriaHigh"
    ]
  },
  "RE": {
    "country": "Reunion",
    "country_code": "RE",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "RW": {
    "country": "Rwanda",
    "country_code": "RW",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "rwandaLow",
      "rwandaHigh"
    ]
  },
  "SC": {
    "country": "Seychelles",
    "country_code": "SC",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "seychellesLow",
      "seychellesHigh"
    ]
  },
  "SD": {
    "country": "Sudan",
    "country_code": "SD",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "sudanLow",
      "sudanHigh"
    ]
  },
  "SH": {
    "country": "Saint Helena, Ascension and Tristan da Cunha",
    "country_code": "SH",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "saintHelenaLow",
      "saintHelenaHigh"
    ]
  },
  "SL": {
    "country": "Sierra Leone",
    "country_code": "SL",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "sierraLeoneLow",
      "sierraLeoneHigh"
    ]
  },
  "SN": {
    "country": "Senegal",
    "country_code": "SN",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "senegalLow",
      "senegalHigh"
    ]
  },
  "SO": {
    "country": "Somalia",
    "country_code": "SO",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "somaliaLow",
      "somaliaHigh"
    ]
  },
  "SS": {
    "country": "South Sudan",
    "country_code": "SS",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "southSudanLow",
      "southSudanHigh",
      "southSudan2015Low",
      "southSudan2015High"
    ]
  },
  "ST": {
    "country": "Sao Tome and Principe",
    "country_code": "ST",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "saoTomePrincipeLow",
      "saoTomePrincipeHigh"
    ]
  },
  "SZ": {
    "country": "Swaziland",
    "country_code": "SZ",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "eswatiniLow",
      "eswatiniHigh"
    ]
  },
  "TD": {
    "country": "Chad",
    "country_code": "TD",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "chadLow",
      "chadHigh"
    ]
  },
  "TG": {
    "country": "Togo",
    "country_code": "TG",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "togoLow",
      "togoHigh"
    ]
  },
  "TN": {
    "country": "Tunisia",
    "country_code": "TN",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "tunisiaLow",
      "tunisiaHigh"
    ]
  },
  "TZ": {
    "country": "Tanzania, United Republic of",
    "country_code": "TZ",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "tanzaniaLow",
      "tanzaniaHigh"
    ]
  },
  "UG": {
    "country": "Uganda",
    "country_code": "UG",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "ugandaLow",
      "ugandaHigh",
      "ugandaRegionsLow",
      "ugandaRegionsHigh"
    ]
  },
  "YT": {
    "country": "Mayotte",
    "country_code": "YT",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "ZA": {
    "country": "South Africa",
    "country_code": "ZA",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "southAfricaLow",
      "southAfricaHigh"
    ]
  },
  "ZM": {
    "country": "Zambia",
    "country_code": "ZM",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "zambiaLow",
      "zambiaHigh"
    ]
  },
  "ZW": {
    "country": "Zimbabwe",
    "country_code": "ZW",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "zimbabweLow",
      "zimbabweHigh"
    ]
  }
}

export const AS_geodata = {
  "AE": {
    "country": "United Arab Emirates",
    "country_code": "AE",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "uaeLow",
      "uaeHigh"
    ]
  },
  "AF": {
    "country": "Afghanistan",
    "country_code": "AF",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "afghanistanLow",
      "afghanistanHigh"
    ]
  },
  "BD": {
    "country": "Bangladesh",
    "country_code": "BD",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "bangladeshLow",
      "bangladeshHigh"
    ]
  },
  "BH": {
    "country": "Bahrain",
    "country_code": "BH",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "bahrainLow",
      "bahrainHigh"
    ]
  },
  "BN": {
    "country": "Brunei Darussalam",
    "country_code": "BN",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "bruneiDarussalamLow",
      "bruneiDarussalamHigh"
    ]
  },
  "BT": {
    "country": "Bhutan",
    "country_code": "BT",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "bhutanLow",
      "bhutanHigh"
    ]
  },
  "CC": {
    "country": "Cocos (Keeling) Islands",
    "country_code": "CC",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "cocosKeelingLow",
      "cocosKeelingHigh"
    ]
  },
  "CN": {
    "country": "China",
    "country_code": "CN",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "chinaLow",
      "chinaHigh"
    ]
  },
  "CX": {
    "country": "Christmas Island",
    "country_code": "CX",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "HK": {
    "country": "Hong Kong",
    "country_code": "HK",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "hongKongLow",
      "hongKongHigh"
    ]
  },
  "ID": {
    "country": "Indonesia",
    "country_code": "ID",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "indonesiaLow",
      "indonesiaHigh"
    ]
  },
  "IL": {
    "country": "Israel",
    "country_code": "IL",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "israelLow",
      "israelHigh",
      "israelPalestineLow",
      "israelPalestineHigh"
    ]
  },
  "IN": {
    "country": "India",
    "country_code": "IN",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "india2020Low",
      "india2020High",
      "india2019Low",
      "india2019High",
      "indiaLow",
      "indiaHigh"
    ]
  },
  "IO": {
    "country": "British Indian Ocean Territory",
    "country_code": "IO",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "britishIndianOceanTerritoryLow",
      "britishIndianOceanTerritoryHigh"
    ]
  },
  "IQ": {
    "country": "Iraq",
    "country_code": "IQ",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "iraqLow",
      "iraqHigh"
    ]
  },
  "IR": {
    "country": "Iran, Islamic Republic of",
    "country_code": "IR",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "iranLow",
      "iranHigh"
    ]
  },
  "JO": {
    "country": "Jordan",
    "country_code": "JO",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "jordanLow",
      "jordanHigh"
    ]
  },
  "JP": {
    "country": "Japan",
    "country_code": "JP",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "japanLow",
      "japanHigh"
    ]
  },
  "KG": {
    "country": "Kyrgyzstan",
    "country_code": "KG",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "kyrgyzstanLow",
      "kyrgyzstanHigh"
    ]
  },
  "KH": {
    "country": "Cambodia",
    "country_code": "KH",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "cambodiaLow",
      "cambodiaHigh"
    ]
  },
  "KP": {
    "country": "Korea, Democratic People's Republic of",
    "country_code": "KP",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "northKoreaLow",
      "northKoreaHigh"
    ]
  },
  "KR": {
    "country": "Korea, Republic of",
    "country_code": "KR",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "southKoreaLow",
      "southKoreaHigh"
    ]
  },
  "KW": {
    "country": "Kuwait",
    "country_code": "KW",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "kuwaitLow",
      "kuwaitHigh"
    ]
  },
  "LA": {
    "country": "Lao People's Democratic Republic",
    "country_code": "LA",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "laosLow",
      "laosHigh"
    ]
  },
  "LB": {
    "country": "Lebanon",
    "country_code": "LB",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "lebanonLow",
      "lebanonHigh"
    ]
  },
  "LK": {
    "country": "Sri Lanka",
    "country_code": "LK",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "sriLankaLow",
      "sriLankaHigh"
    ]
  },
  "MM": {
    "country": "Myanmar",
    "country_code": "MM",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "myanmarLow",
      "myanmarHigh"
    ]
  },
  "MN": {
    "country": "Mongolia",
    "country_code": "MN",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "mongoliaLow",
      "mongoliaHigh"
    ]
  },
  "MO": {
    "country": "Macao",
    "country_code": "MO",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "MV": {
    "country": "Maldives",
    "country_code": "MV",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "maldivesLow",
      "maldivesHigh",
      "maldivesIslandsLow",
      "maldivesIslandsHigh"
    ]
  },
  "MY": {
    "country": "Malaysia",
    "country_code": "MY",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "malaysiaLow",
      "malaysiaHigh"
    ]
  },
  "NP": {
    "country": "Nepal",
    "country_code": "NP",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "nepal2020Low",
      "nepal2020High",
      "nepalLow",
      "nepalHigh"
    ]
  },
  "OM": {
    "country": "Oman",
    "country_code": "OM",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "omanLow",
      "omanHigh"
    ]
  },
  "PH": {
    "country": "Philippines",
    "country_code": "PH",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "philippinesLow",
      "philippinesHigh"
    ]
  },
  "PK": {
    "country": "Pakistan",
    "country_code": "PK",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "pakistanLow",
      "pakistanHigh"
    ]
  },
  "PS": {
    "country_code": "},",
    "country": "Palestinian, State of",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "palestineLow",
      "palestineHigh"
    ]
  },
  "QA": {
    "country": "Qatar",
    "country_code": "QA",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "qatarLow",
      "qatarHigh"
    ]
  },
  "SA": {
    "country": "Saudi Arabia",
    "country_code": "SA",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "saudiArabiaLow",
      "saudiArabiaHigh"
    ]
  },
  "SG": {
    "country": "Singapore",
    "country_code": "SG",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "singaporeLow",
      "singaporeHigh"
    ]
  },
  "SY": {
    "country": "Syrian Arab Republic",
    "country_code": "SY",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "syriaLow",
      "syriaHigh"
    ]
  },
  "TH": {
    "country": "Thailand",
    "country_code": "TH",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "thailandLow",
      "thailandHigh"
    ]
  },
  "TJ": {
    "country": "Tajikistan",
    "country_code": "TJ",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "tajikistanLow",
      "tajikistanHigh"
    ]
  },
  "TL": {
    "country": "Timor-Leste",
    "country_code": "TL",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "timorLesteLow",
      "timorLesteHigh"
    ]
  },
  "TM": {
    "country": "Turkmenistan",
    "country_code": "TM",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "turkmenistanLow",
      "turkmenistanHigh"
    ]
  },
  "TW": {
    "country": "Taiwan",
    "country_code": "TW",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "taiwanLow",
      "taiwanHigh"
    ]
  },
  "UZ": {
    "country": "Uzbekistan",
    "country_code": "UZ",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "uzbekistanLow",
      "uzbekistanHigh"
    ]
  },
  "VN": {
    "country": "Viet Nam",
    "country_code": "VN",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "vietnamLow",
      "vietnamHigh"
    ]
  },
  "YE": {
    "country": "Yemen",
    "country_code": "YE",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "yemenLow",
      "yemenHigh"
    ]
  }
}

export const EU_geodata = {
  "AD": {
    "country": "Andorra",
    "country_code": "AD",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "andorraLow",
      "andorraHigh"
    ]
  },
  "AL": {
    "country": "Albania",
    "country_code": "AL",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "albaniaLow",
      "albaniaHigh"
    ]
  },
  "AM": {
    "country": "Armenia",
    "country_code": "AM",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "armeniaLow",
      "armeniaHigh"
    ]
  },
  "AT": {
    "country": "Austria",
    "country_code": "AT",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "austriaLow",
      "austriaHigh"
    ]
  },
  "AX": {
    "country": "Aland Islands",
    "country_code": "AX",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "AZ": {
    "country": "Azerbaijan",
    "country_code": "AZ",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "azerbaijanLow",
      "azerbaijanHigh"
    ]
  },
  "BA": {
    "country": "Bosnia and Herzegovina",
    "country_code": "BA",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "bosniaHerzegovinaLow",
      "bosniaHerzegovinaHigh",
      "bosniaHerzegovinaCantonsLow",
      "bosniaHerzegovinaCantonsHigh"
    ]
  },
  "BE": {
    "country": "Belgium",
    "country_code": "BE",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "belgiumLow",
      "belgiumHigh"
    ]
  },
  "BG": {
    "country": "Bulgaria",
    "country_code": "BG",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "bulgariaLow",
      "bulgariaHigh"
    ]
  },
  "BY": {
    "country": "Belarus",
    "country_code": "BY",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "belarusLow",
      "belarusHigh"
    ]
  },
  "CH": {
    "country": "Switzerland",
    "country_code": "CH",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "switzerlandLow",
      "switzerlandHigh"
    ]
  },
  "CY": {
    "country": "Cyprus",
    "country_code": "CY",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "cyprusLow",
      "cyprusHigh",
      "cyprusNorthCyprusLow",
      "cyprusNorthCyprusHigh"
    ]
  },
  "CZ": {
    "country": "Czech Republic",
    "country_code": "CZ",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "czechiaLow",
      "czechiaHigh"
    ]
  },
  "DE": {
    "country": "Germany",
    "country_code": "DE",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "germanyLow",
      "germanyHigh"
    ]
  },
  "DK": {
    "country": "Denmark",
    "country_code": "DK",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "denmarkLow",
      "denmarkHigh"
    ]
  },
  "EE": {
    "country": "Estonia",
    "country_code": "EE",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "estoniaLow",
      "estoniaHigh"
    ]
  },
  "ES": {
    "country": "Spain",
    "country_code": "ES",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "spainLow",
      "spainHigh",
      "spainProvincesLow",
      "spainProvincesHigh",
      "spainProvinces2Low",
      "spainProvinces2High"
    ]
  },
  "FI": {
    "country": "Finland",
    "country_code": "FI",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "finlandLow",
      "finlandHigh"
    ]
  },
  "FO": {
    "country": "Faroe Islands",
    "country_code": "FO",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "faroeIslandsLow",
      "faroeIslandsHigh"
    ]
  },
  "FR": {
    "country": "France",
    "country_code": "FR",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "franceLow",
      "franceHigh",
      "franceDepartmentsLow",
      "franceDepartmentsHigh",
      "franceDepartments2Low",
      "franceDepartments2High"
    ]
  },
  "GB": {
    "country": "United Kingdom",
    "country_code": "GB",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "ukLow",
      "ukHigh",
      "ukCountiesLow",
      "ukCountiesHigh",
      "ukCountriesLow",
      "ukCountriesHigh"
    ]
  },
  "GB-CHA": {
    "country": "Channel Islands",
    "country_code": "GB",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "channelIslandsLow",
      "channelIslandsHigh"
    ]
  },
  "GE": {
    "country": "Georgia",
    "country_code": "GE",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "georgiaLow",
      "georgiaHigh",
      "georgiaSouthOssetiaLow",
      "georgiaSouthOssetiaHigh"
    ]
  },
  "GG": {
    "country": "Guernsey",
    "country_code": "GG",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "GI": {
    "country": "Gibraltar",
    "country_code": "GI",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "GR": {
    "country": "Greece",
    "country_code": "GR",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "greeceLow",
      "greeceHigh"
    ]
  },
  "HR": {
    "country": "Croatia",
    "country_code": "HR",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "croatiaLow",
      "croatiaHigh"
    ]
  },
  "HU": {
    "country": "Hungary",
    "country_code": "HU",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "hungaryLow",
      "hungaryHigh"
    ]
  },
  "IE": {
    "country": "Ireland",
    "country_code": "IE",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "irelandLow",
      "irelandHigh"
    ]
  },
  "IM": {
    "country": "Isle of Man",
    "country_code": "IM",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "IS": {
    "country": "Iceland",
    "country_code": "IS",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "icelandLow",
      "icelandHigh"
    ]
  },
  "IT": {
    "country": "Italy",
    "country_code": "IT",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "italyLow",
      "italyHigh",
      "italyProvincesLow",
      "italyProvincesHigh"
    ]
  },
  "JE": {
    "country": "Jersey",
    "country_code": "JE",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "channelIslandsLow",
      "channelIslandsHigh"
    ]
  },
  "KZ": {
    "country": "Kazakhstan",
    "country_code": "KZ",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "kazakhstan2023Low",
      "kazakhstan2023High",
      "kazakhstanLow",
      "kazakhstanHigh"
    ]
  },
  "LI": {
    "country": "Liechtenstein",
    "country_code": "LI",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "liechtensteinLow",
      "liechtensteinHigh"
    ]
  },
  "LT": {
    "country": "Lithuania",
    "country_code": "LT",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "lithuaniaLow",
      "lithuaniaHigh"
    ]
  },
  "LU": {
    "country": "Luxembourg",
    "country_code": "LU",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "luxembourgLow",
      "luxembourgHigh"
    ]
  },
  "LV": {
    "country": "Latvia",
    "country_code": "LV",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "latvia2021Low",
      "latvia2021High",
      "latviaLow",
      "latviaHigh"
    ]
  },
  "MC": {
    "country": "Monaco",
    "country_code": "MC",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "MD": {
    "country": "Moldova, Republic of",
    "country_code": "MD",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "moldovaLow",
      "moldovaHigh"
    ]
  },
  "ME": {
    "country": "Montenegro",
    "country_code": "ME",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "montenegroLow",
      "montenegroHigh"
    ]
  },
  "MK": {
    "country": "North Macedonia",
    "country_code": "MK",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "northMacedoniaLow",
      "northMacedoniaHigh"
    ]
  },
  "MT": {
    "country": "Malta",
    "country_code": "MT",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "maltaLow",
      "maltaHigh"
    ]
  },
  "NL": {
    "country": "Netherlands",
    "country_code": "NL",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "netherlandsLow",
      "netherlandsHigh"
    ]
  },
  "NO": {
    "country": "Norway",
    "country_code": "NO",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "norway2020Low",
      "norway2020High",
      "norwayLow",
      "norwayHigh"
    ]
  },
  "PL": {
    "country": "Poland",
    "country_code": "PL",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "polandLow",
      "polandHigh"
    ]
  },
  "PT": {
    "country": "Portugal",
    "country_code": "PT",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "portugalLow",
      "portugalHigh",
      "portugalRegionsLow",
      "portugalRegionsHigh"
    ]
  },
  "RO": {
    "country": "Romania",
    "country_code": "RO",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "romaniaLow",
      "romaniaHigh"
    ]
  },
  "RS": {
    "country": "Serbia",
    "country_code": "RS",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "serbiaLow",
      "serbiaHigh",
      "serbiaNoKosovoLow",
      "serbiaNoKosovoHigh"
    ]
  },
  "RU": {
    "country": "Russian Federation",
    "country_code": "RU",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "russiaLow",
      "russiaHigh",
      "russiaCrimeaLow",
      "russiaCrimeaHigh"
    ]
  },
  "SE": {
    "country": "Sweden",
    "country_code": "SE",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "swedenLow",
      "swedenHigh"
    ]
  },
  "SI": {
    "country": "Slovenia",
    "country_code": "SI",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "sloveniaLow",
      "sloveniaHigh",
      "sloveniaRegionsLow",
      "sloveniaRegionsHigh"
    ]
  },
  "SJ": {
    "country": "Svalbard and Jan Mayen",
    "country_code": "SJ",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "svalbardLow",
      "svalbardHigh"
    ]
  },
  "SK": {
    "country": "Slovakia",
    "country_code": "SK",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "slovakiaLow",
      "slovakiaHigh"
    ]
  },
  "SM": {
    "country": "San Marino",
    "country_code": "SM",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "sanMarinoLow",
      "sanMarinoHigh"
    ]
  },
  "TR": {
    "country": "Türkiye",
    "country_code": "TR",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "turkeyLow",
      "turkeyHigh"
    ]
  },
  "UA": {
    "country": "Ukraine",
    "country_code": "UA",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "ukraineLow",
      "ukraineHigh"
    ]
  },
  "VA": {
    "country": "Holy See (Vatican City State)",
    "country_code": "VA",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "vaticanLow",
      "vaticanHigh"
    ]
  },
  "XK": {
    "country": "Kosovo",
    "country_code": "XK",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "kosovoLow",
      "kosovoHigh"
    ]
  }
}

export const NA_geodata = {
  "AG": {
    "country": "Antigua and Barbuda",
    "country_code": "AG",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "antiguaBarbudaLow",
      "antiguaBarbudaHigh"
    ]
  },
  "AI": {
    "country": "Anguilla",
    "country_code": "AI",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "anguillaLow",
      "anguillaHigh"
    ]
  },
  "AW": {
    "country": "Aruba",
    "country_code": "AW",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "arubaLow",
      "arubaHigh"
    ]
  },
  "BB": {
    "country": "Barbados",
    "country_code": "BB",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "barbadosLow",
      "barbadosHigh"
    ]
  },
  "BL": {
    "country": "Saint Barthelemy",
    "country_code": "BL",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "BM": {
    "country": "Bermuda",
    "country_code": "BM",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "bermudaLow",
      "bermudaHigh"
    ]
  },
  "BQ": {
    "country": "Bonaire, Sint Eustatius and Saba",
    "country_code": "BQ",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "bonaireSintEustatiusSabaLow",
      "bonaireSintEustatiusSabaHigh"
    ]
  },
  "BS": {
    "country": "Bahamas",
    "country_code": "BS",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "bahamasLow",
      "bahamasHigh"
    ]
  },
  "BZ": {
    "country": "Belize",
    "country_code": "BZ",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "belizeLow",
      "belizeHigh"
    ]
  },
  "CA": {
    "country": "Canada",
    "country_code": "CA",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "canadaLow",
      "canadaHigh"
    ]
  },
  "CR": {
    "country": "Costa Rica",
    "country_code": "CR",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "costaRicaLow",
      "costaRicaHigh"
    ]
  },
  "CU": {
    "country": "Cuba",
    "country_code": "CU",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "cubaLow",
      "cubaHigh"
    ]
  },
  "CW": {
    "country": "Curacao",
    "country_code": "CW",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "curacaoLow",
      "curacaoHigh"
    ]
  },
  "DM": {
    "country": "Dominica",
    "country_code": "DM",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "dominicaLow",
      "dominicaHigh"
    ]
  },
  "DO": {
    "country": "Dominican Republic",
    "country_code": "DO",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "dominicanRepublicLow",
      "dominicanRepublicHigh",
      "dominicanRepublicMuniLow",
      "dominicanRepublicMuniHigh"
    ]
  },
  "GD": {
    "country": "Grenada",
    "country_code": "GD",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "grenadaLow",
      "grenadaHigh"
    ]
  },
  "GL": {
    "country": "Greenland",
    "country_code": "GL",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "greenlandLow",
      "greenlandHigh"
    ]
  },
  "GP": {
    "country": "Guadeloupe",
    "country_code": "GP",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "guadeloupeLow",
      "guadeloupeHigh"
    ]
  },
  "GT": {
    "country": "Guatemala",
    "country_code": "GT",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "guatemalaLow",
      "guatemalaHigh"
    ]
  },
  "HN": {
    "country": "Honduras",
    "country_code": "HN",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "hondurasLow",
      "hondurasHigh"
    ]
  },
  "HT": {
    "country": "Haiti",
    "country_code": "HT",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "haitiLow",
      "haitiHigh"
    ]
  },
  "JM": {
    "country": "Jamaica",
    "country_code": "JM",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "jamaicaLow",
      "jamaicaHigh"
    ]
  },
  "KN": {
    "country": "Saint Kitts and Nevis",
    "country_code": "KN",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "stKittsNevisLow",
      "stKittsNevisHigh"
    ]
  },
  "KY": {
    "country": "Cayman Islands",
    "country_code": "KY",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "caymanIslandsLow",
      "caymanIslandsHigh"
    ]
  },
  "LC": {
    "country": "Saint Lucia",
    "country_code": "LC",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "saintLuciaLow",
      "saintLuciaHigh"
    ]
  },
  "MF": {
    "country": "Saint Martin (French Part)",
    "country_code": "MF",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "MQ": {
    "country": "Martinique",
    "country_code": "MQ",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "martiniqueLow",
      "martiniqueHigh"
    ]
  },
  "MS": {
    "country": "Montserrat",
    "country_code": "MS",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "montserratLow",
      "montserratHigh"
    ]
  },
  "MX": {
    "country": "Mexico",
    "country_code": "MX",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "mexicoLow",
      "mexicoHigh"
    ]
  },
  "NI": {
    "country": "Nicaragua",
    "country_code": "NI",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "nicaraguaLow",
      "nicaraguaHigh"
    ]
  },
  "PA": {
    "country": "Panama",
    "country_code": "PA",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "panamaLow",
      "panamaHigh"
    ]
  },
  "PM": {
    "country": "Saint Pierre and Miquelon",
    "country_code": "PM",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "stPierreMiquelonLow",
      "stPierreMiquelonHigh"
    ]
  },
  "PR": {
    "country": "Puerto Rico",
    "country_code": "PR",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "puertoRicoLow",
      "puertoRicoHigh"
    ]
  },
  "SV": {
    "country": "El Salvador",
    "country_code": "SV",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "elSalvadorLow",
      "elSalvadorHigh"
    ]
  },
  "SX": {
    "country": "Sint Maarten (Dutch Part)",
    "country_code": "SX",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "TC": {
    "country": "Turks and Caicos Islands",
    "country_code": "TC",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "TT": {
    "country": "Trinidad and Tobago",
    "country_code": "TT",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "trinidadTobagoLow",
      "trinidadTobagoHigh"
    ]
  },
  "US": {
    "country": "United States",
    "country_code": "US",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "usaLow",
      "usaHigh",
      "usaTerritoriesLow",
      "usaTerritoriesHigh",
      "usaTerritories2Low",
      "usaTerritories2High"
    ]
  },
  "VC": {
    "country": "Saint Vincent and the Grenadines",
    "country_code": "VC",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "saintVincentLow",
      "saintVincentHigh"
    ]
  },
  "VG": {
    "country": "Virgin Islands, British",
    "country_code": "VG",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "britishVirginIslandsLow",
      "britishVirginIslandsHigh"
    ]
  },
  "VI": {
    "country": "Virgin Islands, U.S.",
    "country_code": "VI",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "usVirginIslandsLow",
      "usVirginIslandsHigh"
    ]
  }
}

export const OC_geodata = {
  "AS": {
    "country": "American Samoa",
    "country_code": "AS",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [
      "americanSamoaLow",
      "americanSamoaHigh"
    ]
  },
  "AU": {
    "country": "Australia",
    "country_code": "AU",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [
      "australiaLow",
      "australiaHigh"
    ]
  },
  "CK": {
    "country": "Cook Islands",
    "country_code": "CK",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "FJ": {
    "country": "Fiji",
    "country_code": "FJ",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [
      "fijiEastLow",
      "fijiEastHigh",
      "fijiWestLow",
      "fijiWestHigh"
    ]
  },
  "FM": {
    "country": "Micronesia, Federated States of",
    "country_code": "FM",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "GU": {
    "country": "Guam",
    "country_code": "GU",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [
      "guamLow",
      "guamHigh"
    ]
  },
  "KI": {
    "country": "Kiribati",
    "country_code": "KI",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "MH": {
    "country": "Marshall Islands",
    "country_code": "MH",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "MP": {
    "country": "Northern Mariana Islands",
    "country_code": "MP",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [
      "northernMarianaLow",
      "northernMarianaHigh"
    ]
  },
  "NC": {
    "country": "New Caledonia",
    "country_code": "NC",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "NF": {
    "country": "Norfolk Island",
    "country_code": "NF",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "NR": {
    "country": "Nauru",
    "country_code": "NR",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "NU": {
    "country": "Niue",
    "country_code": "NU",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "NZ": {
    "country": "New Zealand",
    "country_code": "NZ",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [
      "newZealandLow",
      "newZealandHigh"
    ]
  },
  "PF": {
    "country": "French Polynesia",
    "country_code": "PF",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "PG": {
    "country": "Papua New Guinea",
    "country_code": "PG",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "PN": {
    "country": "Pitcairn",
    "country_code": "PN",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "PW": {
    "country": "Palau",
    "country_code": "PW",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "SB": {
    "country": "Solomon Islands",
    "country_code": "SB",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [
      "solomonIslandsLow",
      "solomonIslandsHigh"
    ]
  },
  "TK": {
    "country": "Tokelau",
    "country_code": "TK",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "TO": {
    "country": "Tonga",
    "country_code": "TO",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "TV": {
    "country": "Tuvalu",
    "country_code": "TV",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "UM": {
    "country": "United States Minor Outlying Islands",
    "country_code": "UM",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "VU": {
    "country": "Vanuatu",
    "country_code": "VU",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "WF": {
    "country": "Wallis and Futuna",
    "country_code": "WF",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "WS": {
    "country": "Samoa",
    "country_code": "WS",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [
      "samoaLow",
      "samoaHigh"
    ]
  }
}

export const SA_geodata = {
  "AR": {
    "country": "Argentina",
    "country_code": "AR",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "argentinaLow",
      "argentinaHigh"
    ]
  },
  "BO": {
    "country": "Bolivia, Plurinational State of",
    "country_code": "BO",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "boliviaLow",
      "boliviaHigh"
    ]
  },
  "BR": {
    "country": "Brazil",
    "country_code": "BR",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "brazilLow",
      "brazilHigh"
    ]
  },
  "CL": {
    "country": "Chile",
    "country_code": "CL",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "chileLow",
      "chileHigh"
    ]
  },
  "CO": {
    "country": "Colombia",
    "country_code": "CO",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "colombiaLow",
      "colombiaHigh",
      "colombiaMuniLow",
      "colombiaMuniHigh"
    ]
  },
  "EC": {
    "country": "Ecuador",
    "country_code": "EC",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "ecuadorLow",
      "ecuadorHigh"
    ]
  },
  "FK": {
    "country": "Falkland Islands (Malvinas)",
    "country_code": "FK",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "falklandIslandsLow",
      "falklandIslandsHigh"
    ]
  },
  "GF": {
    "country": "French Guiana",
    "country_code": "GF",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "frenchGuianaLow",
      "frenchGuianaHigh"
    ]
  },
  "GY": {
    "country": "Guyana",
    "country_code": "GY",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "guyanaLow",
      "guyanaHigh"
    ]
  },
  "PE": {
    "country": "Peru",
    "country_code": "PE",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "peruLow",
      "peruHigh"
    ]
  },
  "PY": {
    "country": "Paraguay",
    "country_code": "PY",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "paraguayLow",
      "paraguayHigh"
    ]
  },
  "SR": {
    "country": "Suriname",
    "country_code": "SR",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "surinameLow",
      "surinameHigh"
    ]
  },
  "UY": {
    "country": "Uruguay",
    "country_code": "UY",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "uruguayLow",
      "uruguayHigh"
    ]
  },
  "VE": {
    "country": "Venezuela, Bolivarian Republic of",
    "country_code": "VE",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "venezuelaLow",
      "venezuelaHigh"
    ]
  }
}

export const geodata = {
  "AD": {
    "country": "Andorra",
    "country_code": "AD",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "andorraLow",
      "andorraHigh"
    ]
  },
  "AE": {
    "country": "United Arab Emirates",
    "country_code": "AE",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "uaeLow",
      "uaeHigh"
    ]
  },
  "AF": {
    "country": "Afghanistan",
    "country_code": "AF",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "afghanistanLow",
      "afghanistanHigh"
    ]
  },
  "AG": {
    "country": "Antigua and Barbuda",
    "country_code": "AG",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "antiguaBarbudaLow",
      "antiguaBarbudaHigh"
    ]
  },
  "AI": {
    "country": "Anguilla",
    "country_code": "AI",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "anguillaLow",
      "anguillaHigh"
    ]
  },
  "AL": {
    "country": "Albania",
    "country_code": "AL",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "albaniaLow",
      "albaniaHigh"
    ]
  },
  "AM": {
    "country": "Armenia",
    "country_code": "AM",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "armeniaLow",
      "armeniaHigh"
    ]
  },
  "AO": {
    "country": "Angola",
    "country_code": "AO",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "angolaLow",
      "angolaHigh"
    ]
  },
  "AQ": {
    "country": "Antarctica",
    "country_code": "AQ",
    "continent_code": "AN",
    "continent": "Antarctica",
    "maps": []
  },
  "AR": {
    "country": "Argentina",
    "country_code": "AR",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "argentinaLow",
      "argentinaHigh"
    ]
  },
  "AS": {
    "country": "American Samoa",
    "country_code": "AS",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [
      "americanSamoaLow",
      "americanSamoaHigh"
    ]
  },
  "AT": {
    "country": "Austria",
    "country_code": "AT",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "austriaLow",
      "austriaHigh"
    ]
  },
  "AU": {
    "country": "Australia",
    "country_code": "AU",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [
      "australiaLow",
      "australiaHigh"
    ]
  },
  "AW": {
    "country": "Aruba",
    "country_code": "AW",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "arubaLow",
      "arubaHigh"
    ]
  },
  "AX": {
    "country": "Aland Islands",
    "country_code": "AX",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "AZ": {
    "country": "Azerbaijan",
    "country_code": "AZ",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "azerbaijanLow",
      "azerbaijanHigh"
    ]
  },
  "BA": {
    "country": "Bosnia and Herzegovina",
    "country_code": "BA",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "bosniaHerzegovinaLow",
      "bosniaHerzegovinaHigh",
      "bosniaHerzegovinaCantonsLow",
      "bosniaHerzegovinaCantonsHigh"
    ]
  },
  "BB": {
    "country": "Barbados",
    "country_code": "BB",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "barbadosLow",
      "barbadosHigh"
    ]
  },
  "BD": {
    "country": "Bangladesh",
    "country_code": "BD",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "bangladeshLow",
      "bangladeshHigh"
    ]
  },
  "BE": {
    "country": "Belgium",
    "country_code": "BE",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "belgiumLow",
      "belgiumHigh"
    ]
  },
  "BF": {
    "country": "Burkina Faso",
    "country_code": "BF",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "burkinaFasoLow",
      "burkinaFasoHigh"
    ]
  },
  "BG": {
    "country": "Bulgaria",
    "country_code": "BG",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "bulgariaLow",
      "bulgariaHigh"
    ]
  },
  "BH": {
    "country": "Bahrain",
    "country_code": "BH",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "bahrainLow",
      "bahrainHigh"
    ]
  },
  "BI": {
    "country": "Burundi",
    "country_code": "BI",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "burundiLow",
      "burundiHigh"
    ]
  },
  "BJ": {
    "country": "Benin",
    "country_code": "BJ",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "beninLow",
      "beninHigh"
    ]
  },
  "BL": {
    "country": "Saint Barthelemy",
    "country_code": "BL",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "BM": {
    "country": "Bermuda",
    "country_code": "BM",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "bermudaLow",
      "bermudaHigh"
    ]
  },
  "BN": {
    "country": "Brunei Darussalam",
    "country_code": "BN",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "bruneiDarussalamLow",
      "bruneiDarussalamHigh"
    ]
  },
  "BO": {
    "country": "Bolivia, Plurinational State of",
    "country_code": "BO",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "boliviaLow",
      "boliviaHigh"
    ]
  },
  "BQ": {
    "country": "Bonaire, Sint Eustatius and Saba",
    "country_code": "BQ",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "bonaireSintEustatiusSabaLow",
      "bonaireSintEustatiusSabaHigh"
    ]
  },
  "BR": {
    "country": "Brazil",
    "country_code": "BR",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "brazilLow",
      "brazilHigh"
    ]
  },
  "BS": {
    "country": "Bahamas",
    "country_code": "BS",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "bahamasLow",
      "bahamasHigh"
    ]
  },
  "BT": {
    "country": "Bhutan",
    "country_code": "BT",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "bhutanLow",
      "bhutanHigh"
    ]
  },
  "BV": {
    "country": "Bouvet Island",
    "country_code": "BV",
    "continent_code": "AN",
    "continent": "Antarctica",
    "maps": []
  },
  "BW": {
    "country": "Botswana",
    "country_code": "BW",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "botswanaLow",
      "botswanaHigh"
    ]
  },
  "BY": {
    "country": "Belarus",
    "country_code": "BY",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "belarusLow",
      "belarusHigh"
    ]
  },
  "BZ": {
    "country": "Belize",
    "country_code": "BZ",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "belizeLow",
      "belizeHigh"
    ]
  },
  "CA": {
    "country": "Canada",
    "country_code": "CA",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "canadaLow",
      "canadaHigh"
    ]
  },
  "CC": {
    "country": "Cocos (Keeling) Islands",
    "country_code": "CC",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "cocosKeelingLow",
      "cocosKeelingHigh"
    ]
  },
  "CD": {
    "country": "Congo, the Democratic Republic of the",
    "country_code": "CD",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "congoDRLow",
      "congoDRHigh"
    ]
  },
  "CF": {
    "country": "Central African Republic",
    "country_code": "CF",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "centralAfricanRepublicLow",
      "centralAfricanRepublicHigh"
    ]
  },
  "CG": {
    "country": "Congo",
    "country_code": "CG",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "congoLow",
      "congoHigh"
    ]
  },
  "CH": {
    "country": "Switzerland",
    "country_code": "CH",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "switzerlandLow",
      "switzerlandHigh"
    ]
  },
  "CI": {
    "country": "Cote d'Ivoire",
    "country_code": "CI",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "cotedIvoireLow",
      "cotedIvoireHigh"
    ]
  },
  "CK": {
    "country": "Cook Islands",
    "country_code": "CK",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "CL": {
    "country": "Chile",
    "country_code": "CL",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "chileLow",
      "chileHigh"
    ]
  },
  "CM": {
    "country": "Cameroon",
    "country_code": "CM",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "cameroonLow",
      "cameroonHigh"
    ]
  },
  "CN": {
    "country": "China",
    "country_code": "CN",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "chinaLow",
      "chinaHigh"
    ]
  },
  "CO": {
    "country": "Colombia",
    "country_code": "CO",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "colombiaLow",
      "colombiaHigh",
      "colombiaMuniLow",
      "colombiaMuniHigh"
    ]
  },
  "CR": {
    "country": "Costa Rica",
    "country_code": "CR",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "costaRicaLow",
      "costaRicaHigh"
    ]
  },
  "CU": {
    "country": "Cuba",
    "country_code": "CU",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "cubaLow",
      "cubaHigh"
    ]
  },
  "CV": {
    "country": "Cape Verde",
    "country_code": "CV",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "capeVerdeLow",
      "capeVerdeHigh"
    ]
  },
  "CW": {
    "country": "Curacao",
    "country_code": "CW",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "curacaoLow",
      "curacaoHigh"
    ]
  },
  "CX": {
    "country": "Christmas Island",
    "country_code": "CX",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "CY": {
    "country": "Cyprus",
    "country_code": "CY",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "cyprusLow",
      "cyprusHigh",
      "cyprusNorthCyprusLow",
      "cyprusNorthCyprusHigh"
    ]
  },
  "CZ": {
    "country": "Czech Republic",
    "country_code": "CZ",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "czechiaLow",
      "czechiaHigh"
    ]
  },
  "DE": {
    "country": "Germany",
    "country_code": "DE",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "germanyLow",
      "germanyHigh"
    ]
  },
  "DJ": {
    "country": "Djibouti",
    "country_code": "DJ",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "djiboutiLow",
      "djiboutiHigh"
    ]
  },
  "DK": {
    "country": "Denmark",
    "country_code": "DK",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "denmarkLow",
      "denmarkHigh"
    ]
  },
  "DM": {
    "country": "Dominica",
    "country_code": "DM",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "dominicaLow",
      "dominicaHigh"
    ]
  },
  "DO": {
    "country": "Dominican Republic",
    "country_code": "DO",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "dominicanRepublicLow",
      "dominicanRepublicHigh",
      "dominicanRepublicMuniLow",
      "dominicanRepublicMuniHigh"
    ]
  },
  "DZ": {
    "country": "Algeria",
    "country_code": "DZ",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "algeriaLow",
      "algeriaHigh"
    ]
  },
  "EC": {
    "country": "Ecuador",
    "country_code": "EC",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "ecuadorLow",
      "ecuadorHigh"
    ]
  },
  "EE": {
    "country": "Estonia",
    "country_code": "EE",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "estoniaLow",
      "estoniaHigh"
    ]
  },
  "EG": {
    "country": "Egypt",
    "country_code": "EG",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "egyptLow",
      "egyptHigh"
    ]
  },
  "EH": {
    "country": "Western Sahara",
    "country_code": "EH",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "ER": {
    "country": "Eritrea",
    "country_code": "ER",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "eritreaLow",
      "eritreaHigh"
    ]
  },
  "ES": {
    "country": "Spain",
    "country_code": "ES",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "spainLow",
      "spainHigh",
      "spainProvincesLow",
      "spainProvincesHigh",
      "spainProvinces2Low",
      "spainProvinces2High"
    ]
  },
  "ET": {
    "country": "Ethiopia",
    "country_code": "ET",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "ethiopiaLow",
      "ethiopiaHigh"
    ]
  },
  "FI": {
    "country": "Finland",
    "country_code": "FI",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "finlandLow",
      "finlandHigh"
    ]
  },
  "FJ": {
    "country": "Fiji",
    "country_code": "FJ",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [
      "fijiEastLow",
      "fijiEastHigh",
      "fijiWestLow",
      "fijiWestHigh"
    ]
  },
  "FK": {
    "country": "Falkland Islands (Malvinas)",
    "country_code": "FK",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "falklandIslandsLow",
      "falklandIslandsHigh"
    ]
  },
  "FM": {
    "country": "Micronesia, Federated States of",
    "country_code": "FM",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "FO": {
    "country": "Faroe Islands",
    "country_code": "FO",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "faroeIslandsLow",
      "faroeIslandsHigh"
    ]
  },
  "FR": {
    "country": "France",
    "country_code": "FR",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "franceLow",
      "franceHigh",
      "franceDepartmentsLow",
      "franceDepartmentsHigh",
      "franceDepartments2Low",
      "franceDepartments2High"
    ]
  },
  "GA": {
    "country": "Gabon",
    "country_code": "GA",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "gabonLow",
      "gabonHigh"
    ]
  },
  "GB": {
    "country": "United Kingdom",
    "country_code": "GB",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "ukLow",
      "ukHigh",
      "ukCountiesLow",
      "ukCountiesHigh",
      "ukCountriesLow",
      "ukCountriesHigh"
    ]
  },
  "GB-CHA": {
    "country": "Channel Islands",
    "country_code": "GB",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "channelIslandsLow",
      "channelIslandsHigh"
    ]
  },
  "GD": {
    "country": "Grenada",
    "country_code": "GD",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "grenadaLow",
      "grenadaHigh"
    ]
  },
  "GE": {
    "country": "Georgia",
    "country_code": "GE",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "georgiaLow",
      "georgiaHigh",
      "georgiaSouthOssetiaLow",
      "georgiaSouthOssetiaHigh"
    ]
  },
  "GF": {
    "country": "French Guiana",
    "country_code": "GF",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "frenchGuianaLow",
      "frenchGuianaHigh"
    ]
  },
  "GG": {
    "country": "Guernsey",
    "country_code": "GG",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "GH": {
    "country": "Ghana",
    "country_code": "GH",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "ghanaLow",
      "ghanaHigh"
    ]
  },
  "GI": {
    "country": "Gibraltar",
    "country_code": "GI",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "GL": {
    "country": "Greenland",
    "country_code": "GL",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "greenlandLow",
      "greenlandHigh"
    ]
  },
  "GM": {
    "country": "Gambia",
    "country_code": "GM",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "gambiaLow",
      "gambiaHigh"
    ]
  },
  "GN": {
    "country": "Guinea",
    "country_code": "GN",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "guineaLow",
      "guineaHigh"
    ]
  },
  "GP": {
    "country": "Guadeloupe",
    "country_code": "GP",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "guadeloupeLow",
      "guadeloupeHigh"
    ]
  },
  "GQ": {
    "country": "Equatorial Guinea",
    "country_code": "GQ",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "equatorialGuineaLow",
      "equatorialGuineaHigh"
    ]
  },
  "GR": {
    "country": "Greece",
    "country_code": "GR",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "greeceLow",
      "greeceHigh"
    ]
  },
  "GS": {
    "country": "South Georgia and the South Sandwich Islands",
    "country_code": "GS",
    "continent_code": "AN",
    "continent": "Antarctica",
    "maps": []
  },
  "GT": {
    "country": "Guatemala",
    "country_code": "GT",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "guatemalaLow",
      "guatemalaHigh"
    ]
  },
  "GU": {
    "country": "Guam",
    "country_code": "GU",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [
      "guamLow",
      "guamHigh"
    ]
  },
  "GW": {
    "country": "Guinea-Bissau",
    "country_code": "GW",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "guineaBissauLow",
      "guineaBissauHigh"
    ]
  },
  "GY": {
    "country": "Guyana",
    "country_code": "GY",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "guyanaLow",
      "guyanaHigh"
    ]
  },
  "HK": {
    "country": "Hong Kong",
    "country_code": "HK",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "hongKongLow",
      "hongKongHigh"
    ]
  },
  "HM": {
    "country": "Heard Island and McDonald Islands",
    "country_code": "HM",
    "continent_code": "AN",
    "continent": "Antarctica",
    "maps": []
  },
  "HN": {
    "country": "Honduras",
    "country_code": "HN",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "hondurasLow",
      "hondurasHigh"
    ]
  },
  "HR": {
    "country": "Croatia",
    "country_code": "HR",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "croatiaLow",
      "croatiaHigh"
    ]
  },
  "HT": {
    "country": "Haiti",
    "country_code": "HT",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "haitiLow",
      "haitiHigh"
    ]
  },
  "HU": {
    "country": "Hungary",
    "country_code": "HU",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "hungaryLow",
      "hungaryHigh"
    ]
  },
  "ID": {
    "country": "Indonesia",
    "country_code": "ID",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "indonesiaLow",
      "indonesiaHigh"
    ]
  },
  "IE": {
    "country": "Ireland",
    "country_code": "IE",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "irelandLow",
      "irelandHigh"
    ]
  },
  "IL": {
    "country": "Israel",
    "country_code": "IL",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "israelLow",
      "israelHigh",
      "israelPalestineLow",
      "israelPalestineHigh"
    ]
  },
  "IM": {
    "country": "Isle of Man",
    "country_code": "IM",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "IN": {
    "country": "India",
    "country_code": "IN",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "india2020Low",
      "india2020High",
      "india2019Low",
      "india2019High",
      "indiaLow",
      "indiaHigh"
    ]
  },
  "IO": {
    "country": "British Indian Ocean Territory",
    "country_code": "IO",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "britishIndianOceanTerritoryLow",
      "britishIndianOceanTerritoryHigh"
    ]
  },
  "IQ": {
    "country": "Iraq",
    "country_code": "IQ",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "iraqLow",
      "iraqHigh"
    ]
  },
  "IR": {
    "country": "Iran, Islamic Republic of",
    "country_code": "IR",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "iranLow",
      "iranHigh"
    ]
  },
  "IS": {
    "country": "Iceland",
    "country_code": "IS",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "icelandLow",
      "icelandHigh"
    ]
  },
  "IT": {
    "country": "Italy",
    "country_code": "IT",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "italyLow",
      "italyHigh",
      "italyProvincesLow",
      "italyProvincesHigh"
    ]
  },
  "JE": {
    "country": "Jersey",
    "country_code": "JE",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "channelIslandsLow",
      "channelIslandsHigh"
    ]
  },
  "JM": {
    "country": "Jamaica",
    "country_code": "JM",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "jamaicaLow",
      "jamaicaHigh"
    ]
  },
  "JO": {
    "country": "Jordan",
    "country_code": "JO",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "jordanLow",
      "jordanHigh"
    ]
  },
  "JP": {
    "country": "Japan",
    "country_code": "JP",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "japanLow",
      "japanHigh"
    ]
  },
  "KE": {
    "country": "Kenya",
    "country_code": "KE",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "kenyaLow",
      "kenyaHigh"
    ]
  },
  "KG": {
    "country": "Kyrgyzstan",
    "country_code": "KG",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "kyrgyzstanLow",
      "kyrgyzstanHigh"
    ]
  },
  "KH": {
    "country": "Cambodia",
    "country_code": "KH",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "cambodiaLow",
      "cambodiaHigh"
    ]
  },
  "KI": {
    "country": "Kiribati",
    "country_code": "KI",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "KM": {
    "country": "Comoros",
    "country_code": "KM",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "comorosLow",
      "comorosHigh"
    ]
  },
  "KP": {
    "country": "Korea, Democratic People's Republic of",
    "country_code": "KP",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "northKoreaLow",
      "northKoreaHigh"
    ]
  },
  "KR": {
    "country": "Korea, Republic of",
    "country_code": "KR",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "southKoreaLow",
      "southKoreaHigh"
    ]
  },
  "KN": {
    "country": "Saint Kitts and Nevis",
    "country_code": "KN",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "stKittsNevisLow",
      "stKittsNevisHigh"
    ]
  },
  "KW": {
    "country": "Kuwait",
    "country_code": "KW",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "kuwaitLow",
      "kuwaitHigh"
    ]
  },
  "KY": {
    "country": "Cayman Islands",
    "country_code": "KY",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "caymanIslandsLow",
      "caymanIslandsHigh"
    ]
  },
  "KZ": {
    "country": "Kazakhstan",
    "country_code": "KZ",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "kazakhstan2023Low",
      "kazakhstan2023High",
      "kazakhstanLow",
      "kazakhstanHigh"
    ]
  },
  "LA": {
    "country": "Lao People's Democratic Republic",
    "country_code": "LA",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "laosLow",
      "laosHigh"
    ]
  },
  "LB": {
    "country": "Lebanon",
    "country_code": "LB",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "lebanonLow",
      "lebanonHigh"
    ]
  },
  "LC": {
    "country": "Saint Lucia",
    "country_code": "LC",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "saintLuciaLow",
      "saintLuciaHigh"
    ]
  },
  "LI": {
    "country": "Liechtenstein",
    "country_code": "LI",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "liechtensteinLow",
      "liechtensteinHigh"
    ]
  },
  "LK": {
    "country": "Sri Lanka",
    "country_code": "LK",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "sriLankaLow",
      "sriLankaHigh"
    ]
  },
  "LR": {
    "country": "Liberia",
    "country_code": "LR",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "liberiaLow",
      "liberiaHigh"
    ]
  },
  "LS": {
    "country": "Lesotho",
    "country_code": "LS",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "lesothoLow",
      "lesothoHigh"
    ]
  },
  "LT": {
    "country": "Lithuania",
    "country_code": "LT",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "lithuaniaLow",
      "lithuaniaHigh"
    ]
  },
  "LU": {
    "country": "Luxembourg",
    "country_code": "LU",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "luxembourgLow",
      "luxembourgHigh"
    ]
  },
  "LV": {
    "country": "Latvia",
    "country_code": "LV",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "latvia2021Low",
      "latvia2021High",
      "latviaLow",
      "latviaHigh"
    ]
  },
  "LY": {
    "country": "Libya",
    "country_code": "LY",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "libyaLow",
      "libyaHigh"
    ]
  },
  "MA": {
    "country": "Morocco",
    "country_code": "MA",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "moroccoLow",
      "moroccoHigh"
    ]
  },
  "MC": {
    "country": "Monaco",
    "country_code": "MC",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "MD": {
    "country": "Moldova, Republic of",
    "country_code": "MD",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "moldovaLow",
      "moldovaHigh"
    ]
  },
  "ME": {
    "country": "Montenegro",
    "country_code": "ME",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "montenegroLow",
      "montenegroHigh"
    ]
  },
  "MF": {
    "country": "Saint Martin (French Part)",
    "country_code": "MF",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "MG": {
    "country": "Madagascar",
    "country_code": "MG",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "madagascarProvinceLow",
      "madagascarProvinceHigh",
      "madagascarRegionLow",
      "madagascarRegionHigh"
    ]
  },
  "MH": {
    "country": "Marshall Islands",
    "country_code": "MH",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "MK": {
    "country": "North Macedonia",
    "country_code": "MK",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "northMacedoniaLow",
      "northMacedoniaHigh"
    ]
  },
  "ML": {
    "country": "Mali",
    "country_code": "ML",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "maliLow",
      "maliHigh"
    ]
  },
  "MM": {
    "country": "Myanmar",
    "country_code": "MM",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "myanmarLow",
      "myanmarHigh"
    ]
  },
  "MN": {
    "country": "Mongolia",
    "country_code": "MN",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "mongoliaLow",
      "mongoliaHigh"
    ]
  },
  "MO": {
    "country": "Macao",
    "country_code": "MO",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "MP": {
    "country": "Northern Mariana Islands",
    "country_code": "MP",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [
      "northernMarianaLow",
      "northernMarianaHigh"
    ]
  },
  "MQ": {
    "country": "Martinique",
    "country_code": "MQ",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "martiniqueLow",
      "martiniqueHigh"
    ]
  },
  "MR": {
    "country": "Mauritania",
    "country_code": "MR",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "mauritaniaLow",
      "mauritaniaHigh"
    ]
  },
  "MS": {
    "country": "Montserrat",
    "country_code": "MS",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "montserratLow",
      "montserratHigh"
    ]
  },
  "MT": {
    "country": "Malta",
    "country_code": "MT",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "maltaLow",
      "maltaHigh"
    ]
  },
  "MU": {
    "country": "Mauritius",
    "country_code": "MU",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "mauritiusLow",
      "mauritiusHigh"
    ]
  },
  "MV": {
    "country": "Maldives",
    "country_code": "MV",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "maldivesLow",
      "maldivesHigh",
      "maldivesIslandsLow",
      "maldivesIslandsHigh"
    ]
  },
  "MW": {
    "country": "Malawi",
    "country_code": "MW",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "malawiLow",
      "malawiHigh"
    ]
  },
  "MX": {
    "country": "Mexico",
    "country_code": "MX",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "mexicoLow",
      "mexicoHigh"
    ]
  },
  "MY": {
    "country": "Malaysia",
    "country_code": "MY",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "malaysiaLow",
      "malaysiaHigh"
    ]
  },
  "MZ": {
    "country": "Mozambique",
    "country_code": "MZ",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "mozambiqueLow",
      "mozambiqueHigh"
    ]
  },
  "NA": {
    "country": "Namibia",
    "country_code": "NA",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "namibiaLow",
      "namibiaHigh"
    ]
  },
  "NC": {
    "country": "New Caledonia",
    "country_code": "NC",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "NE": {
    "country": "Niger",
    "country_code": "NE",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "nigerLow",
      "nigerHigh"
    ]
  },
  "NF": {
    "country": "Norfolk Island",
    "country_code": "NF",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "NG": {
    "country": "Nigeria",
    "country_code": "NG",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "nigeriaLow",
      "nigeriaHigh"
    ]
  },
  "NI": {
    "country": "Nicaragua",
    "country_code": "NI",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "nicaraguaLow",
      "nicaraguaHigh"
    ]
  },
  "NL": {
    "country": "Netherlands",
    "country_code": "NL",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "netherlandsLow",
      "netherlandsHigh"
    ]
  },
  "NO": {
    "country": "Norway",
    "country_code": "NO",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "norway2020Low",
      "norway2020High",
      "norwayLow",
      "norwayHigh"
    ]
  },
  "NP": {
    "country": "Nepal",
    "country_code": "NP",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "nepal2020Low",
      "nepal2020High",
      "nepalLow",
      "nepalHigh"
    ]
  },
  "NR": {
    "country": "Nauru",
    "country_code": "NR",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "NU": {
    "country": "Niue",
    "country_code": "NU",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "NZ": {
    "country": "New Zealand",
    "country_code": "NZ",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [
      "newZealandLow",
      "newZealandHigh"
    ]
  },
  "OM": {
    "country": "Oman",
    "country_code": "OM",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "omanLow",
      "omanHigh"
    ]
  },
  "PA": {
    "country": "Panama",
    "country_code": "PA",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "panamaLow",
      "panamaHigh"
    ]
  },
  "PE": {
    "country": "Peru",
    "country_code": "PE",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "peruLow",
      "peruHigh"
    ]
  },
  "PF": {
    "country": "French Polynesia",
    "country_code": "PF",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "PG": {
    "country": "Papua New Guinea",
    "country_code": "PG",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "PH": {
    "country": "Philippines",
    "country_code": "PH",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "philippinesLow",
      "philippinesHigh"
    ]
  },
  "PK": {
    "country": "Pakistan",
    "country_code": "PK",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "pakistanLow",
      "pakistanHigh"
    ]
  },
  "PL": {
    "country": "Poland",
    "country_code": "PL",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "polandLow",
      "polandHigh"
    ]
  },
  "PM": {
    "country": "Saint Pierre and Miquelon",
    "country_code": "PM",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "stPierreMiquelonLow",
      "stPierreMiquelonHigh"
    ]
  },
  "PN": {
    "country": "Pitcairn",
    "country_code": "PN",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "PR": {
    "country": "Puerto Rico",
    "country_code": "PR",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "puertoRicoLow",
      "puertoRicoHigh"
    ]
  },
  "PS": {
    "country": "Palestinian, State of",
    "country_code": "PS",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "palestineLow",
      "palestineHigh"
    ]
  },
  "PT": {
    "country": "Portugal",
    "country_code": "PT",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "portugalLow",
      "portugalHigh",
      "portugalRegionsLow",
      "portugalRegionsHigh"
    ]
  },
  "PW": {
    "country": "Palau",
    "country_code": "PW",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "PY": {
    "country": "Paraguay",
    "country_code": "PY",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "paraguayLow",
      "paraguayHigh"
    ]
  },
  "QA": {
    "country": "Qatar",
    "country_code": "QA",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "qatarLow",
      "qatarHigh"
    ]
  },
  "RE": {
    "country": "Reunion",
    "country_code": "RE",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "RO": {
    "country": "Romania",
    "country_code": "RO",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "romaniaLow",
      "romaniaHigh"
    ]
  },
  "RS": {
    "country": "Serbia",
    "country_code": "RS",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "serbiaLow",
      "serbiaHigh",
      "serbiaNoKosovoLow",
      "serbiaNoKosovoHigh"
    ]
  },
  "RU": {
    "country": "Russian Federation",
    "country_code": "RU",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "russiaLow",
      "russiaHigh",
      "russiaCrimeaLow",
      "russiaCrimeaHigh"
    ]
  },
  "RW": {
    "country": "Rwanda",
    "country_code": "RW",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "rwandaLow",
      "rwandaHigh"
    ]
  },
  "SA": {
    "country": "Saudi Arabia",
    "country_code": "SA",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "saudiArabiaLow",
      "saudiArabiaHigh"
    ]
  },
  "SB": {
    "country": "Solomon Islands",
    "country_code": "SB",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [
      "solomonIslandsLow",
      "solomonIslandsHigh"
    ]
  },
  "SC": {
    "country": "Seychelles",
    "country_code": "SC",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "seychellesLow",
      "seychellesHigh"
    ]
  },
  "SD": {
    "country": "Sudan",
    "country_code": "SD",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "sudanLow",
      "sudanHigh"
    ]
  },
  "SE": {
    "country": "Sweden",
    "country_code": "SE",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "swedenLow",
      "swedenHigh"
    ]
  },
  "SG": {
    "country": "Singapore",
    "country_code": "SG",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "singaporeLow",
      "singaporeHigh"
    ]
  },
  "SH": {
    "country": "Saint Helena, Ascension and Tristan da Cunha",
    "country_code": "SH",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "saintHelenaLow",
      "saintHelenaHigh"
    ]
  },
  "SI": {
    "country": "Slovenia",
    "country_code": "SI",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "sloveniaLow",
      "sloveniaHigh",
      "sloveniaRegionsLow",
      "sloveniaRegionsHigh"
    ]
  },
  "SJ": {
    "country": "Svalbard and Jan Mayen",
    "country_code": "SJ",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "svalbardLow",
      "svalbardHigh"
    ]
  },
  "SK": {
    "country": "Slovakia",
    "country_code": "SK",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "slovakiaLow",
      "slovakiaHigh"
    ]
  },
  "SL": {
    "country": "Sierra Leone",
    "country_code": "SL",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "sierraLeoneLow",
      "sierraLeoneHigh"
    ]
  },
  "SM": {
    "country": "San Marino",
    "country_code": "SM",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "sanMarinoLow",
      "sanMarinoHigh"
    ]
  },
  "SN": {
    "country": "Senegal",
    "country_code": "SN",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "senegalLow",
      "senegalHigh"
    ]
  },
  "SO": {
    "country": "Somalia",
    "country_code": "SO",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "somaliaLow",
      "somaliaHigh"
    ]
  },
  "SR": {
    "country": "Suriname",
    "country_code": "SR",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "surinameLow",
      "surinameHigh"
    ]
  },
  "SS": {
    "country": "South Sudan",
    "country_code": "SS",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "southSudanLow",
      "southSudanHigh",
      "southSudan2015Low",
      "southSudan2015High"
    ]
  },
  "ST": {
    "country": "Sao Tome and Principe",
    "country_code": "ST",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "saoTomePrincipeLow",
      "saoTomePrincipeHigh"
    ]
  },
  "SV": {
    "country": "El Salvador",
    "country_code": "SV",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "elSalvadorLow",
      "elSalvadorHigh"
    ]
  },
  "SX": {
    "country": "Sint Maarten (Dutch Part)",
    "country_code": "SX",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "SY": {
    "country": "Syrian Arab Republic",
    "country_code": "SY",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "syriaLow",
      "syriaHigh"
    ]
  },
  "SZ": {
    "country": "Swaziland",
    "country_code": "SZ",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "eswatiniLow",
      "eswatiniHigh"
    ]
  },
  "TC": {
    "country": "Turks and Caicos Islands",
    "country_code": "TC",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "TD": {
    "country": "Chad",
    "country_code": "TD",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "chadLow",
      "chadHigh"
    ]
  },
  "TF": {
    "country": "French Southern Territories",
    "country_code": "TF",
    "continent_code": "AN",
    "continent": "Antarctica",
    "maps": []
  },
  "TG": {
    "country": "Togo",
    "country_code": "TG",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "togoLow",
      "togoHigh"
    ]
  },
  "TH": {
    "country": "Thailand",
    "country_code": "TH",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "thailandLow",
      "thailandHigh"
    ]
  },
  "TJ": {
    "country": "Tajikistan",
    "country_code": "TJ",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "tajikistanLow",
      "tajikistanHigh"
    ]
  },
  "TK": {
    "country": "Tokelau",
    "country_code": "TK",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "TL": {
    "country": "Timor-Leste",
    "country_code": "TL",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "timorLesteLow",
      "timorLesteHigh"
    ]
  },
  "TM": {
    "country": "Turkmenistan",
    "country_code": "TM",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "turkmenistanLow",
      "turkmenistanHigh"
    ]
  },
  "TN": {
    "country": "Tunisia",
    "country_code": "TN",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "tunisiaLow",
      "tunisiaHigh"
    ]
  },
  "TO": {
    "country": "Tonga",
    "country_code": "TO",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "TR": {
    "country": "Türkiye",
    "country_code": "TR",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "turkeyLow",
      "turkeyHigh"
    ]
  },
  "TT": {
    "country": "Trinidad and Tobago",
    "country_code": "TT",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "trinidadTobagoLow",
      "trinidadTobagoHigh"
    ]
  },
  "TV": {
    "country": "Tuvalu",
    "country_code": "TV",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "TW": {
    "country": "Taiwan",
    "country_code": "TW",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "taiwanLow",
      "taiwanHigh"
    ]
  },
  "TZ": {
    "country": "Tanzania, United Republic of",
    "country_code": "TZ",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "tanzaniaLow",
      "tanzaniaHigh"
    ]
  },
  "UA": {
    "country": "Ukraine",
    "country_code": "UA",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "ukraineLow",
      "ukraineHigh"
    ]
  },
  "UG": {
    "country": "Uganda",
    "country_code": "UG",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "ugandaLow",
      "ugandaHigh",
      "ugandaRegionsLow",
      "ugandaRegionsHigh"
    ]
  },
  "UM": {
    "country": "United States Minor Outlying Islands",
    "country_code": "UM",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "US": {
    "country": "United States",
    "country_code": "US",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "usaLow",
      "usaHigh",
      "usaTerritoriesLow",
      "usaTerritoriesHigh",
      "usaTerritories2Low",
      "usaTerritories2High"
    ]
  },
  "UY": {
    "country": "Uruguay",
    "country_code": "UY",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "uruguayLow",
      "uruguayHigh"
    ]
  },
  "UZ": {
    "country": "Uzbekistan",
    "country_code": "UZ",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "uzbekistanLow",
      "uzbekistanHigh"
    ]
  },
  "VA": {
    "country": "Holy See (Vatican City State)",
    "country_code": "VA",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "vaticanLow",
      "vaticanHigh"
    ]
  },
  "VC": {
    "country": "Saint Vincent and the Grenadines",
    "country_code": "VC",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "saintVincentLow",
      "saintVincentHigh"
    ]
  },
  "VE": {
    "country": "Venezuela, Bolivarian Republic of",
    "country_code": "VE",
    "continent_code": "SA",
    "continent": "South America",
    "maps": [
      "venezuelaLow",
      "venezuelaHigh"
    ]
  },
  "VG": {
    "country": "Virgin Islands, British",
    "country_code": "VG",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "britishVirginIslandsLow",
      "britishVirginIslandsHigh"
    ]
  },
  "VI": {
    "country": "Virgin Islands, U.S.",
    "country_code": "VI",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [
      "usVirginIslandsLow",
      "usVirginIslandsHigh"
    ]
  },
  "VN": {
    "country": "Viet Nam",
    "country_code": "VN",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "vietnamLow",
      "vietnamHigh"
    ]
  },
  "VU": {
    "country": "Vanuatu",
    "country_code": "VU",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "WF": {
    "country": "Wallis and Futuna",
    "country_code": "WF",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "WS": {
    "country": "Samoa",
    "country_code": "WS",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [
      "samoaLow",
      "samoaHigh"
    ]
  },
  "YE": {
    "country": "Yemen",
    "country_code": "YE",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [
      "yemenLow",
      "yemenHigh"
    ]
  },
  "YT": {
    "country": "Mayotte",
    "country_code": "YT",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "ZA": {
    "country": "South Africa",
    "country_code": "ZA",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "southAfricaLow",
      "southAfricaHigh"
    ]
  },
  "ZM": {
    "country": "Zambia",
    "country_code": "ZM",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "zambiaLow",
      "zambiaHigh"
    ]
  },
  "ZW": {
    "country": "Zimbabwe",
    "country_code": "ZW",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [
      "zimbabweLow",
      "zimbabweHigh"
    ]
  },
  "XK": {
    "country": "Kosovo",
    "country_code": "XK",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [
      "kosovoLow",
      "kosovoHigh"
    ]
  }
}

export const countries_worldle_data = [
  {
    code: "AD",
    latitude: 42.546245,
    longitude: 1.601554,
    name: "Andorra",
  },
  {
    code: "AE",
    latitude: 23.424076,
    longitude: 53.847818,
    name: "United Arab Emirates",
  },
  {
    code: "AF",
    latitude: 33.93911,
    longitude: 67.709953,
    name: "Afghanistan",
  },
  {
    code: "AG",
    latitude: 17.060816,
    longitude: -61.796428,
    name: "Antigua and Barbuda",
  },
  {
    code: "AI",
    latitude: 18.220554,
    longitude: -63.068615,
    name: "Anguilla",
  },
  {
    code: "AL",
    latitude: 41.153332,
    longitude: 20.168331,
    name: "Albania",
  },
  {
    code: "AM",
    latitude: 40.069099,
    longitude: 45.038189,
    name: "Armenia",
  },
  {
    code: "AN",
    latitude: 12.226079,
    longitude: -69.060087,
    name: "Curaçao",
  },
  {
    code: "AO",
    latitude: -11.202692,
    longitude: 17.873887,
    name: "Angola",
  },
  {
    code: "AQ",
    latitude: -75.250973,
    longitude: -0.071389,
    name: "Antarctica",
  },
  {
    code: "AR",
    latitude: -38.416097,
    longitude: -63.616672,
    name: "Argentina",
  },
  {
    code: "AS",
    latitude: -14.270972,
    longitude: -170.132217,
    name: "American Samoa",
  },
  {
    code: "AT",
    latitude: 47.516231,
    longitude: 14.550072,
    name: "Austria",
  },
  {
    code: "AU",
    latitude: -25.274398,
    longitude: 133.775136,
    name: "Australia",
  },
  {
    code: "AW",
    latitude: 12.52111,
    longitude: -69.968338,
    name: "Aruba",
  },
  {
    code: "AZ",
    latitude: 40.143105,
    longitude: 47.576927,
    name: "Azerbaijan",
  },
  {
    code: "BA",
    latitude: 43.915886,
    longitude: 17.679076,
    name: "Bosnia and Herzegovina",
  },
  {
    code: "BB",
    latitude: 13.193887,
    longitude: -59.543198,
    name: "Barbados",
  },
  {
    code: "BD",
    latitude: 23.684994,
    longitude: 90.356331,
    name: "Bangladesh",
  },
  {
    code: "BE",
    latitude: 50.503887,
    longitude: 4.469936,
    name: "Belgium",
  },
  {
    code: "BF",
    latitude: 12.238333,
    longitude: -1.561593,
    name: "Burkina Faso",
  },
  {
    code: "BG",
    latitude: 42.733883,
    longitude: 25.48583,
    name: "Bulgaria",
  },
  {
    code: "BH",
    latitude: 25.930414,
    longitude: 50.637772,
    name: "Bahrain",
  },
  {
    code: "BI",
    latitude: -3.373056,
    longitude: 29.918886,
    name: "Burundi",
  },
  {
    code: "BJ",
    latitude: 9.30769,
    longitude: 2.315834,
    name: "Benin",
  },
  {
    code: "BM",
    latitude: 32.321384,
    longitude: -64.75737,
    name: "Bermuda",
  },
  {
    code: "BN",
    latitude: 4.535277,
    longitude: 114.727669,
    name: "Brunei",
  },
  {
    code: "BO",
    latitude: -16.290154,
    longitude: -63.588653,
    name: "Bolivia",
  },
  {
    code: "BR",
    latitude: -14.235004,
    longitude: -51.92528,
    name: "Brazil",
  },
  {
    code: "BS",
    latitude: 25.03428,
    longitude: -77.39628,
    name: "Bahamas",
  },
  {
    code: "BT",
    latitude: 27.514162,
    longitude: 90.433601,
    name: "Bhutan",
  },
  {
    code: "BV",
    latitude: -54.423199,
    longitude: 3.413194,
    name: "Bouvet Island",
  },
  {
    code: "BW",
    latitude: -22.328474,
    longitude: 24.684866,
    name: "Botswana",
  },
  {
    code: "BY",
    latitude: 53.709807,
    longitude: 27.953389,
    name: "Belarus",
  },
  {
    code: "BZ",
    latitude: 17.189877,
    longitude: -88.49765,
    name: "Belize",
  },
  {
    code: "CA",
    latitude: 56.130366,
    longitude: -106.346771,
    name: "Canada",
  },
  {
    code: "CC",
    latitude: -12.164165,
    longitude: 96.870956,
    name: "Cocos Islands",
  },
  {
    code: "CD",
    latitude: -4.038333,
    longitude: 21.758664,
    name: "Democratic Republic of the Congo",
  },
  {
    code: "CF",
    latitude: 6.611111,
    longitude: 20.939444,
    name: "Central African Republic",
  },
  {
    code: "CG",
    latitude: -0.228021,
    longitude: 15.827659,
    name: "Congo",
  },
  {
    code: "CH",
    latitude: 46.818188,
    longitude: 8.227512,
    name: "Switzerland",
  },
  {
    code: "CI",
    latitude: 7.539989,
    longitude: -5.54708,
    name: "Côte d'Ivoire",
  },
  {
    code: "CK",
    latitude: -21.236736,
    longitude: -159.777671,
    name: "Cook Islands",
  },
  {
    code: "CL",
    latitude: -35.675147,
    longitude: -71.542969,
    name: "Chile",
  },
  {
    code: "CM",
    latitude: 7.369722,
    longitude: 12.354722,
    name: "Cameroon",
  },
  {
    code: "CN",
    latitude: 35.86166,
    longitude: 104.195397,
    name: "China",
  },
  {
    code: "CO",
    latitude: 4.570868,
    longitude: -74.297333,
    name: "Colombia",
  },
  {
    code: "CR",
    latitude: 9.748917,
    longitude: -83.753428,
    name: "Costa Rica",
  },
  {
    code: "CU",
    latitude: 21.521757,
    longitude: -77.781167,
    name: "Cuba",
  },
  {
    code: "CV",
    latitude: 16.002082,
    longitude: -24.013197,
    name: "Cape Verde",
  },
  {
    code: "CX",
    latitude: -10.447525,
    longitude: 105.690449,
    name: "Christmas Island",
  },
  {
    code: "CY",
    latitude: 35.126413,
    longitude: 33.429859,
    name: "Cyprus",
  },
  {
    code: "CZ",
    latitude: 49.817492,
    longitude: 15.472962,
    name: "Czechia",
  },
  {
    code: "DE",
    latitude: 51.165691,
    longitude: 10.451526,
    name: "Germany",
  },
  {
    code: "DJ",
    latitude: 11.825138,
    longitude: 42.590275,
    name: "Djibouti",
  },
  {
    code: "DK",
    latitude: 56.26392,
    longitude: 9.501785,
    name: "Denmark",
  },
  {
    code: "DM",
    latitude: 15.414999,
    longitude: -61.370976,
    name: "Dominica",
  },
  {
    code: "DO",
    latitude: 18.735693,
    longitude: -70.162651,
    name: "Dominican Republic",
  },
  {
    code: "DZ",
    latitude: 28.033886,
    longitude: 1.659626,
    name: "Algeria",
  },
  {
    code: "EC",
    latitude: -1.831239,
    longitude: -78.183406,
    name: "Ecuador",
  },
  {
    code: "EE",
    latitude: 58.595272,
    longitude: 25.013607,
    name: "Estonia",
  },
  {
    code: "EG",
    latitude: 26.820553,
    longitude: 30.802498,
    name: "Egypt",
  },
  {
    code: "EH",
    latitude: 24.215527,
    longitude: -12.885834,
    name: "Western Sahara",
  },
  {
    code: "ER",
    latitude: 15.179384,
    longitude: 39.782334,
    name: "Eritrea",
  },
  {
    code: "ES",
    latitude: 40.463667,
    longitude: -3.74922,
    name: "Spain",
  },
  {
    code: "ET",
    latitude: 9.145,
    longitude: 40.489673,
    name: "Ethiopia",
  },
  {
    code: "FI",
    latitude: 61.92411,
    longitude: 25.748151,
    name: "Finland",
  },
  {
    code: "FJ",
    latitude: -16.578193,
    longitude: 179.414413,
    name: "Fiji",
  },
  {
    code: "FK",
    latitude: -51.796253,
    longitude: -59.523613,
    name: "Falkland Islands (Malvinas)",
  },
  {
    code: "FM",
    latitude: 7.425554,
    longitude: 150.550812,
    name: "Micronesia",
  },
  {
    code: "FO",
    latitude: 61.892635,
    longitude: -6.911806,
    name: "Faroe Islands",
  },
  {
    code: "FR",
    latitude: 46.227638,
    longitude: 2.213749,
    name: "France",
  },
  {
    code: "GA",
    latitude: -0.803689,
    longitude: 11.609444,
    name: "Gabon",
  },
  {
    code: "GB",
    latitude: 55.378051,
    longitude: -3.435973,
    name: "United Kingdom",
  },
  {
    code: "GD",
    latitude: 12.262776,
    longitude: -61.604171,
    name: "Grenada",
  },
  {
    code: "GE",
    latitude: 42.315407,
    longitude: 43.356892,
    name: "Georgia",
  },
  {
    code: "GF",
    latitude: 3.933889,
    longitude: -53.125782,
    name: "French Guiana",
  },
  {
    code: "GG",
    latitude: 49.465691,
    longitude: -2.585278,
    name: "Guernsey",
  },
  {
    code: "GH",
    latitude: 7.946527,
    longitude: -1.023194,
    name: "Ghana",
  },
  {
    code: "GI",
    latitude: 36.137741,
    longitude: -5.345374,
    name: "Gibraltar",
  },
  {
    code: "GL",
    latitude: 71.706936,
    longitude: -42.604303,
    name: "Greenland",
  },
  {
    code: "GM",
    latitude: 13.443182,
    longitude: -15.310139,
    name: "Gambia",
  },
  {
    code: "GN",
    latitude: 9.945587,
    longitude: -9.696645,
    name: "Guinea",
  },
  {
    code: "GP",
    latitude: 16.08663,
    longitude: -61.422873,
    name: "Guadeloupe",
  },
  {
    code: "GQ",
    latitude: 1.650801,
    longitude: 10.267895,
    name: "Equatorial Guinea",
  },
  {
    code: "GR",
    latitude: 39.074208,
    longitude: 21.824312,
    name: "Greece",
  },
  {
    code: "GS",
    latitude: -54.429579,
    longitude: -36.587909,
    name: "South Georgia and the South Sandwich Islands",
  },
  {
    code: "GT",
    latitude: 15.783471,
    longitude: -90.230759,
    name: "Guatemala",
  },
  {
    code: "GU",
    latitude: 13.444304,
    longitude: 144.793731,
    name: "Guam",
  },
  {
    code: "GW",
    latitude: 11.803749,
    longitude: -15.180413,
    name: "Guinea-Bissau",
  },
  {
    code: "GY",
    latitude: 4.860416,
    longitude: -58.93018,
    name: "Guyana",
  },
  {
    code: "GZ",
    latitude: 31.354676,
    longitude: 34.308825,
    name: "Gaza Strip",
  },
  {
    code: "HK",
    latitude: 22.396428,
    longitude: 114.109497,
    name: "Hong Kong",
  },
  {
    code: "HM",
    latitude: -53.08181,
    longitude: 73.504158,
    name: "Heard Island and McDonald Islands",
  },
  {
    code: "HN",
    latitude: 15.199999,
    longitude: -86.241905,
    name: "Honduras",
  },
  {
    code: "HR",
    latitude: 45.1,
    longitude: 15.2,
    name: "Croatia",
  },
  {
    code: "HT",
    latitude: 18.971187,
    longitude: -72.285215,
    name: "Haiti",
  },
  {
    code: "HU",
    latitude: 47.162494,
    longitude: 19.503304,
    name: "Hungary",
  },
  {
    code: "ID",
    latitude: -0.789275,
    longitude: 113.921327,
    name: "Indonesia",
  },
  {
    code: "IE",
    latitude: 53.41291,
    longitude: -8.24389,
    name: "Ireland",
  },
  {
    code: "IL",
    latitude: 31.046051,
    longitude: 34.851612,
    name: "Israel",
  },
  {
    code: "IM",
    latitude: 54.236107,
    longitude: -4.548056,
    name: "Isle of Man",
  },
  {
    code: "IN",
    latitude: 20.593684,
    longitude: 78.96288,
    name: "India",
  },
  {
    code: "IO",
    latitude: -6.343194,
    longitude: 71.876519,
    name: "British Indian Ocean Territory",
  },
  {
    code: "IQ",
    latitude: 33.223191,
    longitude: 43.679291,
    name: "Iraq",
  },
  {
    code: "IR",
    latitude: 32.427908,
    longitude: 53.688046,
    name: "Iran",
  },
  {
    code: "IS",
    latitude: 64.963051,
    longitude: -19.020835,
    name: "Iceland",
  },
  {
    code: "IT",
    latitude: 41.87194,
    longitude: 12.56738,
    name: "Italy",
  },
  {
    code: "JE",
    latitude: 49.214439,
    longitude: -2.13125,
    name: "Jersey",
  },
  {
    code: "JM",
    latitude: 18.109581,
    longitude: -77.297508,
    name: "Jamaica",
  },
  {
    code: "JO",
    latitude: 30.585164,
    longitude: 36.238414,
    name: "Jordan",
  },
  {
    code: "JP",
    latitude: 36.204824,
    longitude: 138.252924,
    name: "Japan",
  },
  {
    code: "KE",
    latitude: -0.023559,
    longitude: 37.906193,
    name: "Kenya",
  },
  {
    code: "KG",
    latitude: 41.20438,
    longitude: 74.766098,
    name: "Kyrgyzstan",
  },
  {
    code: "KH",
    latitude: 12.565679,
    longitude: 104.990963,
    name: "Cambodia",
  },
  {
    code: "KI",
    latitude: -3.370417,
    longitude: -168.734039,
    name: "Kiribati",
  },
  {
    code: "KM",
    latitude: -11.875001,
    longitude: 43.872219,
    name: "Comoros",
  },
  {
    code: "KN",
    latitude: 17.357822,
    longitude: -62.782998,
    name: "Saint Kitts and Nevis",
  },
  {
    code: "KP",
    latitude: 40.339852,
    longitude: 127.510093,
    name: "North Korea",
  },
  {
    code: "KR",
    latitude: 35.907757,
    longitude: 127.766922,
    name: "South Korea",
  },
  {
    code: "KW",
    latitude: 29.31166,
    longitude: 47.481766,
    name: "Kuwait",
  },
  {
    code: "KY",
    latitude: 19.513469,
    longitude: -80.566956,
    name: "Cayman Islands",
  },
  {
    code: "KZ",
    latitude: 48.019573,
    longitude: 66.923684,
    name: "Kazakhstan",
  },
  {
    code: "LA",
    latitude: 19.85627,
    longitude: 102.495496,
    name: "Laos",
  },
  {
    code: "LB",
    latitude: 33.854721,
    longitude: 35.862285,
    name: "Lebanon",
  },
  {
    code: "LC",
    latitude: 13.909444,
    longitude: -60.978893,
    name: "Saint Lucia",
  },
  {
    code: "LI",
    latitude: 47.166,
    longitude: 9.555373,
    name: "Liechtenstein",
  },
  {
    code: "LK",
    latitude: 7.873054,
    longitude: 80.771797,
    name: "Sri Lanka",
  },
  {
    code: "LR",
    latitude: 6.428055,
    longitude: -9.429499,
    name: "Liberia",
  },
  {
    code: "LS",
    latitude: -29.609988,
    longitude: 28.233608,
    name: "Lesotho",
  },
  {
    code: "LT",
    latitude: 55.169438,
    longitude: 23.881275,
    name: "Lithuania",
  },
  {
    code: "LU",
    latitude: 49.815273,
    longitude: 6.129583,
    name: "Luxembourg",
  },
  {
    code: "LV",
    latitude: 56.879635,
    longitude: 24.603189,
    name: "Latvia",
  },
  {
    code: "LY",
    latitude: 26.3351,
    longitude: 17.228331,
    name: "Libya",
  },
  {
    code: "MA",
    latitude: 31.791702,
    longitude: -7.09262,
    name: "Morocco",
  },
  {
    code: "MC",
    latitude: 43.750298,
    longitude: 7.412841,
    name: "Monaco",
  },
  {
    code: "MD",
    latitude: 47.411631,
    longitude: 28.369885,
    name: "Moldova",
  },
  {
    code: "ME",
    latitude: 42.708678,
    longitude: 19.37439,
    name: "Montenegro",
  },
  {
    code: "MG",
    latitude: -18.766947,
    longitude: 46.869107,
    name: "Madagascar",
  },
  {
    code: "MK",
    latitude: 41.608635,
    longitude: 21.745275,
    name: "North Macedonia",
  },
  {
    code: "ML",
    latitude: 17.570692,
    longitude: -3.996166,
    name: "Mali",
  },
  {
    code: "MM",
    latitude: 21.913965,
    longitude: 95.956223,
    name: "Myanmar",
  },
  {
    code: "MN",
    latitude: 46.862496,
    longitude: 103.846656,
    name: "Mongolia",
  },
  {
    code: "MO",
    latitude: 22.198745,
    longitude: 113.543873,
    name: "Macao",
  },
  {
    code: "MP",
    latitude: 17.33083,
    longitude: 145.38469,
    name: "Northern Mariana Islands",
  },
  {
    code: "MQ",
    latitude: 14.641528,
    longitude: -61.024174,
    name: "Martinique",
  },
  {
    code: "MR",
    latitude: 21.00789,
    longitude: -10.940835,
    name: "Mauritania",
  },
  {
    code: "MS",
    latitude: 16.742498,
    longitude: -62.187366,
    name: "Montserrat",
  },
  {
    code: "MT",
    latitude: 35.937496,
    longitude: 14.375416,
    name: "Malta",
  },
  {
    code: "MU",
    latitude: -20.348404,
    longitude: 57.552152,
    name: "Mauritius",
  },
  {
    code: "MV",
    latitude: 3.202778,
    longitude: 73.22068,
    name: "Maldives",
  },
  {
    code: "MW",
    latitude: -13.254308,
    longitude: 34.301525,
    name: "Malawi",
  },
  {
    code: "MX",
    latitude: 23.634501,
    longitude: -102.552784,
    name: "Mexico",
  },
  {
    code: "MY",
    latitude: 4.040255,
    longitude: 109.091912,
    name: "Malaysia",
  },
  {
    code: "MZ",
    latitude: -18.665695,
    longitude: 35.529562,
    name: "Mozambique",
  },
  {
    code: "NA",
    latitude: -22.95764,
    longitude: 18.49041,
    name: "Namibia",
  },
  {
    code: "NC",
    latitude: -20.904305,
    longitude: 165.618042,
    name: "New Caledonia",
  },
  {
    code: "NE",
    latitude: 17.607789,
    longitude: 8.081666,
    name: "Niger",
  },
  {
    code: "NF",
    latitude: -29.040835,
    longitude: 167.954712,
    name: "Norfolk Island",
  },
  {
    code: "NG",
    latitude: 9.081999,
    longitude: 8.675277,
    name: "Nigeria",
  },
  {
    code: "NI",
    latitude: 12.865416,
    longitude: -85.207229,
    name: "Nicaragua",
  },
  {
    code: "NL",
    latitude: 52.132633,
    longitude: 5.291266,
    name: "Netherlands",
  },
  {
    code: "NO",
    latitude: 60.472024,
    longitude: 8.468946,
    name: "Norway",
  },
  {
    code: "NP",
    latitude: 28.394857,
    longitude: 84.124008,
    name: "Nepal",
  },
  {
    code: "NR",
    latitude: -0.522778,
    longitude: 166.931503,
    name: "Nauru",
  },
  {
    code: "NU",
    latitude: -19.054445,
    longitude: -169.867233,
    name: "Niue",
  },
  {
    code: "NZ",
    latitude: -40.900557,
    longitude: 174.885971,
    name: "New Zealand",
  },
  {
    code: "OM",
    latitude: 21.512583,
    longitude: 55.923255,
    name: "Oman",
  },
  {
    code: "PA",
    latitude: 8.537981,
    longitude: -80.782127,
    name: "Panama",
  },
  {
    code: "PE",
    latitude: -9.189967,
    longitude: -75.015152,
    name: "Peru",
  },
  {
    code: "PF",
    latitude: -17.679742,
    longitude: -149.406843,
    name: "French Polynesia",
  },
  {
    code: "PG",
    latitude: -6.314993,
    longitude: 143.95555,
    name: "Papua New Guinea",
  },
  {
    code: "PH",
    latitude: 12.879721,
    longitude: 121.774017,
    name: "Philippines",
  },
  {
    code: "PK",
    latitude: 30.375321,
    longitude: 69.345116,
    name: "Pakistan",
  },
  {
    code: "PL",
    latitude: 51.919438,
    longitude: 19.145136,
    name: "Poland",
  },
  {
    code: "PM",
    latitude: 46.941936,
    longitude: -56.27111,
    name: "Saint Pierre and Miquelon",
  },
  {
    code: "PN",
    latitude: -24.703615,
    longitude: -127.439308,
    name: "Pitcairn Islands",
  },
  {
    code: "PR",
    latitude: 18.220833,
    longitude: -66.590149,
    name: "Puerto Rico",
  },
  {
    code: "PS",
    latitude: 31.952162,
    longitude: 35.233154,
    name: "Palestine",
  },
  {
    code: "PT",
    latitude: 39.399872,
    longitude: -8.224454,
    name: "Portugal",
  },
  {
    code: "PW",
    latitude: 7.51498,
    longitude: 134.58252,
    name: "Palau",
  },
  {
    code: "PY",
    latitude: -23.442503,
    longitude: -58.443832,
    name: "Paraguay",
  },
  {
    code: "QA",
    latitude: 25.354826,
    longitude: 51.183884,
    name: "Qatar",
  },
  {
    code: "RE",
    latitude: -21.115141,
    longitude: 55.536384,
    name: "Réunion",
  },
  {
    code: "RO",
    latitude: 45.943161,
    longitude: 24.96676,
    name: "Romania",
  },
  {
    code: "RS",
    latitude: 44.016521,
    longitude: 21.005859,
    name: "Serbia",
  },
  {
    code: "RU",
    latitude: 61.52401,
    longitude: 105.318756,
    name: "Russia",
  },
  {
    code: "RW",
    latitude: -1.940278,
    longitude: 29.873888,
    name: "Rwanda",
  },
  {
    code: "SA",
    latitude: 23.885942,
    longitude: 45.079162,
    name: "Saudi Arabia",
  },
  {
    code: "SB",
    latitude: -9.64571,
    longitude: 160.156194,
    name: "Solomon Islands",
  },
  {
    code: "SC",
    latitude: -4.679574,
    longitude: 55.491977,
    name: "Seychelles",
  },
  {
    code: "SD",
    latitude: 15.8905231,
    longitude: 30.7671933,
    name: "Sudan",
  },
  {
    code: "SS",
    latitude: 6.85065,
    longitude: 30.659016,
    name: "South Sudan",
  },
  {
    code: "SE",
    latitude: 60.128161,
    longitude: 18.643501,
    name: "Sweden",
  },
  {
    code: "SG",
    latitude: 1.352083,
    longitude: 103.819836,
    name: "Singapore",
  },
  {
    code: "SH",
    latitude: -24.143474,
    longitude: -10.030696,
    name: "Saint Helena",
  },
  {
    code: "SI",
    latitude: 46.151241,
    longitude: 14.995463,
    name: "Slovenia",
  },
  {
    code: "SJ",
    latitude: 77.553604,
    longitude: 23.670272,
    name: "Svalbard and Jan Mayen",
  },
  {
    code: "SK",
    latitude: 48.669026,
    longitude: 19.699024,
    name: "Slovakia",
  },
  {
    code: "SL",
    latitude: 8.460555,
    longitude: -11.779889,
    name: "Sierra Leone",
  },
  {
    code: "SM",
    latitude: 43.94236,
    longitude: 12.457777,
    name: "San Marino",
  },
  {
    code: "SN",
    latitude: 14.497401,
    longitude: -14.452362,
    name: "Senegal",
  },
  {
    code: "SO",
    latitude: 5.152149,
    longitude: 46.199616,
    name: "Somalia",
  },
  {
    code: "SR",
    latitude: 3.919305,
    longitude: -56.027783,
    name: "Suriname",
  },
  {
    code: "ST",
    latitude: 0.18636,
    longitude: 6.613081,
    name: "São Tomé and Príncipe",
  },
  {
    code: "SV",
    latitude: 13.794185,
    longitude: -88.89653,
    name: "El Salvador",
  },
  {
    code: "SY",
    latitude: 34.802075,
    longitude: 38.996815,
    name: "Syria",
  },
  {
    code: "SZ",
    latitude: -26.522503,
    longitude: 31.465866,
    name: "Eswatini",
  },
  {
    code: "TC",
    latitude: 21.694025,
    longitude: -71.797928,
    name: "Turks and Caicos Islands",
  },
  {
    code: "TD",
    latitude: 15.454166,
    longitude: 18.732207,
    name: "Chad",
  },
  {
    code: "TF",
    latitude: -49.280366,
    longitude: 69.348557,
    name: "French Southern Territories - Kerguelen Islands",
  },
  {
    code: "TG",
    latitude: 8.619543,
    longitude: 0.824782,
    name: "Togo",
  },
  {
    code: "TH",
    latitude: 15.870032,
    longitude: 100.992541,
    name: "Thailand",
  },
  {
    code: "TJ",
    latitude: 38.861034,
    longitude: 71.276093,
    name: "Tajikistan",
  },
  {
    code: "TK",
    latitude: -8.967363,
    longitude: -171.855881,
    name: "Tokelau",
  },
  {
    code: "TL",
    latitude: -8.874217,
    longitude: 125.727539,
    name: "Timor-Leste",
  },
  {
    code: "TM",
    latitude: 38.969719,
    longitude: 59.556278,
    name: "Turkmenistan",
  },
  {
    code: "TN",
    latitude: 33.886917,
    longitude: 9.537499,
    name: "Tunisia",
  },
  {
    code: "TO",
    latitude: -21.178986,
    longitude: -175.198242,
    name: "Tonga (Tongatapu and 'Eua)",
  },
  {
    code: "TR",
    latitude: 38.963745,
    longitude: 35.243322,
    name: "Türkiye",
  },
  {
    code: "TT",
    latitude: 10.691803,
    longitude: -61.222503,
    name: "Trinidad and Tobago",
  },
  {
    code: "TV",
    latitude: -7.109535,
    longitude: 177.64933,
    name: "Tuvalu",
  },
  {
    code: "TW",
    latitude: 23.69781,
    longitude: 120.960515,
    name: "Taiwan",
  },
  {
    code: "TZ",
    latitude: -6.369028,
    longitude: 34.888822,
    name: "Tanzania",
  },
  {
    code: "UA",
    latitude: 48.379433,
    longitude: 31.16558,
    name: "Ukraine",
  },
  {
    code: "UG",
    latitude: 1.373333,
    longitude: 32.290275,
    name: "Uganda",
  },
  {
    code: "US",
    latitude: 37.09024,
    longitude: -95.712891,
    name: "United States",
  },
  {
    code: "UY",
    latitude: -32.522779,
    longitude: -55.765835,
    name: "Uruguay",
  },
  {
    code: "UZ",
    latitude: 41.377491,
    longitude: 64.585262,
    name: "Uzbekistan",
  },
  {
    code: "VA",
    latitude: 41.902916,
    longitude: 12.453389,
    name: "Vatican City",
  },
  {
    code: "VC",
    latitude: 12.984305,
    longitude: -61.287228,
    name: "Saint Vincent and the Grenadines",
  },
  {
    code: "VE",
    latitude: 6.42375,
    longitude: -66.58973,
    name: "Venezuela",
  },
  {
    code: "VG",
    latitude: 18.420695,
    longitude: -64.639968,
    name: "British Virgin Islands",
  },
  {
    code: "VI",
    latitude: 18.335765,
    longitude: -64.896335,
    name: "U.S. Virgin Islands",
  },
  {
    code: "VN",
    latitude: 14.058324,
    longitude: 108.277199,
    name: "Vietnam",
  },
  {
    code: "VU",
    latitude: -15.376706,
    longitude: 166.959158,
    name: "Vanuatu",
  },
  {
    code: "WF",
    latitude: -13.768752,
    longitude: -177.156097,
    name: "Wallis and Futuna",
  },
  {
    code: "WS",
    latitude: -13.759029,
    longitude: -172.104629,
    name: "Samoa",
  },
  {
    code: "XK",
    latitude: 42.602636,
    longitude: 20.902977,
    name: "Kosovo",
  },
  {
    code: "YE",
    latitude: 15.552727,
    longitude: 48.516388,
    name: "Yemen",
  },
  {
    code: "YT",
    latitude: -12.8275,
    longitude: 45.166244,
    name: "Mayotte",
  },
  {
    code: "ZA",
    latitude: -30.559482,
    longitude: 22.937506,
    name: "South Africa",
  },
  {
    code: "ZM",
    latitude: -13.133897,
    longitude: 27.849332,
    name: "Zambia",
  },
  {
    code: "ZW",
    latitude: -19.015438,
    longitude: 29.154857,
    name: "Zimbabwe",
  },
];
