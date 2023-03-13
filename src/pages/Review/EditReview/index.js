import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import "../../../components/Review/CreateReview/Comment.css";

export function EditReview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    image: "",
    rate: 0,
    body: "",
    date: "",
    country: {
      name: ""
    }
  });

  useEffect(() => {
    async function fetchReview() {
      try {
        const response = await api.get(`/review/${id}`);

        setForm({ ...response.data });
      } catch (error) {
        console.log(error);
      }
    }
    fetchReview();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.patch(`/review/edit/${id}`, { title: form.title, body: form.body });

      console.log(response);
      navigate("/reviews");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="comment-container">
      <h1 className="comment-heading">Comments</h1>
      <div className="comment-flex">
        <div className="flex-item">
          <div className="form">
            <h1 className="form-heading"> Share your Experience</h1>
            <form className="form-head" onSubmit={handleSubmit}>
              <label htmlFor="formTitle">Title</label>
              <p>
                <input
                  className="form-title"
                  id="formTitle"
                  name="title"
                  type="text"
                  value={form.title}
                  onChange={handleChange}
                  minLength={3}
                />
              </p>
              <label htmlFor="formRate">Rate</label>
              <p>
                <input
                  className="form-rate"
                  id="formRate"
                  name="rate"
                  type="number"
                  value={form.rate}
                  disabled
                />
              </p>
              <label htmlFor="formBody">Describe your Experience</label>
              <p>
                <input
                  className="form-description"
                  id="formBody"
                  name="body"
                  type="text"
                  value={form.body}
                  onChange={handleChange}
                  minLength={10}
                />
              </p>
              <label htmlFor="formDate">Date</label>
              <p>
                <input
                  className="form-date"
                  name="date"
                  id="formDate"
                  type="text"
                  value={form.date}
                  disabled
                />
              </p>
              <label htmlFor="formCountry">Country: </label>
              <p>
                <input
                  className="form-date"
                  id="formCountry"
                  name="country"
                  type="text"
                  value={form.country.name}
                  disabled
                />
              </p>
              <button type="submit" className="form-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
