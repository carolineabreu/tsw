const countries = [
  {
    id: "IRL",
    name: "Ireland",
    images: [
      require("./images/Countries/ireland-matheus-camara-da-silva-NL2ORrGh8KM-unsplash.jpg"),
      require("./images/Countries/ireland-k-mitch-hodge-FEQ1gzfBA60-unsplash.jpg"),
      require("./images/Countries/ireland-henrique-craveiro-ezJhm4xrHAM-unsplash.jpg")
    ],
    infos: {
      about: "Ireland, or the Republic of Ireland, is in north-western Europe, occupying most of the island of Ireland.",
      facts: [
        "It's a snake-free country.",
        "The Northern lights are visible from September to March.",
        "There are approximately 30.000 castles in Ireland."
      ],
      language: ["English", "Irish"],
      countryCurrency: "Euro",
      climate: "Mild temperate oceanic",
      population: "5,054,000",
      capital: "Dublin",
      continent: "Europe"
    },
    tips: {
      topCities: ["Dublin", "Cobh", "Cork"],
      activities: [
        "Belfast's Titanic Quarter",
        "Cliffs of Moher",
        "St. Patrick's Day"
      ],
      whenToGo: ["Between March and May, and September to November"]
    }
  },
  {
    id: "ISL",
    name: "Iceland",
    images: [
      require("./images/Countries/iceland-andy-wang-cRiUOdL0pkI-unsplash.jpg"),
      require("./images/Countries/iceland-alexandr-voronsky-P7XMoT68-gc-unsplash.jpg"),
      require("./images/Countries/iceland-ulrich-knoll-ZEnouS7Xtv8-unsplash.jpg")
    ],
    infos: {
      about: "Iceland is a Nordic Island founded during the Viking age and is one of the most active volcanic regions in the world.",
      facts: [
        "The first woman elected president in the world was in Iceland.",
        "There's no McDonald's in Iceland.",
        "99% of Iceland's energy is renewable."
      ],
      language: ["Icelandic"],
      countryCurrency: "Icelandic króna",
      climate: "Subarctic",
      population: "376,248",
      capital: "Reykjavík",
      continent: "Europe"
    },
    tips: {
      topCities: ["Reykjavík", "Isafjordur", "Akureyri"],
      activities: ["Hot Springs", "Whale Watching", "Reynisfjara Beach"],
      whenToGo: ["September to March are the months to see Northern Lights."]
    }
  },
  {
    id: "SWE",
    name: "Sweden",
    images: [
      require("./images/Countries/sweden-anna-hunko-akVefdJ2q_o-unsplash.jpg"),
      require("./images/Countries/sweden-philip-myrtorp-Il5JigytybE-unsplash.jpg"),
      require("./images/Countries/sweden-catalina-johnson-inbePXjTh-A-unsplash.jpg")
    ],
    infos: {
      about: "Sweden, Kingdom of Sweden, is the most extensive Nordic Country. Half of the country is covered with vast forests and has over 200,000 islands.",
      facts: [
        "99% of their waste is recycled, and they import garbage from other countries",
        "There are about 300,000 moose in the woods",
        "90 of 100 metro stations in Stockholm are full of art."
      ],
      language: ["Swedish"],
      countryCurrency: "Swedish krona",
      climate: "Temperate",
      population: "10,481,937",
      capital: "Stockholm",
      continent: "Europe"
    },
    tips: {
      topCities: ["Stockholm", "Linkoping", "Orebro"],
      activities: [
        "Ice hotel",
        "Spot the Northern Lights",
        "Kolmarden Wildlife Park"
      ],
      whenToGo: ["May to September"]
    }
  },
  {
    id: "CAN",
    name: "Canada",
    images: [
      require("./images/Countries/canada-sekwang-chia-I9THIkqy9t0-unsplash.jpg"),
      require("./images/Countries/canada-sondoce-wasfy-RvyF80HRAC8-unsplash.jpg"),
      require("./images/Countries/canada-narciso-arellano-egayxg_FHk8-unsplash.jpg")
    ],
    infos: {
      about: "Canada is the second largest country in the world in the area,  but it's one of the countries with less population density.",
      facts: [
        "Is the country with the most lakes in the world.",
        "Canada has 10 percent of the world's forest.",
        "The lowest record temperature is -63 C (-81.4 F)."
      ],
      language: ["English", "French"],
      countryCurrency: "Canadian Dollar",
      climate: "Continental",
      population: "38,654,738",
      capital: "Ottawa",
      continent: "North America"
    },
    tips: {
      topCities: ["Quebec", "Vancouver", "Victoria"],
      activities: [
        "Niagara Falls",
        "Banff National Park",
        "Butchart Gardens"
      ],
      whenToGo: ["August to October"]
    }
  },
  {
    id: "CHE",
    name: "Switzerland",
    images: [
      require("./images/Countries/switzerland-keith-kiselstone-kbCS-jfAfOM-unsplash.jpg"),
      require("./images/Countries/switzerland-patrick-robert-doyle-QmM7e2vrZnU-unsplash.jpg"),
      require("./images/Countries/switzerland-tim-trad-BYPMtjYMEyk-unsplash.jpg")],
    infos: {
      about: "Switzerland, officially the Swiss Confederation, is a landlocked mountainous country with several miles of glacier alps, lakes, and valleys.",
      facts: [
        "The Red Cross was founded in Geneva",
        "Switzerland has the longest tunnel in the world",
        "Einstein develop his theory of relativity while studying in Bern."
      ],
      language: ["German", "French", "Italian", "Romansch"],
      countryCurrency: "Swiss franc",
      climate: "Temperate",
      population: "8,292,809",
      capital: "Bern",
      continent: "Europe"
    },
    tips: {
      topCities: ["Geneva", "Zurich", "Bern"],
      activities: ["The Matterhorn", "The Rhone Glacier", "Jungfraujoch"],
      whenToGo: ["April to October"]
    }
  },
  {
    id: "KOR",
    name: "South Korea",
    images: [
      require("./images/Countries/sk-ho-phuoc-duy-VhqCymo3fmc-unsplash.jpg"),
      require("./images/Countries/sk-thomas-roger-lux-xRAEPmP9M8s-unsplash.jpg"),
      require("./images/Countries/sk-zequn-gui-xVFS3meofYM-unsplash.jpg")
    ],
    infos: {
      about: "South Korea, officially the Republic of Korea, is bordered by the Sea of Japan and the Yellow Sea. It's a highly developed country with one of the world's fastest Internet wireless speed.",
      facts: [
        "Seoul is the plastic surgery capital of the World.",
        "Number 4 is unlucky.",
        "South Korea has the first astronomical laboratory in the world."
      ],
      language: ["Korean"],
      countryCurrency: "Korean Republic Won",
      climate: "Temperate",
      population: "51,744,876",
      capital: "Seoul",
      continent: "Asia"
    },
    tips: {
      topCities: ["Seoul", "Busan", "Bucheon"],
      activities: [
        "DMZ (Demilitarized Zone)",
        "Yonggungsa Temple",
        "Everland"
      ],
      whenToGo: ["March to May and September to November"]
    }
  },
  {
    id: "NZL",
    name: "New Zealand",
    images: [
      require("./images/Countries/nz-kishan-modi-K_g6TuBuKzk-unsplash.jpg"),
      require("./images/Countries/nz-linde-lanjouw-0QL6fdUEFSQ-unsplash.jpg"),
      require("./images/Countries/nz-nikhil-prasad-NUEou7Bncjc-unsplash.jpg")
    ],
    infos: {
      about: "New Zealand is a remote, mountainous group of islands in the southwestern Pacific Ocean. Was the first country to give women the right to vote, and the first to introduce a minimum wage.",
      facts: [
        "There are more sheep than people.",
        "The clearest lake in the world is in New Zealand.",
        "Is the least corrupt nation (tied with Denmark)."
      ],
      language: ["English", "Maori"],
      countryCurrency: "New Zealand dollar",
      climate: "Temperate Maritime",
      population: "5,128,370",
      capital: "Wellington",
      continent: "Oceania"
    },
    tips: {
      topCities: ["Auckland", "Dunedin", "Christchurch"],
      activities: [
        "Hobbiton",
        "Te Whakarewarewa Geothermal Valley",
        "Bay of Islands"
      ],
      whenToGo: ["December to March"]
    }
  },
  {
    id: "URY",
    name: "Uruguay",
    images: [
      require("./images/Countries/uruguay-anderson-ROoqgQ3aF3k-unsplash.jpg"), require("./images/Countries/uruguay-jared-schwitzke-Y_J9VezlMPc-unsplash.jpg"),
      require("./images/Countries/uruguay-pedro-slinger-ehFgttlFJNA-unsplash.jpg")
    ],
    infos: {
      about: "Uruguay, officially the Oriental Republic of Uruguay, is the second smallest country on the continent and one of the most socially progressive.",
      facts: [
        "Uruguay was the first country to legalize marijuana fully.",
        "100% of its electricity comes from renewable sources.",
        "The first World Cup was in Uruguay, in 1930."
      ],
      language: ["Spanish"],
      countryCurrency: "Uruguayan peso",
      climate: "Humid Subtropical.",
      population: "3,518,552",
      capital: "Montevideo",
      continent: "South America"
    },
    tips: {
      topCities: ["Punta del Este", "Montevideo", "Salto"],
      activities: [
        "Colonia del Sacramento",
        "Wine Tasting in Carmelo",
        "Punta del Diablo"
      ],
      whenToGo: ["October to March"]
    }
  },
  {
    id: "JPN",
    name: "Japan",
    images: [
      require("./images/Countries/tokio-jezael-melgoza-jtP8ce6O6Zw-unsplash.jpg"),
      require("./images/Countries/tokio-kristin-wilson-wJvUBkLU0pA-unsplash.jpg"),
      require("./images/Countries/tokio-max-bender-FuxYvi-hcWQ-unsplash.jpg")
    ],
    infos: {
      about: "Japan is an archipelago with over four-fifths of the land consisting of mountains. It's a highly developed country with the world's highest life expectancy.",
      facts: [
        "Japan has the highest density of vending machines in the world.",
        "Each year, there are over 1,500 Earthquakes.",
        "There are more pets than children."
      ],
      language: ["Japanese"],
      countryCurrency: "Japanese yen",
      climate: "Temperate Maritime",
      population: "125,927,902",
      capital: "Tokio",
      continent: "Asia"
    },
    tips: {
      topCities: ["Tokio", "Okinawa", "Kyoto"],
      activities: ["Shinto shrine", "Mount Fuji", "Cherry Blossom Festival"],
      whenToGo: ["March to May and September to November"]
    }
  },
  {
    id: "NLD",
    name: "Netherlands",
    images: [
      require("./images/Countries/netherlands-alireza-parpaei-tsb-7LcPPok-unsplash.jpg"),
      require("./images/Countries/netherlands-clarisa-ravasotti-iuM8EaJUmZQ-unsplash.jpg"),
      require("./images/Countries/netherlands-mike-van-den-bos-fbQv3cx--bM-unsplash.jpg")
    ],
    infos: {
      about: "The Netherlands, informally Holland, is a low-lying country with approximately a quarter of its territory below sea level. The country has a long tradition of social tolerance, being the first to legalize same-sex marriage.",
      facts: [
        "There are more bicycles than people.",
        "Utrecht has over 300 bee sanctuaries at its bus stops.",
        "Netherlands created gin."
      ],
      language: ["Dutch"],
      countryCurrency: "Euro",
      climate: "Temperate Maritime",
      population: "17,742,100",
      capital: "Amsterdam",
      continent: "Europe"
    },
    tips: {
      topCities: ["Amsterdam", "Rotterdam", "The Hague"],
      activities: [
        "Van Gogh Museum",
        "Hoge Veluwe National Park",
        "Windmills of Kinderdijk"
      ],
      whenToGo: ["March to September"]
    }
  },
  {
    id: "BEL",
    name: "Belgium",
    images: [
      require("./images/Countries/belgium-azamat-esmurziyev-MkXLVhxl9Lg-unsplash.jpg"),
      require("./images/Countries/belgium-elijah-g-_BBlUZhRzjg-unsplash.jpg"),
      require("./images/Countries/belgium-najib-samatar-SXcA2DfasvM-unsplash.jpg")
    ],
    infos: {
      about: "Belgium is one of the smallest and most densely populated countries in Europe. It has a high-income economy and very high quality of life standards, categorized as very high on the Human Develop Index.",
      facts: [
        "Belgium has the world's best chocolate.",
        "There are over 1000 different types of beer brewed in Belgium, and everyone has a matching glass.",
        "A Belgium developed the Big Bang Theory."
      ],
      language: ["Dutch", "French", "German"],
      countryCurrency: "Euro",
      climate: "Temperate Maritime",
      population: "11,584,008",
      capital: "Brussels",
      continent: "Europe"
    },
    tips: {
      topCities: ["Bruges", "Brussels", "Ghent"],
      activities: ["The Belfry", "Castle Gravensteen", "Mont des Arts"],
      whenToGo: ["April to June and between September and October"]
    }
  },
  {
    id: "AUT",
    name: "Austria",
    images: [
      require("./images/Countries/austria-carrie-borden-aDD4TENs_Rw-unsplash.jpg"),
      require("./images/Countries/austria-lucie-hosova-FuQEnC3WBQM-unsplash.jpg"),
      require("./images/Countries/austria-patrick-robert-doyle-e4et737H4ow-unsplash.jpg")
    ],
    infos: {
      about: "Austria is a landlocked country, and together with Switzerland, it forms the neutral core of Europe. Due to the Alp's highly mountainous terrain, only 30% of the country is below 500 metres.",
      facts: [
        "The oldest restaurant in Europe is in Austria, founded in 803 AD.",
        "It's the birthplace of Sigmund Freud and Mozart.",
        "The Krimml Waterfalls is Europe's tallest waterfall with 380 meters."
      ],
      language: ["German"],
      countryCurrency: "Euro",
      climate: "Temperate",
      population: "9,027,99",
      capital: "Vienna",
      continent: "Europe"
    },
    tips: {
      topCities: ["Vienna", "Salzburg", "Innsbruck"],
      activities: [
        "Admont Abbey Library",
        "St. Stephen's Cathedral",
        "Eisriesenwelt"
      ],
      whenToGo: ["April to October"]
    }
  },
  {
    id: "NOR",
    name: "Norway",
    images: [
      require("./images/Countries/norway-einar-storsul-OHWSxlLKzQc-unsplash.jpg"),
      require("./images/Countries/norway-millie-olsen-mNRPJW7ylrI-unsplash.jpg"),
      require("./images/Countries/norway-sebastian-herrmann--sJQV8veQYQ-unsplash.jpg")
    ],
    infos: {
      about: "Norway is a Nordic country, its shares the Scandinavian Peninsula with Sweden and Finland. It has the highest Human Development Index and one of the world's lowest crime rates.",
      facts: [
        "It's one of the world's happiest countries.",
        "The sun doesn't set in June.",
        "Every year, since 1947, Norway donates a Christmas tree to the UK to thank them for their support during the Second World War."
      ],
      language: ["Norwegian", "Sámi"],
      countryCurrency: "Norwegian krone",
      climate: "Maritime",
      population: "5,425,270",
      capital: "Oslo",
      continent: "Europe"
    },
    tips: {
      topCities: ["Tromsø", "Bergen", "Oslo"],
      activities: ["Flåm Railway", "Geirangerfjord", "Arctic Cathedral"],
      whenToGo: ["Between May and August."]
    }
  },
  {
    id: "ESP",
    name: "Spain",
    images: [
      require("./images/Countries/spain-david-russeler-E0xK8SrIzYA-unsplash.jpg"),
      require("./images/Countries/spain-piotr-musiol-CCp3dc4H0lg-unsplash.jpg"),
      require("./images/Countries/spain-william-carletti-bXOv1gh4eL8-unsplash.jpg")
    ],
    infos: {
      about: "Spain, or the Kingdom of Spain, occupies about 85% of the Iberian Peninsula. Its health system is considered one of the most efficient worldwide, being a leader in organ transplant and donation.",
      facts: [
        "In the La Tomatina festival, 150,000 tomatoes are thrown every year.",
        "Spain has the highest number of bars in the EU.",
        "Dom Quixote is the first modern novel written in 1605 by the Spanish author Miguel de Cervantes."
      ],
      language: ["Spanish"],
      countryCurrency: "Euro",
      climate: "Mediterranean",
      population: "47,450,795",
      capital: "Madrid",
      continent: "Europe"
    },
    tips: {
      topCities: ["Barcelona", "Valencia", "Bilbao"],
      activities: [
        "Ciudad de las Artes y las Ciencias",
        "Mezquita de Cordoba",
        "Templo Expiatorio de la Sagrada Familia"
      ],
      whenToGo: ["March to May and September to November"]
    }
  },
  {
    id: "PRT",
    name: "Portugal",
    images: [
      require("./images/Countries/portugal-artem-zhukov-NvirgXMLaaY-unsplash.jpg"),
      require("./images/Countries/portugal-igor-ferreira-5UpEOzKsQgk-unsplash.jpg"),
      require("./images/Countries/portugal-mark-lawson-7tS_YOTFTtA-unsplash.jpg")
    ],
    infos: {
      about: "Portugal, officially the Portuguese Republic, is the westernmost point in Europe. It's a country with an advanced economy and diverse industry and is known for its wine and olive oil production.",
      facts: [
        "Portugal is the oldest country in Europe and the world's oldest bookstore is in Lisbon.",
        "There are around 600 species of birds in Portugal."
      ],
      language: ["Portuguese"],
      countryCurrency: "Euro",
      climate: "Mediterranean",
      population: "10,352,042",
      capital: "Lisbon",
      continent: "Europe"
    },
    tips: {
      topCities: ["Lisbon", "Porto", "Coimbra"],
      activities: [
        "Castelo dos Mouros",
        "Big Waves Surf in Nazare",
        "The Algarve"
      ],
      whenToGo: ["July to September"]
    }
  }
];

export default countries;
