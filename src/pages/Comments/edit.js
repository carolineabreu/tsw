import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { StarRating } from "./star";

export function EditPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    title: "",
    image: "",
    ranking: "",
    description: "",
    date: "",
    name: "",
  });

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/tswcomments/${id}`
        );

        delete response.data._id;
        console.log(response);
        setForm({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchComments();
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://ironrest.herokuapp.com/tswcomments/${id}`,
        form
      );

      navigate("/");

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDelete() {
    try {
      await axios.delete(`https://ironrest.herokuapp.com/tswcomments/${id}`);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="EditDelete">
      <h1>Edit </h1>
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
        <StarRating
          id="commentRanking"
          name="ranking"
          value={form.ranking}
          onChange={handleChange}
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
        <label htmlFor="personsName">Your Name:</label>
        <input
          id="personsName"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />
        <button type="submit">Edit</button>
        <button onClick={handleDelete}> Delete</button>
      </form>
    </div>
  );
}
