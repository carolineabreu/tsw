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
        <p><strong>About: </strong>{country[0].infos.about}</p>

        <strong>Language: </strong>
        {country[0].infos.language.map((currentLanguage) => {
          return (
            <ul><span>{currentLanguage}</span></ul>
          );
        })}

        <p><strong>Capital: </strong>{country[0].infos.capital}</p>
        <p><strong>Continent: </strong>{country[0].infos.continent}</p>
        <p><strong>Currency: </strong>{country[0].infos.countryCurrency}</p>
        <p><strong>Population: </strong>{country[0].infos.population}</p>
        <p><strong>Climate: </strong>{country[0].infos.climate}</p>
        <p><strong>When to go: </strong>{country[0].tips.whenToGo}</p>
        <strong>Facts: </strong>

        {country[0].infos.facts.map((currentFact) => {
          return (<ul>
            <li>{currentFact}</li>
          </ul>);
        })}


        <div className={style.tips}>

          <Card className={style.card} width="medium">
            <CardBody>
              <Box direction="row" gap="small">
                <Box className={style.box}>
                  <Text color="text-strong" size="large" weight="bold">
                    Trip Tips
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

          <Card className={style.card} width="medium">
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
      </div>
    </div>
  );
}
