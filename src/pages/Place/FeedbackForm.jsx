import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [description, setDescription] = useState("");
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
    formData.append("stars", stars);

    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
    }

    try {
      const response = await axios.post(
        "https://meshwar.onrender.com/feedback",
        formData
      );

      const { feedback, averageStars } = response.data;

      setDescription("");
      setStars(0);
      setImages([]);
      setError("");

      console.log("Feedback submitted successfully:", feedback, averageStars);
    } catch (error) {
      console.error(error);
      setError("Server error");
    }
  };

  return (
    <div className="feedback-form">
      <h2>Provide Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="stars">Stars:</label>
          <input
            type="number"
            id="stars"
            name="stars"
            value={stars}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="images">Images:</label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default FeedbackForm;
