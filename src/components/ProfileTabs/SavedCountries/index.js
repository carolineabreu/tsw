import { Box, Card, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/api";
import style from "../ProfileReviews/style.module.css";

export function SavedCountries() {
  const [countries, setCountries] = useState({
    savedCountries: {
      country: {
        id: "",
        name: "",
        images: []
      }
    }
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSavedCountries() {
      try {
        const response = await api.get("/user/profile");

        setCountries(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSavedCountries();
  }, []);

  console.log(countries.savedCountries);
  return (
    <div className={style.container}>
      {!isLoading ? (
        countries.savedCountries.length ? (
          countries.savedCountries.map((currentReview) => {
            return (
              <Box key={currentReview.country.id} sx={{ width: 300 }} >
                <Card variant="outlined" sx={{ height: 250 }} style={{ borderRadius: "16px" }} className={style.card}>
                  <div className={style.title}>
                    <Link to={`/countries/${currentReview.country.id}`} className={style.titleBtn}>
                      <span>{currentReview.country.name}</span>
                    </Link>
                  </div>
                  <img src={currentReview.country.images[1]} alt={currentReview.country.name} style={{ maxHeight: "150px" }} />
                </Card>
              </Box>
            );
          })
        ) :
          <div>
            <p>You don't save anything yet</p>
          </div>
      ) : <CircularProgress color="secondary" />
      }
    </div>
  );
}
