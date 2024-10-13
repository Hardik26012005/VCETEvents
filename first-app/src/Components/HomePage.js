// HomePage.js
import React, { useEffect, useState } from 'react';
import './HomePage.css'; // Import the CSS for HomePage styling
import clghackathon from '../Assets/clghackathon.jpg';
import clgimg from '../Assets/clgimg.jpg';
import clgfest from '../Assets/clgfest.jpg';
import vcethackathon from '../Assets/vcethackathon.jpg'
import startup from '../Assets/startup-pitch-competition.jpg'
import culture from '../Assets/cultog.jpg'
// import anotherImage from '../Assets/anotherImage.jpg'; // Replace with your actual image path

const images = [clgimg,clghackathon,clgfest]; // Add your images here

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="homepage">
      <header className="hero-section" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div className="hero-content">
          <h1>Welcome to VCET Events</h1>
          <p>Discover, manage, and attend events at VCET. Your one-stop platform for all things events.</p>
          <a href="/events" className="cta-button">Explore Events</a>
        </div>
      </header>



   
      <section className="events-section">
        <h2>SUCCESSFUL EVENTS</h2>
        <div className="events-cards">
      
          <div className="event-card">
            <img src={vcethackathon} alt="VCET Hackathon 2024" className="event-image" />
            <div className="event-info">
              <h3>VCET Hackathon 2024</h3>
              <p><strong>Date:</strong> October 4, 2024</p>
              <p>Join us for a 30-hour Hackathon organized by the Department of Information Technology at VCET.</p>
              {/* <a href="#details" className="event-button">View Details</a> */}
            </div>
          </div>

          
          <div className="event-card">
            <img src={startup} alt="Startup Pitch Fest" className="event-image" />
            <div className="event-info">
              <h3>Startup Pitch Fest</h3>
              <p><strong>Date:</strong> November 15, 2024</p>
              <p>Pitch your startup idea and compete for exciting prizes. Network with investors and entrepreneurs.</p>
              {/* <a href="#details" className="event-button">View Details</a> */}
            </div>
          </div>


          <div className="event-card">
            <img src={startup} alt="Startup Pitch Fest" className="event-image" />
            <div className="event-info">
              <h3>Startup Pitch Fest</h3>
              <p><strong>Date:</strong> November 15, 2024</p>
              <p>Pitch your startup idea and compete for exciting prizes. Network with investors and entrepreneurs.</p>
              {/* <a href="#details" className="event-button">View Details</a> */}
            </div>
          </div>

          
          <div className="event-card">
            <img src={culture} alt="VCET Cultural Fest" className="event-image" />
            <div className="event-info">
              <h3>VCET Cultural Fest</h3>
              <p><strong>Date:</strong> December 5, 2024</p>
              <p>Celebrate the cultural diversity of VCET with music, dance, art, and performances from talented students.</p>
              {/* <a href="#details" className="event-button">View Details</a> */}
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
