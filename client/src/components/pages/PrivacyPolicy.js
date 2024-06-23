import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <section className="container">
      <div className="privacyheader"></div>
      <div className="privacytext">
        <h1>Privacy Policy </h1>
        <h3> Introduction </h3>
        <p>
          Welcome to Scoop. We are committed to protecting your personal information and your right
          to privacy. This Privacy Policy explains what information we collect, how we use it, and
          what rights you have in relation to it. If you have any questions or concerns about our
          policy, or our practices with regards to your personal information, please contact us via
          our contact information on the homepage. By using our website and services, you agree to
          the collection, use, and disclosure of your information in accordance with this Privacy
          Policy.
        </p>
        <h3>Information We Collect</h3>
        <p>
          We collect personal information that you provide to us directly, as well as information
          automatically collected when you use our website.
        </p>
        <h3>Information You Provide</h3>
        <div className="bullet">
          <li>
            {" "}
            <strong>Account Information: </strong> When you register for an account, we collect your
            first name, last name, email, preferred contact, college, password, and mode preference
            (dark or light){" "}
          </li>
          <li>
            <strong> Profile Information: </strong> You may choose to provide additional
            information, such as a profile picture, address, and payment details.
          </li>
          <li>
            <strong> Transaction Information:</strong>We collect information related to your
            purchases and sales on our marketplace, excluding payment details and delivery
            information as that is between the buyer and seller through the seller’s communication
            method.
          </li>
          <li>
            <strong>Communications: </strong> We collect any information you provide to us when you
            communicate with us through customer support or other means.
          </li>
        </div>
        <h3>Information Collected Automatically</h3>
        <div className="bullet">
          <li>
            {" "}
            <strong>Usage Data:</strong> We collect information about your interactions with our
            website, such as the pages you visit, the time and date of your visits, and the links
            you click.
          </li>
          <li>
            <strong>Device Information: </strong>We collect information about the device you use to
            access our website, including the hardware model, operating system and version, and
            mobile network information.
          </li>
          <li>
            <strong>Cookies and Similar Technologies: </strong>We use cookies and similar
            technologies to collect information about your usage of our website and to provide a
            better user experience.
          </li>
        </div>
        <h3>How We Use Your Information</h3>
        <p>We use the information we collect for the following purposes:</p>
        <div className="bullet">
          <li>
            <strong>To Provide and Improve Our Services:</strong> We use your information to
            operate, maintain, and improve our website and services.
          </li>
          <li>
            <strong>To Facilitate Transactions:</strong> We use your information to process
            transactions, send confirmations, and manage your orders.
          </li>
          <li>
            <strong>To Communicate with You: </strong> We use your information to send you updates,
            respond to inquiries, and provide customer support.
          </li>
          <li>
            <strong>To Personalize Your Experience: </strong>We use your information to personalize
            your experience and provide content and features that match your interests.
          </li>
          <li>
            <strong>To Ensure Security: </strong>We use your information to detect and prevent
            fraud, abuse, and other harmful activities.
          </li>
          <li>
            <strong>To Comply with Legal Obligations: </strong>We use your information to comply
            with legal and regulatory requirements.
          </li>
        </div>
        <h3>Sharing Your Information</h3>
        <p>We may share your information with the following parties:</p>
        <div className="bullet">
          <li>
            <strong> Service Providers: </strong> We share your information with third-party service
            providers who perform services on our behalf, such as allowing our website to run, data
            analysis, and customer service.
          </li>
          <li>
            <strong>Business Partners: </strong> We may share your information with business
            partners to offer you certain products, services, or promotions.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your information if required by law
            or in response to valid requests by public authorities.
          </li>
        </div>
        <h3>Your Rights and Choices</h3>
        <p>You have certain rights regarding your personal information: </p>
        <div className="bullet">
          <li>
            <strong>Access and Update: </strong>You can access and update your personal information
            through your account settings.
          </li>
          <li>
            <strong>Delete: </strong>You can request the deletion of your personal information by
            contacting us.
          </li>
          <li>
            <strong>Opt-Out:</strong>You can opt-out of receiving promotional communications from us
            by following the unsubscribe instructions included in those communications.
          </li>
        </div>
        <h3>Data Security</h3>
        <p>
          We take reasonable measures to protect your personal information from unauthorized access,
          use, or disclosure. However, no data transmission over the internet or electronic storage
          system can be guaranteed to be 100% secure.
        </p>
        <h3>Changes to This Privacy Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by
          posting the new Privacy Policy on our website. You are advised to review this Privacy
          Policy periodically for any changes.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us via our contact
          information on the homepage.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
