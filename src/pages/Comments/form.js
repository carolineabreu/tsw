import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StarRating } from "./star";
import "antd/dist/antd.css";

export function Form() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    image: "",
    ranking: "",
    description: "",
    date: "",
    name: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ironrest.herokuapp.com/tswcomments",
        form
      );

      navigate("/");

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="form">
      <h1 id="formh1"> Share your Experience</h1>
      <form onSubmit={handleSubmit}>
        {" "}
        <label htmlFor="commentTitle">Title</label>{" "}
        <p>
          {" "}
          <input
            id="commentTitle"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
          />
        </p>{" "}
        <label htmlFor="commentImage">Image Link</label>
        <p>
          {" "}
          <input
            id="commentImage"
            name="image"
            type="text"
            value={form.image}
            onChange={handleChange}
          />
        </p>{" "}
        <label htmlFor="commentRanking">Rate</label>
        <p>
          {" "}
          <StarRating
            id="commentRanking"
            name="ranking"
            value={form.ranking}
            onChange={handleChange}
          />
        </p>{" "}
        <label htmlFor="commentDescription">Describe your Experience</label>
        <p>
          {" "}
          <input
            id="commentDescription"
            name="description"
            type="text"
            value={form.description}
            onChange={handleChange}
          />
        </p>{" "}
        <label htmlFor="commentDate">Date</label>
        <p>
          {" "}
          <input
            id="commentDate"
            name="date"
            type="text"
            value={form.date}
            onChange={handleChange}
          />
        </p>{" "}
        <label htmlFor="commentName">Your Name:</label>
        <p>
          {" "}
          <input
            id="commentName"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
        </p>
        <button type="submit" id="btn">
          Send
        </button>
      </form>
    </div>
  );
}
