import React from "react";
import "../../utilities.css";
import "./HomePage.css";
import iceCreamImage from "../../assets/home_page_ice_cream.png";
import testimonialImage from "../../assets/testimonials.png";
import howImage from "../../assets/howitworks.png";

const HomePage = () => {
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
          <div className="how-text">
            <h4>buyers:</h4>
            <ol>
              <li>sign up with your school email</li>
              <li>upload pictures and descriptions of items you want to sell & your contact information (including school email)</li>
              <li>respond to other students' offers & arrange method of delivery</li>
              <li>remove listing once sold</li>
            </ol>
            <h4>sellers:</h4>
            <ol>
              <li>sign up with your school email</li>
              <li>browse items that other students posted based on headings</li>
              <li>contact the individual via their contact information if interested in purchasing</li>
              <li>happily use item once you've scooped it up</li>
            </ol>
          </div>
        </div>
      </section>

      <div className="join">
        <h1>join now to start</h1>
        <h1>
          <i>scoop</i> ing
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
