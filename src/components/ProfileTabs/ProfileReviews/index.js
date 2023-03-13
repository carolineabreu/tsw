import { Box, Card, CircularProgress } from "@mui/material";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/api";
import style from "./style.module.css";

export function ProfileReviews() {
  const [reviews, setReviews] = useState({
    author: {
      username: ""
    },
    createdAt: "",
    title: "",
    date: "",
    body: ""
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLikes() {
      try {
        const response = await api.get("/review/all-reviews");

        setReviews(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLikes();
  }, []);

  return (
    <div className={style.container}>
      {!isLoading ? (
        reviews.length ? (
          reviews.map((currentReview) => {
            return (
              <Box key={currentReview.id} sx={{ width: 300 }} >
                <Card variant="outlined" sx={{ height: 200 }} style={{ borderRadius: "16px" }} className={style.card}>
                  <div className={style.title}>
                    <Link to={`/review/${currentReview.id}`} className={style.titleBtn}>
                      <span>{currentReview.title}</span>
                    </Link>{" "}
                    <span>{format(new Date(currentReview.date), 'dd/MM/yyyy')}</span>
                  </div>
                  {currentReview.body.length > 90 ? (
                    <p>{currentReview.body.slice(0, 90)}
                      <Link className={style.titleBtn} to={`/review/${currentReview.id}`}><b className={style.strong}>...read more</b></Link>
                    </p>
                  ) : <p>{currentReview.body}</p>}
                </Card>
              </Box>
            );
          })
        ) :
          <div>
            <p>You don't like anything yet</p>
          </div>
      ) : <CircularProgress color="secondary" />
      }
    </div>
  );
}
