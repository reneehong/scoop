import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <section className="container">
      <div className="faqheader"></div>
      <div className="faqtext">
        <h1>FAQ </h1>
        <h3>How do I purchase an item on Scoop?</h3>
        <p>
          Create an account with your school email. Scroll through your school’s page to see what
          students are selling. Find an item you want and tap the listing. On the listing, you will
          find contact information, where you can reach out with any questions and/or ask to buy the
          product. If the seller agrees, you will organize delivery and payment methods via the
          contact method the seller has listed.
        </p>
        <h3>How do I sell an item on Scoop?</h3>
        <p>
          Create an account with your school email. Go to the sidebar to see add a listing, where
          you can post your item to sell. Then, after pogit costing, go to manage listings to see
          all your listings. Finally, let the sellers come rolling in to scoop your item.
        </p>
        <h3>How do I add my school to Scoop?</h3>
        <p>Email us at info@scoop.com and we will work to implement Scoop at your school. </p>
        <h3>How do I contact Scoop for any questions?</h3>
        <p>Email us at info@scoop.com. </p>
      </div>
    </section>
  );
};

export default FAQ;
