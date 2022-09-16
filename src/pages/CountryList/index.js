import { useState } from "react";
import style from "./style.module.css";
import CardItem from "./card";

export function CountryList(countries) {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className={style.searchBar}>
        <input className={style.search} placeholder="Enter Country" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className={style.container}>
        {countries.countries.filter(countries => {
          if (search === "") {
            return countries;
          } else if (countries.name.toLowerCase().includes(search.toLowerCase())) {
            return countries;
          }
        }).map((currentCountry) => {
          return (
            <div className={style.card}>
              <div className={style.cardItems}>
                <CardItem
                  src={currentCountry.images[0]}
                  label={currentCountry.name}
                  path={`/country-list/${currentCountry.id}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
