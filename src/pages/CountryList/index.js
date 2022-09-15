import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

export function CountryList(countries) {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div>
        <div className={style.searchBar}>
          <input className={style.search} placeholder="Enter Country" onChange={(e) => setSearch(e.target.value)} />
        </div>
        {countries.countries.filter(countries => {
          if (search === "") {
            return countries;
          } else if (countries.name.toLowerCase().includes(search.toLowerCase())) {
            return countries;
          }
        }).map((currentCountry) => {
          return (
            <div className={style.list}>
              <Link to={`/country-list/${currentCountry.id}`}>
                {currentCountry.name}
              </Link>
            </div>
          );
        })}
      </div>
      );
    </div>
  );
};
