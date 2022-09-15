import { useState } from "react";
import { Link } from "react-router-dom";

export function CountryList(countries) {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div>
        <input placeholder="Enter Country" onChange={(e) => setSearch(e.target.value)} />
      </div>
      {countries.countries.filter(countries => {
        if (search === "") {
          return countries;
        } else if (countries.name.toLowerCase().includes(search.toLowerCase())) {
          return countries;
        }
      }).map((currentCountry) => {
        return (
          <Link to={`/country-list/${currentCountry.id}`}>
            {currentCountry.name}
          </Link>
        );
      })}
    </div>
  );
}
