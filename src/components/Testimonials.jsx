import "./Testimonials.css";

import user1 from "../assets/team.jpg";
import user2 from "../assets/team.jpg";
import user3 from "../assets/team.jpg";

function Testimonials() {
  return (
    <section className="testimonials">
      <h1>
        User <span>Testimonials</span>
      </h1>

      <div className="testimonial-wrapper">
        <button className="arrow">❮</button>

        {/* Card 1 */}

        <div className="card">
          <div className="profile">
            <img src={user1} alt="" />
          </div>

          <div className="stars">★★★★★</div>

          <h2>Amina Rahimi</h2>

          <h4>CEO Of Company</h4>

          <div className="quote">❝</div>

          <p>
            Beautiful design, fast delivery, professional team, highly recommend
            services.
          </p>
        </div>

        {/* Card 2 */}

        <div className="card active">
          <div className="profile">
            <img src={user2} alt="" />
          </div>

          <div className="stars">★★★★★</div>

          <h2>David Carter</h2>

          <h4>CEO Of Company</h4>

          <div className="quote">❝</div>

          <p>
            Clean layout, responsive site, improved conversions and excellent
            communication.
          </p>
        </div>

        {/* Card 3 */}

        <div className="card">
          <div className="profile">
            <img src={user3} alt="" />
          </div>

          <div className="stars">★★★★★</div>

          <h2>James Walker</h2>

          <h4>CEO Of Company</h4>

          <div className="quote">❝</div>

          <p>
            Modern design, user-friendly interface and boosted engagement
            overall.
          </p>
        </div>

        <button className="arrow">❯</button>
      </div>
    </section>
  );
}

export default Testimonials;
