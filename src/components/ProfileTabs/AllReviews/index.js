import { Box, Card, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/api";
import style from "./style.module.css";

export function AllReviews() {
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
              <Box key={currentReview.id} sx={{ minWidth: 275 }} >
                <Card variant="outlined" style={{ borderRadius: "16px" }} className={style.card}>
                  {/* <div>
                    <span>@{currentReview.author.username}</span> {" "}
                    <span className="text-sm text-gray-600 flex items-center">{differenceInDays(
                      new Date(Date.now()),
                      new Date(currentReview.createdAt)
                    )}{" "} days ago</span>
                  </div> */}
                  <div className={style.title}>
                    <Link to="" className={style.titleBtn}>
                      <span>{currentReview.title}</span>
                    </Link>{" "}
                    <span>{currentReview.date}</span>
                  </div>
                  <p>{currentReview.body}</p>
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
