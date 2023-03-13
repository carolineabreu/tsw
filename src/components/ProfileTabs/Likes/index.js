import { Box, Card, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/api";
import style from "../ProfileReviews/style.module.css";

export function Likes() {
  const [likes, setLikes] = useState({
    likes: {
      review: {
        title: "",
        id: "",
        body: "",
      }
    }
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLikes() {
      try {
        const response = await api.get("/user/profile");

        setLikes(response.data);
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
        likes.likes.length ? (
          likes.likes.map((currentLike) => {
            console.log(currentLike);
            return (
              <Box key={currentLike.review.id} sx={{ width: 300 }} >
                <Card variant="outlined" sx={{ height: 200 }} style={{ borderRadius: "16px" }} className={style.card}>
                  <div className={style.title}>
                    <Link to={`/review/${currentLike.review.id}`} className={style.titleBtn}>
                      <span>{currentLike.review.title}</span>
                    </Link>
                  </div>
                  {currentLike.review.body.length > 90 ? (
                    <p>{currentLike.review.body.slice(0, 90)}
                      <Link className={style.titleBtn} to={`/review/${currentLike.review.id}`}><b className={style.strong}>...read more</b></Link>
                    </p>
                  ) : <p>{currentLike.review.body}</p>}
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
