import React, { useEffect, useRef } from "react";
import "../../utilities.css";
import "./HomePage.css";
import { Link } from "react-router-dom";

import testimonialImage from "../../assets/testimonials.png";
import howImage from "../../assets/howitworks.png";
import camera from "../../assets/camera.jpg";
import applepen from "../../assets/applepen.jpg";
import tubetop from "../../assets/tubetop.jpg";
import backpack from "../../assets/backpack.jpg";
import blacksweatshirt from "../../assets/blacksweatshirt.jpg";
import candles from "../../assets/candles.jpg";
import chocolatestrawberry from "../../assets/chocolatestrawberry.jpg";
import humidfier from "../../assets/desktophumidfier.jpg";

const HomePage = ({ aboutRef, contactRef, showContactInfo }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (showContactInfo && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }

    // Create the gallery container
    const gallery = document.createElement("div");
    gallery.className = "gallery";

    // Array of image URLs from the assets directory
    const galleryImages = [
      camera,
      applepen,
      tubetop,
      backpack,
      blacksweatshirt,
      candles,
      chocolatestrawberry,
      humidfier,
    ];

    // Loop through the images and create img elements
    galleryImages.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Gallery Image";
      gallery.appendChild(img);
    });

    // Append the gallery to the referenced container
    if (galleryRef.current) {
      galleryRef.current.appendChild(gallery);
    }
  }, [showContactInfo, contactRef]);

  return (
    <div className="homepage">
      <div className="header">
        <h1>
          come <i>scoop!</i>
        </h1>
        <p>
          looking for cheaper dorm essentials and clothes on <i>your</i> college campus? check out
          your university's page and come <i>scoop</i> up all the goodies your friends have listed
          near you!
        </p>
      </div>

      <div ref={galleryRef}></div>

      <div className="about" ref={aboutRef}>
        <h2>
          about <i>scoop</i>
        </h2>
        <p>
          introducing <i>scoop!</i> - created by a group of college students, we are a college
          warehouse where students like you(!) can post and sell whatever dorm essentials and
          clothes you dont need any longer to other students on your campus.
        </p>
      </div>

      <section className="testimonials">
        <div className="testimonial">
          <h1>testimonials</h1>
        </div>
        <div className="image-container">
          <img src={testimonialImage} alt="Testimonials" className="testimonial-image" />
        </div>
      </section>

      <section className="how-it-works">
        <div className="how-column">
          <img src={howImage} alt="HowItWorksVid" className="how-image" />
        </div>
        <div className="how-column"> </div>
        <div className="how-column">
          <h2>how it works</h2>
          <h3> four easy steps for buyers and sellers </h3>
          <p>
            <br />
            <h4>buyers:</h4>
            <br />
            1. sign up with your school email
            <br />
            2. upload pictures and descriptions of items you want to sell & your contact information
            (including school email)
            <br />
            3. respond to other students' offers & arrange method of delivery
            <br />
            4. remove listing once sold
            <br />
            <br />
            <h4>sellers:</h4>
            <br />
            1. sign up with your school email
            <br />
            2. browse items that other students posted based on headings
            <br />
            3. contact the individual via their contact information if interested in purchasing
            <br />
            4. happily use item once you've scooped it up
          </p>
        </div>
      </section>

      <div className="join" ref={contactRef}>
        <Link to="/signup">
          <button className="join-button" style={{ fontSize: "28px" }}>
            join now
          </button>
        </Link>
        <h1>
          to start <i>scoop</i> ing
        </h1>
      </div>

      {showContactInfo && (
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>You can contact us here at joel.samuel@scoop.org</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
