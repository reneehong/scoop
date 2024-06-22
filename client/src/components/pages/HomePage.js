import React, { useState, useRef, useEffect } from "react";
import "../../utilities.css";
import "./HomePage.css";
import iceCreamImage from "../../assets/home_page_ice_cream.png";
import testimonialImage from "../../assets/testimonials.png";
import howImage from "../../assets/howitworks.png";

const HomePage = ({ contactRef, showContactInfo }) => {
  useEffect(() => {
    if (showContactInfo) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
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

      <div className="image-container">
        <img src={iceCreamImage} alt="Ice Cream Scoop" className="main-image" />
      </div>

      <div className="about">
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
          <h2>testimonials</h2>
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
        <h1>join now to start</h1>
        <h1>
          <i>scoop</i> ing
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
