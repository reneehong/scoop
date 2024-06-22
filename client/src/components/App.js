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
import PrivacyPolicy from "./pages/PrivacyPolicy";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";
import { useTheme } from "../ThemeContext.js"; // Import useTheme

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);
  const { darkMode } = useTheme(); // Get darkMode from the context
  const [showContactInfo, setShowContactInfo] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registered in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

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
    setShowContactInfo(prevState => !prevState);  // Toggle the state
    if (!showContactInfo) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<HomePage contactRef={contactRef} showContactInfo={showContactInfo} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/addalisting" element={<WithSidebar Component={AddAListing} />} />
        <Route path="/mylistings" element={<WithSidebar Component={MyListings} />} />
        <Route path="/profile" element={<WithSidebar Component={Profile} />} />
        <Route path="/preferences" element={<WithSidebar Component={Preferences} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer handleContactUsClick={handleContactUsClick} />
    </div>
  );
};

const WithSidebar = ({ Component }) => {
  return (
    <div className="page-with-sidebar">
      <Sidebar />
      <Component />
    </div>
  );
};

export default App;
