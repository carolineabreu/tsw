import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { StarRating } from "./star";

export function CommentForm() {
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
      <h1 className="form-heading"> Share your Experience</h1>
      <form className="form-head" onSubmit={handleSubmit}>
        {" "}
        <label htmlFor="form-title">Title</label>{" "}
        <p>
          {" "}
          <input
            className="form-title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
          />
        </p>{" "}
        <label htmlFor="form-image">Image Link</label>
        <p>
          {" "}
          <input
            className="form-image"
            name="image"
            type="text"
            value={form.image}
            onChange={handleChange}
          />
        </p>{" "}
        <label htmlFor="form-ranking">Rate</label>
        <p>
          {" "}
          {/* <StarRating
            id="commentRanking"
            name="ranking"
            value={form.ranking}
            onChange={handleChange}
          /> */}
        </p>{" "}
        <label htmlFor="form-description">Describe your Experience</label>
        <p>
          {" "}
          <input
            className="form-description"
            name="description"
            type="text"
            value={form.description}
            onChange={handleChange}
          />
        </p>{" "}
        <label htmlFor="form-date">Date</label>
        <p>
          {" "}
          <input
            className="form-date"
            name="date"
            type="text"
            value={form.date}
            onChange={handleChange}
          />
        </p>{" "}
        <label htmlFor="form-name">Your Name</label>
        <p>
          {" "}
          <input
            className="form-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
        </p>
        <button type="submit" className="form-btn">
          Send
        </button>
      </form>
    </div>
  );
}
