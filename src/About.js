import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="heading">
        <h1>About Us</h1>
      </div>
      <div className="first-content">
        <p>
          Welcome to Florist, where innovation meets imagination in the dynamic
          realms of Artificial Intelligence (AI), Augmented Reality (AR), and
          Virtual Reality (VR). At Florist, we are pioneers in harnessing
          cutting-edge technologies to redefine the boundaries of possibility
          and create immersive experiences that captivate and inspire.
        </p>
      </div>
      <div className="sec-content">
        <h3>Our Mission</h3>
        <p>
          At the core of our mission is a commitment to pushing the boundaries
          of what's achievable with AI, AR, and VR. We believe that these
          transformative technologies have the power to revolutionize
          industries, enhance human experiences, and shape the future. Our goal
          is to be at the forefront of this revolution, driving innovation that
          not only meets but exceeds the evolving needs of our clients and
          partners.
        </p>
      </div>
      <div className="set_us">
        <h3>What Sets Us Apart</h3>
      </div>

      <div className="new_container">
        <div className="new_left-card">
          <div className="cards">
            <h2>Holistic Solutions:</h2>
            <p>
              We don't just provide products; we deliver comprehensive solutions
              tailored to meet the unique challenges of each client. From
              concept to execution, we ensure a seamless integration of AI, AR,
              and VR into your business processes or projects.
            </p>
          </div>
          <div className="cards">
            <h2>Collaborative Approach:</h2>
            <p>
              We believe in the power of collaboration. Our team works closely
              with clients, understanding their goals and objectives to
              co-create solutions that not only meet but exceed expectations.
            </p>
          </div>
        </div>
        <div className="new_right-cards">
          <div className="cards">
            <h2>Ethical AI Practices:</h2>
            <p>
              We are committed to ethical AI development, ensuring that our
              solutions prioritize fairness, transparency, and accountability.
              Our commitment to responsible AI aligns with our dedication to
              building a better, more inclusive future.
            </p>
          </div>
        </div>
      </div>

      <div className="offer_container">
        <div className="what-we-offer">
          <h3>What We offer</h3>
        </div>
        <div className="three-card">
          <div className="more-cards">
            <h2>AI Solutions</h2>
          </div>
          <div className="more-cards">
            <h2>AR Experiences</h2>
          </div>
          <div className="more-cards">
            <h2>VR Environments</h2>
          </div>
        </div>
      </div>

      <div className="last-content">
        <h3>Join Us on the Journey</h3>
        <p>
          Whether you're a business looking to innovate, an individual seeking
          the latest in immersive experiences, or a partner interested in
          shaping the future of technology, Florist invites you to join us on
          this exciting journey. Together, let's explore the limitless
          possibilities of AI, AR, and VR, transforming ideas into extraordinary
          realities.
        </p>
      </div>
    </div>
  );
};

export default About;
