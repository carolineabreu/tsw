import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Comment.css";
import { CommentForm } from "./CommentForm";

export function Comment() {
  const [comments, setComments] = useState([]);
  // const useHistory = useHistory( );

  // const handleClick = (e ) =>
  //   e.preventDefault( );
  //   console.log('Back');
  //   window.history.back();
  // }


  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/tswcomments"
        );

        setComments([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchComments();
  }, []);

  return (
    <>
      <div className="comment-container">
        {/* <button type="button" id="btn">Back</button> */}
        <h1 className="comment-heading">Comments</h1>
        <div className="comment-flex">
          <div className="comment-flex-item">
            {comments.map((currentComment) => {
              return (
                <div className="id-comment">
                  <Link to={`/${currentComment._id}`}>
                    <h2 className='comment-current'>{currentComment.title}</h2>
                    <img src={currentComment.image} alt={currentComment.name} />
                    <p>{currentComment.ranking}</p>
                    <p>{currentComment.description}</p>
                    <p>{currentComment.date}</p>
                    <p>{currentComment.name}</p>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex-item">
            {" "}
            <CommentForm />
          </div>
        </div>
      </div>
    </>
  );
}
