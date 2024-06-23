import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import HomePage from "./pages/HomePage.js";
import NavBar from "./NavBar.js";
import Footer from "./Footer.js";
import SignUp from "./pages/SignUp.js";
import SignIn from "./pages/SignIn.js";
import Shop from "./pages/Shop.js";
import ProductPage from "./pages/ProductPage.js";
import Sidebar from "./Sidebar";
import AddAListing from "./pages/AddAListing";
import MyListings from "./pages/MyListings";
import Profile from "./pages/Profile.js";
import Preferences from "./pages/Preferences.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import TermsUse from "./pages/TermsUse.js";
import Accessibility from "./pages/Accessibility.js";
import FAQ from "./pages/FAQ.js";
import axios from "axios";
import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";
import { useTheme } from "../ThemeContext.js"; // Import useTheme

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);
  const { darkMode, toggleDarkMode } = useTheme(); // Get darkMode from the context
  const [showContactInfo, setShowContactInfo] = useState(false);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const fetchUserMode = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/mode/${id}`);
      const userMode = response.data.mode;
      if (userMode !== darkMode) {
        toggleDarkMode();
      }
    } catch (error) {
      console.error("Error fetching user mode:", error);
    }
  };

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  const handleContactUsClick = () => {
    setShowContactInfo((prevState) => !prevState); // Toggle the state
    if (!showContactInfo) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              aboutRef={aboutRef}
              contactRef={contactRef}
              showContactInfo={showContactInfo}
            />
          }
        />
        <Route
          path="/signup"
          element={<SignUp setUserId={setUserId} fetchUserMode={fetchUserMode} />}
        />
        <Route
          path="/signin"
          element={<SignIn setUserId={setUserId} fetchUserMode={fetchUserMode} />}
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/termsofuse" element={<TermsUse />} />
        <Route path="/Accessibility" element={<Accessibility />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route
          path="/addalisting"
          element={<WithSidebar Component={AddAListing} userId={userId} />}
        />
        <Route
          path="/mylistings"
          element={<WithSidebar Component={MyListings} userId={userId} />}
        />
        <Route path="/profile" element={<WithSidebar Component={Profile} userId={userId} />} />
        <Route
          path="/preferences"
          element={
            <WithSidebar
              Component={Preferences}
              userId={userId}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          }
          userId={userId}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer handleContactUsClick={handleContactUsClick} handleAboutClick={handleAboutClick} />
    </div>
  );
};

const WithSidebar = ({ Component, userId }) => {
  return (
    <div className="page-with-sidebar">
      <Sidebar />
      <Component userId={userId} />
    </div>
  );
};

export default App;
