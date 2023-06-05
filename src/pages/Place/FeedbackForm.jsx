import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = ({placeID}) => {
  const [description, setDescription] = useState("");
  // console.log(placeID)
  const [stars, setStars] = useState(0);
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "description") {
      setDescription(value);
    } else if (name === "stars") {
      setStars(value);
    }
  };

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("description", description);
    formData.append("stars", Number(stars));

    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        formData.append("feedImages", images[i]);
      }
    }
console.log(placeID)
    try {
      const response = await axios.post(
        `https://meshwar.onrender.com/feedback/${placeID}`,
        formData
      );

      const { feedback } = response.data;

      setDescription("");
      setStars(0);
      setImages([]);
      setError("");

      console.log("Feedback submitted successfully:", feedback);
    } catch (error) {
      console.error(error);
      setError(error.messa);
    }
  };

  return (
    <div className="feedback-form">
      <h2>Provide you own Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="feedback-formLabel">
          <div className="feedback-label">
            <label htmlFor="stars">Rating:</label>
            <input
              type="number"
              id="stars"
              name="stars"
              value={stars}
              className="feedback-input"
              onChange={handleChange}
            />
          </div>
          <div className="feedback-label">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              className="feedback-input1"
              value={description}
              onChange={handleChange}
            />
          </div>

          <div className="feedback-label">
            <label htmlFor="images">Images:</label>
            <input
              type="file"
              id="images"
              name="feedImages"
              className="feedback-input"
              multiple
              onChange={handleFileChange}
            />
          </div>
          <button
            className="submit-btn"
            type="submit"
            onClick={() => window.location.reload(false)}
          >
            Submit
          </button>
          <div className="feederror">{error && <p>{error}</p>}</div>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
