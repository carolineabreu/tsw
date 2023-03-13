import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import CardItem from "./CountryCard";
import style from "./style.module.css";

export function CountryList() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await api.get("/country/all");

        console.log(response.data);
        setCountries(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, []);



  return (
    <div className={style.page}>
      {!isLoading ? (
        <>
          <div className={style.searchBar}>
            <input
              className={style.search}
              placeholder="Enter Country"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={style.container}>
            {countries
              .filter((countries) => {
                if (search === "") {
                  return countries;
                } else if (
                  countries.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return countries;
                } else {
                  return false;
                }
              })
              .map((currentCountry) => {
                return (
                  <div className={style.card}>
                    <div className={style.cardItems}>
                      <CardItem
                        src={currentCountry.images[2]}
                        label={currentCountry.name}
                        path={`/countries/${currentCountry.id}`}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      ) : <CircularProgress color="secondary" />}
    </div>
  );
}
