import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api";
import { ReviewForm } from "../ReviewForm";
import "./Comment.css";
//MUDAR TUDO AQUI COMMENTS PRA REVIEW
export function CreateReview() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    image: "",
    rate: 0,
    body: "",
    date: "",
    countryId: ""
  });

  const [img, setImg] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const response = await api.get("/country/all");

        setCountries([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCountry();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleImg(e) {
    setImg(e.target.files[0]);
  }

  async function handleUpload() {
    try {
      const dataForUpload = new FormData();

      dataForUpload.append("picture", img);

      const response = await api.post("/upload/uploadImage", dataForUpload);
      console.log(response);
      return response.data.url;
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let imgURL = await handleUpload();

      let country = countries.filter((currentCountry) => {
        return currentCountry.id === form.countryId;
      });

      if (imgURL === undefined) {
        imgURL = country[0].images[Math.floor(Math.random() * 3)];
      }

      const response = await api.post("/review/new", { ...form, image: imgURL });

      navigate(`/review/${response.data.id}`);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="comment-container">
        <div className="comment-flex">
          <div className="flex-item">
            <ReviewForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleImg={handleImg}
              title={form.title}
              image={form.image}
              rate={form.rate}
              body={form.body}
              date={form.date}
              countryId={form.countryId}
              country={countries}
              disabled={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
