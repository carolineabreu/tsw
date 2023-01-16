import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { StarRating } from "./star";
import "antd/dist/antd.css"; 

export function CommentForm () {
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
      <h1 className="form__heading"> Share your Experience</h1>
      <form onSubmit={handleSubmit}>
        {" "}
        <label htmlFor="form__title">Title</label>{" "}
        <p>
          {" "}
          <input
            className="form__title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
          />
        </p>{" "}
        <label htmlFor="form__image">Image Link</label>
        <p>
          {" "}
          <input
            className="form__image"
            name="image"
            type="text"
            value={form.image}
            onChange={handleChange}
          />
        </p>{" "}
        <label htmlFor="form__ranking">Rate</label>
        <p>
          {" "}
          {/* <StarRating
            id="commentRanking"
            name="ranking"
            value={form.ranking}
            onChange={handleChange}
          /> */}
        </p>{" "}
        <label htmlFor="form__description">Describe your Experience</label>
        <p>
          {" "}
          <input
            className="form__description"
            name="description"
            type="text"
            value={form.description}
            onChange={handleChange}
          />
        </p>{" "}
        <label htmlFor="form__date">Date</label>
        <p>
          {" "}
          <input
            className="form__date"
            name="date"
            type="text"
            value={form.date}
            onChange={handleChange}
          />
        </p>{" "}
        <label htmlFor="form__name">Your Name:</label>
        <p>
          {" "}
          <input
            className="form__name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
        </p>
        <button type="submit" className="form__btn">
          Send
        </button>
      </form>
    </div>
  );
}