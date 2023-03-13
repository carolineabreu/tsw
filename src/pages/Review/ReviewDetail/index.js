// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { CircularProgress, Divider, IconButton, Rating } from "@mui/material";
import { format, formatDistance } from 'date-fns';
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { BasicPopover } from '../../../components/Popover';
import { AuthContext } from "../../../contexts/authContext";
import style from "./style.module.css";

export function ReviewDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [review, setReview] = useState({
    author: {
      username: ""
    },
    body: "",
    country: {
      name: "",
      images: []
    },
    createdAt: "",
    date: "",
    image: "",
    rate: "",
    title: "",
    countryId: "",
    authorId: "",
    likedBy: []
    //comments e likes
  });

  const [isLoading, setIsLoading] = useState(true);
  const [likeBtn, setLikeBtn] = useState(false);

  useEffect(() => {
    async function fetchReview() {
      try {
        const response = await api.get(`/review/${id}`);
        console.log(response.data);
        setReview(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchReview();
  }, [id]);

  useEffect(() => {
    let likeReview;
    if (loggedInUser) {
      likeReview = review.likedBy.filter((id) => id.user.id === loggedInUser.user.id);
    }

    if (likeReview.length) {
      setLikeBtn(false);
    } else {
      setLikeBtn(true);
    }
  }, [review]);

  const { loggedInUser } = useContext(AuthContext);

  async function handleLike(e) {
    e.preventDefault();
    try {
      await api.patch(`/review/${id}/like`);

      setLikeBtn(!likeBtn);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDelete() {
    try {
      await api.delete(`/review/delete/${id}`);

      navigate("/reviews");
    } catch (error) {
      console.log(error);
    }
  }

  function handleToast() {
    toast((t) => (
      <span>
        Delete review?
        <button className={style.delete} onClick={handleDelete}>Yes</button>
        <button className={style.btnNo} onClick={() => toast.dismiss(t.id)}>No</button>
      </span>
    ));
  }

  return (
    <div className={style.container}>
      {!isLoading ? (
        <div className={style.containerCard}>
          <div className={style.usernameDiv}>
            <span>@{review.author.username}</span>
            <span>{formatDistance(new Date(review.createdAt),
              new Date(Date.now()),
              { includeSeconds: true, addSuffix: true })}</span>
          </div>
          <div className={style.rateTile}>
            <h2>{review.title}</h2>
          </div>
          <p>{review.body}</p>
          <div className={style.containerBody}>
            <img src={review.image} alt={review.country.name} />
            <div className={style.containerBodyInfo}>
              <Rating className={style.rate} size="medium" readOnly value={Number(review.rate)} />
              <p>Travel date: {format(new Date(review.date), 'dd/MM/yyyy')}</p>
              <p>Traveled to{" "}
                <Link className={style.countryLink} to={`/country/${review.countryId}`}>
                  {review.country.name}
                </Link>
              </p>
            </div>
          </div>
          <div>
            <Divider />
            {loggedInUser ? (
              loggedInUser.user.id === review.authorId ? (
                <div className={style.buttons}>
                  <Link to={`/review/edit/${id}`}><button>Edit</button></Link>
                  <button onClick={handleToast}>Delete</button>
                </div>
              ) : !likeBtn ? (
                <IconButton onClick={handleLike} aria-label="thumbUp" size="large">
                  <ThumbUpAltIcon color='secondary' fontSize="inherit" />
                </IconButton>
              ) : <IconButton onClick={handleLike} aria-label="thumbUp" size="large">
                <ThumbUpOffAltIcon color='secondary' fontSize="inherit" />
              </IconButton>
            ) : <BasicPopover />}
          </div>
        </div>
      ) : <CircularProgress color="secondary" />
      }
    </div>
  );
}
