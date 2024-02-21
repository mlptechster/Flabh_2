import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="service">
      <div className="services-heading">
        <h1>Services</h1>
      </div>
      <div className="services-first-content">
        <p>
          Welcome to Florist, where innovation and excellence converge to
          deliver a suite of services designed to propel your business into the
          future. Our diverse range of offerings harness the power of Artificial
          Intelligence (AI), Augmented Reality (AR), and Virtual Reality (VR) to
          elevate your operations, engage your audience, and unlock
          unprecedented potential.
        </p>
      </div>
      <div className="border"></div>

      <div className="service-offer_container">
        <div className="service-what-we-offer">
          <h3>AI Solutions</h3>
          <p>
            At Florist, we specialize in developing AI solutions that empower
            your business with intelligence and efficiency. Our AI services
            include:
          </p>
        </div>
        <div className="service-three-card">
          <div className="service-more-cards">
            <h2>Machine Learning</h2>
          </div>
          <div className="service-more-cards">
            <h2>Natural Language </h2>
            <h2>Processing(NLP)</h2>
          </div>
          <div className="service-more-cards">
            <h2>Predicitive Analytics</h2>
          </div>
        </div>
      </div>

      <div className="border"></div>
      <div className="ex-service-offer_container">
        <div className="service-what-we-offer">
          <h3>Augmented Reality (AR) Experiences</h3>
          <p>
            Immerse your audience in captivating augmented reality experiences
            that bridge the gap between the digital and physical worlds. Our AR
            services include:
          </p>
        </div>
        <div className="ex-service-three-card">
          <div className="ex-service-more-cards">
            <h2>AR App Development</h2>
          </div>
          <div className="ex-service-more-cards">
            <h2>AR Marketing Campaigns</h2>
          </div>
          <div className="ex-service-more-cards">
            <h2>AR Training Solutions</h2>
          </div>
        </div>
      </div>

      <div className="border"></div>
      <div className="ex-service-offer_container">
        <div className="service-what-we-offer">
          <h3>Virtual Reality (VR) Environments</h3>
          <p>
            Transport your users to new dimensions with our Virtual Reality
            solutions. Whether for training, entertainment, or collaboration,
            our VR services include:
          </p>
        </div>
        <div className="ex-service-three-card">
          <div className="ex-service-more-cards">
            <h2>VR Content Development</h2>
          </div>
          <div className="ex-service-more-cards">
            <h2>VR Training Simulations</h2>
          </div>
          <div className="ex-service-more-cards">
            <h2>VR Collaboration Platforms</h2>
          </div>
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default Services;
