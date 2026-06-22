import "./AboutTeam.css";
import teamImage from "../assets/team.jpg";

function AboutTeam() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="left-side">
          <img src={teamImage} alt="Team" />
        </div>

        <div className="right-side">
          <button className="top-btn">About Our Team ~</button>

          <h2>Choose The Best Team For Your Project</h2>

          <p>
            Our team of passionate designers and developers works together to
            create innovative digital solutions. We focus on quality,
            creativity, and delivering successful results for every project.
          </p>

          <button className="contact-btn">
            Contact Us
            <span> → </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutTeam;
