import React from "react";
import "./Home.css";
import hand from "./White1.png";

const Home = () => {
  return (
    <div class="main">
      <div className="wrap">
      <div className="first">
        <h1>Immerse</h1>
        <h1 className="yourself">Yourself</h1>
        <p>
          in a seamless blend of digital and physical realities with Augmented
          Reality (AR), where digital overlays enhance various experiences.
          Meanwhile, Virtual Reality (VR) propels you into entirely virtual
          realms, revolutionizing gaming, training simulations, therapy,
          architectural visualization, and virtual tourism. Explore a
          transformative convergence that reshapes industries and redefines our
          fundamental interactions at Florist.
        </p>
        {/* <img src={hand} alt="Your Image" /> */}
      </div>
      <div className="Image">
           <img src={hand} alt="robo hand"/>
      </div>
      </div>

      <div className="second">
        <h1>Bring your imagination in the </h1>
        <h1>real world with AI </h1>
        <p>
          Augmented reality, guided by AI, transforms experiences, and education
          becomes personalized, while AI's analytical power aids environmental
          conservation, turning imagination into tangible realities.
        </p>
      </div>

      <div className="container">
        <div className="left-card">
          <div className="card">
            <p>
              In the dynamic landscape of technology, Augmented Reality (AR) and
              Virtual Reality (VR) stand as transformative forces, reshaping the
              way we perceive and interact with the world. These immersive
              technologies have transcended the realm of novelty, finding
              practical applications that enhance various aspects of our lives.
            </p>
          </div>
        </div>
        <div className="right-cards">
          <div className="card">
            <h2>Augmented Reality (AR):</h2>
            <p>
              Augmented Reality seamlessly integrates digital overlays with the
              physical environment, presenting a sophisticated fusion that
              elevates diverse experiences across multifaceted domains,
              demonstrating its versatility and applicability.
            </p>
          </div>
          <div className="card">
            <h2>Virtual Reality (VR):</h2>
            <p>
              Plunging users into immersive virtual environments, Virtual
              Reality (VR) undergoes a transformative evolution, reshaping
              industries including gaming, training simulations, therapy,
              architectural visualization, and virtual tourism
            </p>
          </div>
        </div>
      </div>

      <div className="choose">
        <h2>WHY CHOOSE US ?</h2>
      </div>

      <div className="container">
        <div className="new-left-card">
          <div className="card">
            <h2>Cutting-Edge Technological Advancements: </h2>
            <p>
              Our solutions harness the forefront of technological progress in
              Augmented Reality (AR) and Virtual Reality (VR), ensuring that we
              deliver state-of-the-art, innovative solutions aligned with your
              specific requirements.
            </p>
          </div>
          <div className="card">
            <h2>Tailored Solutions for Unique Needs:</h2>
            <p>
              Tailored Solutions for Unique Needs: Recognizing the distinctive
              requirements of each client, our solutions are bespoke, ensuring a
              personalized and effective approach that addresses specific
              objectives.
            </p>
          </div>
        </div>
        <div className="right-cards">
          <div className="card">
            <h2>Versatility Across Industries::</h2>
            <p>
              From gaming and simulations to therapeutic applications and
              virtual tourism, our suite of solutions spans a diverse array of
              industries, showcasing the adaptability and comprehensive nature
              of our technological capabilities.
            </p>
          </div>
          <div className="card">
            <h2>Continuous Support and Maintenance:</h2>
            <p>
              Our commitment extends beyond
              project completion. We provide ongoing support, updates, and
              maintenance to ensure that your AR and VR experiences remain at
              the forefront of technological innovation.
            </p>
          </div>
        </div>
      </div>


    

    </div>
  );
};

export default Home;
