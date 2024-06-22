import React from "react";
import "./Accessibility.css";

const Accessibility = () => {
  return (
    <section className="container">
      <div className="accessheader">
        <h1>Accessibility Statement</h1>
      </div>
      <div className="accesstext">
        <h2>Our Commitment</h2>
        <p>
          Scoop is committed to ensuring digital accessibility for all users, including people with
          disabilities. We are continually improving the user experience for everyone and applying
          relevant accessibility standards.
        </p>
        <h2>Measures to Support Accessibility</h2>
        <p>We take the following measures to ensure accessibility:</p>
        <div className="bullet">
          <li>
            <strong>Incorporate Accessibility into Our Practices: </strong>Accessibility is
            integrated into our internal policies and procedures.
          </li>
          <li>
            <strong>Assign Clear Accessibility Targets and Responsibilities: </strong>We have
            specific accessibility targets and assign responsibilities to ensure these are met.
          </li>
          <li>
            <strong>Training for Staff: </strong>We provide ongoing accessibility training for our
            staff to enhance their understanding and implementation of accessibility best practices.
          </li>
          <li>
            <strong>Regular Testing and Monitoring: </strong>We regularly test our website for
            accessibility and make improvements based on the results.
          </li>
        </div>
        <h2>Accessibility Standards</h2>
        <p>
          We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1, aiming to meet
          or exceed Level AA standards. These guidelines help make web content more accessible for
          people with disabilities and more user-friendly for everyone.
        </p>
        <h2>Current Accessibility Features</h2>
        <div className="bullet">
          <li>
            <strong>Alternative Text: </strong>We provide alternative text for all non-text content.
          </li>
          <li>
            <strong>Contrast and Color: </strong> We use high contrast and color-friendly design to
            ensure readability.
          </li>
        </div>
        <h2>Ongoing Efforts</h2>
        <p>
          {" "}
          Accessibility is an ongoing effort at Scoop. We regularly review and update our website to
          improve accessibility. This includes:
        </p>
        <div className="bullet">
          <li>Conducting periodic accessibility audits.</li>
          <li>Seeking feedback from users on their accessibility experience.</li>
          <li>Implementing new accessibility features as they become available.</li>
        </div>
        <h2>Feedback</h2>
        <p>
          We welcome your feedback on the accessibility of Scoop. If you encounter any accessibility
          barriers, please contact us via our contact information on the homepage. We aim to respond
          to accessibility feedback within 1 month and take action to improve accessibility.
        </p>
        <h2>Compatibility</h2>
        <p>
          Our website is designed to be compatible with the following browsers: latest versions of
          Chrome, Firefox, Safari, and Edge.
        </p>
        <h2>Limitations and Alternatives</h2>
        <p>
          Despite our best efforts to ensure accessibility, some content may not yet be fully
          accessible. We are continuously working to improve this. If you need assistance accessing
          any part of our website, please contact us, and we will provide you with the necessary
          support.
        </p>
        <h2>Future Goals</h2>
        <p>
          We are committed to ongoing improvement of our accessibility features and welcome
          suggestions on how we can enhance the accessibility of our website. Our future goals
          include:
        </p>
        <div className="bullet">
          <li>Enhancing video accessibility with closed captions and transcripts.</li>
          <li>Improving the accessibility of third-party content.</li>
          <li>
            Regularly updating our accessibility practices to incorporate the latest standards and
            guidelines.
          </li>
        </div>
      </div>
    </section>
  );
};

export default Accessibility;
