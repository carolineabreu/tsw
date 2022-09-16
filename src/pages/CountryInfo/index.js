import { useParams } from "react-router-dom";
import style from "./style.module.css";
import { Carousel, Image } from 'grommet';
import { Box, Card, CardBody, Text } from 'grommet';

export function CountryInfo({ countries }) {
  let { id } = useParams();
  const country = countries.filter((current) => {
    return current.id === id;
  });

  console.log(country);
  return (
    <div className={style.container}>
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
          <div>
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
                    return (<ul>
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
                      return (<ul>
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
                      return (<ul>
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
  );
}
