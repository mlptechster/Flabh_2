import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="head">
        <h1>Contact Us</h1>
      </div>
      <div className="main-side">
        <div className="left-side">
          <h2>Ask How Can We Help You?</h2>
          <h3>Information and Sales:<a href="#">Click Here</a></h3>
          <h3>Support:<a href="#">Click Here</a></h3>
          <h3>Job Offer:<a href="#">Click Here</a></h3>
        </div>
        <div className="right-side">
          <div className="input-container">
            <input type="text" placeholder="Email ID" className="email-input" />
          </div>
          <div className="input-container">
            <input placeholder="Comments" className="comment-input" />
          </div>
          <div className="input-container">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
