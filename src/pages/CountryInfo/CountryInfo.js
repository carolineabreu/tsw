import { Box, Carousel, Image } from "grommet";
import { CalendarBlank, Coins, Thermometer, Users } from "phosphor-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import style from "./CountryInfo.module.css";

export function CountryInfo({ countries }) {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState({
    name: "",
    images: [],
    about: "",
    language: [],
    capital: "",
    continent: "",
    currency: "",
    population: "",
    climate: "",
    whenToGo: "",
    facts: [],
    activities: [],
    topCities: []
  });

  useEffect(() => {
    async function fetchCountry() {
      try {
        const response = await api.get(`/country/${id}`);

        console.log(response.data);
        setCountry(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCountry();
  }, [id]);

  return (
    <div className={style.all}>
      {!isLoading ? (
        <div className={style.container}>
          <div>
            <h1 className={style.title}>{country.name}</h1>
            <div className={style.cover}>
              <Box height="large" width="xlarge" alignSelf="center">
                <Carousel wrap play={5000} fill >
                  {country.images.map((currentImage) => {
                    return (
                      <>
                        <Image fit="cover" src={currentImage} alt={country.name} />
                      </>
                    );
                  })}
                </Carousel>
              </Box>
            </div>
          </div>
          <div className={style.containerBottom}>
            <p className={style.about}>{country.about}</p>
            <div className={style.box1}>
              <p><span>Language:</span> {country.language.join(", ")}</p>
              <p><span>Capital:</span> {country.capital}</p>
              <p><span>Continent:</span> {country.continent}</p>
            </div>
            <div className={style.box2}>
              <div className={style.infoIcons}>
                <Coins size={24} />
                <p className={style.box2Title}>CURRENCY</p>
                <p className={style.box2Body}>{country.currency}</p>
              </div>
              <div className={style.infoIcons}>
                <Users size={24} />
                <p className={style.box2Title}>POPULATION</p>
                <p className={style.box2Body}>{country.population}</p>
              </div>
              <div className={style.infoIcons}>
                <Thermometer size={24} />
                <p className={style.box2Title}>CLIMATE</p>
                <p className={style.box2Body}> {country.climate}</p>
              </div>
              <div className={style.infoIcons}>
                <CalendarBlank size={24} />
                <p className={style.box2Title}>WHEN TO GO</p>
                <p className={style.box2Body}>{country.whenToGo}</p>
              </div>
            </div>
            <div className={style.facts}>
              <ul>Facts</ul>
              <div className={style.factsList}>
                {country.facts.map((currentFact) => {
                  return (
                    <li key={currentFact}>{currentFact}</li>

                  );
                })}
              </div>
            </div>
            <div className={style.box3}>
              <div className={style.cities}>
                <ul>Best Cities*</ul>
                <div className={style.citiesList}>
                  {country.topCities.map((currentCity) => {
                    return (
                      <li key={currentCity}>{currentCity}</li>
                    );
                  })}
                </div>
              </div>
              <div className={style.activities}>
                <ul>Activities</ul>
                <div className={style.activitiesList}>
                  {country.activities.map((currentActivity) => {
                    return (
                      <li key={currentActivity}>{currentActivity}</li>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <p className={style.footer}>
            *Score based on <a href="https://geosureglobal.com/">GeoSure</a>{" "}
            Women's Safety.
          </p>
        </div>
      ) : <p>loading</p>
      }
    </div>
  );
}
