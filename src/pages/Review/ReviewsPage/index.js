import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../../../api/api";
import { AllReviews } from "../../../components/Review/AllReviews";
import { CreateReview } from "../../../components/Review/CreateReview";
import style from "./style.module.css";

export function ReviewsPage() {
  const [page, setPage] = useState(0);
  const [reviews, setReviews] = useState({
    id: "",
    createdAt: "",
    title: "",
    date: "",
    body: "",
    rate: "",
    author: {
      username: ""
    },
    country: {
      name: ""
    },
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await api.get("/review/pagination");

        console.log(response.data);
        setReviews(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, []);

  function handlePageChange(event, value) {
    console.log(value);
    setPage(value - 1);
  }
  console.log(reviews);
  return (
    <div className={style.container}>
      <h1 className="form-heading"> Share your Experience</h1>
      <div className={style.components}>
        <CreateReview />
        <div className={style.all}>
          <AllReviews isLoading={isLoading} reviews={reviews} page={page} />
          <Pagination onChange={handlePageChange} count={reviews.length} variant="outlined" color="secondary" />
        </div>
      </div>
    </div>
  );
}
