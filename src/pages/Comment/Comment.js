import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CommentForm } from "./CommentForm";
import 'antd/dist/antd.min.css'
import "./Comment.css";

export function Comment () {
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
      <div className="comment__container">
        {/* <button type="button" id="btn">Back</button> */}
        <h1 className="comment__heading">Testimonial</h1>
        <div className="comment__flex">
          <div className="comment__flex-item">
            {comments.map((currentComment) => {
              return (
                <div className="comment__id">
                  <Link to={`/${currentComment._id}`}>
                    <h2 className='comment__current'>{currentComment.title}</h2>
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