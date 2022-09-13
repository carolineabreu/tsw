import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StarRating } from "./star";

export function CreateComments() {
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="commentTitle">Title</label>
      <input
        id="commentTitle"
        name="title"
        type="text"
        value={form.title}
        onChange={handleChange}
      />
      <label htmlFor="commentImage">Image</label>
      <input
        id="commentImage"
        name="image"
        type="text"
        value={form.image}
        onChange={handleChange}
      />
      <label htmlFor="commentRanking">Give a note</label>
      <input
        id="commentRanking"
        name="ranking"
        type="button"
        value={form.ranking}
        onChange={StarRating}
      />
      <label htmlFor="commentDescription">Describe your Experience</label>
      <input
        id="commentDescription"
        name="description"
        type="text"
        value={form.description}
        onChange={handleChange}
      />
      <label htmlFor="commentDate">Date</label>
      <input
        id="commentDate"
        name="date"
        type="text"
        value={form.date}
        onChange={handleChange}
      />
      <label htmlFor="commentName">Your Name:</label>
      <input
        id="commentName"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />
      <button type="submit">Send</button>
    </form>
  );
}
