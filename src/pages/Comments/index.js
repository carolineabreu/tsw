import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Form } from "./form";
import "antd/dist/antd.css";
import "./comments.css";
import { Button } from "antd";

export function Comment() {
  const [comments, setComments] = useState([]);

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
      <div className="currentComment">
        <Button> Back </Button>
        <h1>Comments</h1> <Form />
        {comments.map((currentComment) => {
          return (
            <div className="idComment">
              <Link to={`/${currentComment._id}`}>
                <h2>{currentComment.title}</h2>
                <img src={currentComment.image} alt={currentComment.name} />
              </Link>
              <p>{currentComment.ranking}</p>
              <p>{currentComment.description}</p>
              <p>{currentComment.date}</p>
              <p>{currentComment.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
