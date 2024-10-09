// HomePage.js
import React from 'react';
import './HomePage.css'; // Import the CSS for HomePage styling
import vcethackathon from '../Assets/vcethackathon.jpg';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to VCET Events</h1>
          <p>Discover, manage, and attend events at VCET. Your one-stop platform for all things events.</p>
          <a href="/events" className="cta-button">Explore Events</a>
        </div>
      </header>

      {/* Event Cards Section */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="events-cards">
          {/* Event Card 1 */}
          <div className="event-card">
            <img src={vcethackathon} alt="VCET Hackathon 2024" className="event-image" />
            <div className="event-info">
              <h3>VCET Hackathon 2024</h3>
              <p><strong>Date:</strong> October 4, 2024</p>
              <p>Join us for a 30-hour Hackathon organized by the Department of Information Technology at VCET.</p>
              <a href="#details" className="event-button">View Details</a>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="event-card">
            <img src="https://via.placeholder.com/400x200" alt="Startup Pitch Fest" className="event-image" />
            <div className="event-info">
              <h3>Startup Pitch Fest</h3>
              <p><strong>Date:</strong> November 15, 2024</p>
              <p>Pitch your startup idea and compete for exciting prizes. Network with investors and entrepreneurs.</p>
              <a href="#details" className="event-button">View Details</a>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="event-card">
            <img src="https://via.placeholder.com/400x200" alt="VCET Cultural Fest" className="event-image" />
            <div className="event-info">
              <h3>VCET Cultural Fest</h3>
              <p><strong>Date:</strong> December 5, 2024</p>
              <p>Celebrate the cultural diversity of VCET with music, dance, art, and performances from talented students.</p>
              <a href="#details" className="event-button">View Details</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 VCET Events. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
