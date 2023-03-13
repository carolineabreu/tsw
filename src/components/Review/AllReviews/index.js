import { Box, Card, CircularProgress, Rating } from "@mui/material";
import { differenceInDays } from "date-fns";
import { Link } from "react-router-dom";
import style from "./style.module.css";

export function AllReviews(props) {
  return (
    <div className={style.container}>
      {!props.isLoading ? (
        props.reviews[props.page].map((currentReview, i) => {
          console.log(currentReview);
          return (
            <Box key={currentReview.id} style={{ width: "18.75rem" }} >
              <Card variant="outlined" style={{ borderRadius: "16px", height: "15rem" }} className={style.card}>
                <div className={style.usernameDate}>
                  <span>@{currentReview.author.username}</span> {" "}
                  {differenceInDays(new Date(Date.now()),
                    new Date(currentReview.createdAt)) === 1 ? <span className="text-sm text-gray-600 flex items-center"> {differenceInDays(new Date(Date.now()),
                      new Date(currentReview.createdAt))} day ago</span>
                    : differenceInDays(new Date(Date.now()),
                      new Date(currentReview.createdAt)) > 1 ? <span className="text-sm text-gray-600 flex items-center">  {differenceInDays(new Date(Date.now()),
                        new Date(currentReview.createdAt))} days ago</span>
                      : <span className="text-sm text-gray-600 flex items-center">  today</span>
                  }
                </div>
                <div className={style.titleRate}>
                  <Link to={`/review/${currentReview.id}`} className={style.titleBtn}>
                    <h2>{currentReview.title}</h2>
                  </Link>
                  {<Rating size="small" value={currentReview.rate} readOnly />}
                </div>
                <div className={style.countryDate}>
                  <span><b>Country: </b>{currentReview.country.name}</span>
                  <span><b>Travel date: </b>{currentReview.date}</span>
                </div>
                {currentReview.body.length > 90 ? (
                  <div className={style.body}>
                    <p>{currentReview.body.slice(0, 90)}
                      <Link className={style.titleBtn} to={`/review/${currentReview.id}`}><b className={style.strong}>...read more</b></Link>
                    </p>
                  </div>
                ) : <p className={style.body}>{currentReview.body}</p>}
              </Card>
            </Box>

          );
        })
      ) : <CircularProgress color="secondary" />
      }
    </div>
  );
}
