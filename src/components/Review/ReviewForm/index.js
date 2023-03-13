import { Rating } from "@mui/material";

export function ReviewForm(props) {
  return (
    <div className="form">
      <form className="form-head" onSubmit={props.handleSubmit}>
        <label htmlFor="formTitle">Title</label>
        <p>
          <input
            className="form-title"
            id="formTitle"
            name="title"
            type="text"
            value={props.title}
            onChange={props.handleChange}
            minLength={3}
            required
            placeholder="Give your review a title"
          />
        </p>{" "}
        <label htmlFor="formImage">Picture</label>
        <p>
          <input
            className="form-image"
            id="formImage"
            name="image"
            type="file"
            value={props.image}
            onChange={props.handleImg}
          />
        </p>
        <label htmlFor="formRate">Rate</label>
        <p>
          <Rating
            id="formRate"
            name="rate"
            value={props.rate}
            onChange={props.handleChange}
            required
            disabled={props.disabled}
            size="large"
          />
        </p>
        <label htmlFor="formBody">Describe your Experience</label>
        <p>
          <input
            className="form-description"
            id="formBody"
            name="body"
            type="text"
            value={props.body}
            onChange={props.handleChange}
            minLength={90}
            placeholder="Describe your experience here"
            required
          />
        </p>
        <label htmlFor="formDate">Date</label>
        <p>
          <input
            className="form-date"
            name="date"
            id="formDate"
            type="date"
            value={props.date}
            onChange={props.handleChange}
            required
            disabled={props.disabled}
          />
        </p>
        <label htmlFor="form-country">Country: </label>
        <p>
          <select
            className="form-country"
            id="form-country"
            name="countryId"
            disabled={props.disabled}
            value={props.countryId}
            onChange={props.handleChange}>
            {props.country.map((currentCountry) => {
              return (
                <option key={currentCountry.id} label={currentCountry.name}>{currentCountry.id}</option>
              );
            })}
          </select>
        </p>
        <button type="submit" className="form-btn">
          Send
        </button>
      </form>
    </div>
  );
}
