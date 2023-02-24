import { CircularProgress } from "@mui/material";
import { differenceInDays } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/api";


export function SavedCountries(props) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchLikes() {
      try {
        const response = await api.get("/user/savedCountries");

        setCountries(response.data);
        props.setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLikes();
  }, []);

  return (
    <div>
      {!props.isLoading ? (
        countries.length ? (
          countries.map((currentReview) => {
            return (
              <div>
                <div>
                  <span>{currentReview.author.username}</span> {" "}
                  <span className="text-sm text-gray-600 flex items-center">{differenceInDays(
                    new Date(Date.now()),
                    new Date(currentReview.createdAt)
                  )}{" "} days ago</span>
                </div>
                <div>
                  <Link to="">
                    {currentReview.title}
                  </Link>{" "}
                  <span>{currentReview.date}</span>
                </div>
                {currentReview.body}
              </div>
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
