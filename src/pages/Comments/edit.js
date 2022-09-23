import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { StarRating } from "./star";
import "./editDelete.css";

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

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDelete() {
    try {
      await axios.delete(`https://ironrest.herokuapp.com/tswcomments/${id}`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="EditDelete">
      <h1 id="edith1">Your Experience</h1>
      <form onSubmit={handleSubmit} id="formEdit">
        <label htmlFor="commentTitle">Title</label>
        <p>
          <input
            id="commentTitle"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
          />
        </p>
        <label htmlFor="commentImage">Image Link</label>
        <p>
          <input
            id="commentImage"
            name="image"
            type="text"
            value={form.image}
            onChange={handleChange}
          />
        </p>
        <label htmlFor="commentRanking">Rate</label>
        <p>
          <StarRating
            id="commentRanking"
            name="ranking"
            value={form.ranking}
            onChange={handleChange}
          />
        </p>
        <label htmlFor="commentDescription">Describe your Experience</label>
        <p>
          <input
            id="commentDescription"
            name="description"
            type="text"
            value={form.description}
            onChange={handleChange}
          />
        </p>
        <label htmlFor="commentDate">Date</label>
        <p>
          <input
            id="commentDate"
            name="date"
            type="text"
            value={form.date}
            onChange={handleChange}
          />
        </p>
        <label htmlFor="commentName">Your Name:</label>
        <p>
          <input
            id="commentName"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
        </p>
        <div className="buttonsEdit">
          <button type="submit" id="btn">
            Edit
          </button>
          <button onClick={handleDelete} id="btnDelete">
            {" "}
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
