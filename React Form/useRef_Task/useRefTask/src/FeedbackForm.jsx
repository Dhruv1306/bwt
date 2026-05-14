import React, { useRef } from "react";
import "./FeedbackForm.css";

function FeedbackForm() {
  const nameRef = useRef(null);
  const feedbackRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", nameRef.current.value);
    console.log("Feedback:", feedbackRef.current.value);
  };

  return (
    <div className="feedback-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" ref={nameRef} />
        </div>
        <div className="form-group">
          <label>Feedback:</label>
          <textarea ref={feedbackRef} rows={4} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
