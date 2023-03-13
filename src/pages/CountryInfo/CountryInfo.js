import { Box, Carousel, Image } from "grommet";
import { CalendarBlank, Coins, Heart, Thermometer, Users } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";
import style from "./CountryInfo.module.css";


export function CountryInfo() {
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
    topCities: [],
    savedBy: []
  });
  const [savedBtn, setSavedBtn] = useState(false);

  const { loggedInUser } = useContext(AuthContext);
  console.log(loggedInUser);

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

  useEffect(() => {
    let saveCountry;
    if (loggedInUser) {
      saveCountry = country.savedBy.filter((id) => id.user.id === loggedInUser.user.id);
      if (saveCountry.length) {
        setSavedBtn(true);
      } else {
        setSavedBtn(false);
      }
    }

  }, [country]);

  async function handleSave(e) {
    e.preventDefault();
    try {
      await api.patch(`/country/${id}/save`);

      setSavedBtn(!savedBtn);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={style.all}>
      {!isLoading ? (
        <div className={style.container}>
          <div>
            <div className={style.titleIcon}>
              <h1 className={style.title}>{country.name}</h1>
              {loggedInUser !== null ? (
                !savedBtn ? (
                  <button onClick={handleSave} style={{ backgroundColor: "transparent", padding: "0", cursor: "pointer" }}>
                    <Heart color="#b484a8" size={32} />
                  </button>
                ) : <button onClick={handleSave} style={{ backgroundColor: "transparent", padding: "0", cursor: "pointer" }}><Heart size={32} color="#b484a8" weight="fill" /></button>
              ) : <button disabled={true} onClick={handleSave} style={{ backgroundColor: "transparent", padding: "0", cursor: "none" }}>
                <Heart color="#b484a8" size={32} />
              </button>}

            </div>
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
