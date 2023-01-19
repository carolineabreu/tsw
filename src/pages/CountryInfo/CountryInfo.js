import { useParams } from "react-router-dom";
import style from "./CountryInfo.module.css";
import { Carousel, Image } from 'grommet';
import { Box, Card, CardBody, Text } from 'grommet';
// import axios from "axios";
// import { useEffect, useState, Link } from "react";

export function CountryInfo({ countries }) {
  let { id } = useParams();
  const country = countries.filter((current) => {
    return current.id === id;
  });

  console.log(country);

  // const [comments, setComments] = useState([""]);

  // useEffect(() => {
  //   async function fetchComments() {
  //     try {
  //       const response = await axios.get(
  //         "https://ironrest.herokuapp.com/tswcomments"
  //       );

  //       setComments([...response.data]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchComments();
  // }, []);
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>{country[0].name}</h1>
        <div className={style.cover}>
          <Carousel play={5000}>
            {country[0].images.map((currentImage) => {
              return (
                <>
                  <Image src={currentImage} alt={country[0].name} />
                </>
              );
            })}
          </Carousel>
        </div>
        <div className={style.info}>
          <p className={style.infoAbout}>{country[0].infos.about}</p>

          <div className={style.containerInfo}>
            <div className={style.info1}>
              <strong>Language: </strong>
              {country[0].infos.language.map((currentLanguage) => {
                return (
                  <span>{currentLanguage}</span>
                );
              })}

              <p><strong>Capital: </strong>{country[0].infos.capital}</p>
              <p><strong>Continent: </strong>{country[0].infos.continent}</p>
            </div>
            <div className={style.info2}>
              <p><strong>Currency: </strong>{country[0].infos.countryCurrency}</p>
              <p><strong>Population: </strong>{country[0].infos.population}</p>
            </div>
            <div className={style.info2}>
              <p><strong>Climate: </strong>{country[0].infos.climate}</p>
              <p><strong>When to go: </strong>{country[0].tips.whenToGo}</p>
            </div>
          </div>

          <Card className={style.card} width="640px">
            <CardBody>
              <Box direction="row" gap="small">
                <Box className={style.box}>
                  <Text color="text-strong" size="large" weight="bold">
                    Facts:
                  </Text>
                  <Text color="text-strong">
                    {country[0].infos.facts.map((currentFact) => {
                      return (
                        <ul className="cardUl">
                          <li>{currentFact}</li>
                        </ul>);
                    })}
                  </Text>
                </Box>
              </Box>
            </CardBody>
          </Card>


          <div className={style.tips}>

            <Card className={style.card} width="350px">
              <CardBody>
                <Box direction="row" gap="small">
                  <Box className={style.box}>
                    <Text color="text-strong" size="large" weight="bold">
                      Best Cities*
                    </Text>
                    <Text color="text-strong">
                      {country[0].tips.topCities.map((currentCity) => {
                        return (
                          <ul className="cardUl">
                            <li>{currentCity}</li>
                          </ul>);
                      })}
                    </Text>
                  </Box>
                </Box>
              </CardBody>
            </Card>

            <Card className={style.card} width="350px">
              <CardBody>
                <Box direction="row" gap="small">
                  <Box className={style.box}>
                    <Text color="text-strong" size="large" weight="bold">
                      Activities
                    </Text>
                    <Text color="text-strong">
                      {country[0].tips.activities.map((currentActivity) => {
                        return (
                          <ul className="cardUl">
                            <li>{currentActivity}</li>
                          </ul>);
                      })}
                    </Text>
                  </Box>
                </Box>
              </CardBody>
            </Card>

          </div>
          <p>*Score based on <a href="https://geosureglobal.com/">GeoSure</a> Women's Safety.</p>
        </div>
      </div>
      {/* <div>
        {comments.map((currentComment) => {
          if (
            currentComment.title.toLowerCase() === country[0].name.toLowerCase()
          ) {
            return (
              <div>
                <Link to={`/${currentComment._id}`}>
                  <h2>{currentComment.title}</h2>
                  <img src={currentComment.image} alt={currentComment.name} />
                  <p>{currentComment.ranking}</p>
                  <p>{currentComment.description}</p>
                  <p>{currentComment.date}</p>
                  <p>{currentComment.name}</p>
                </Link>
              </div>
            );
          }
        })}
      </div> */}
    </div>
  );
}
