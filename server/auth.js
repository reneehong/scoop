const User = require("./models/User.js");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, college } = req.body;
    // Validate required fields
    if (!firstName || !lastName || !email || !password || !college) {
      return res.status(400).send({ error: "All required fields must be filled" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ error: "Email is already in use" });
    }
    const user = new User({ firstName, lastName, email, password, college });
    await user.save();
    req.session.user = user;

    res.status(201).send({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password, college } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ error: "Invalid email or password" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).send({ error: "Invalid email, password, or college" });
    }

    if (user.college !== college) {
      return res.status(400).send({ error: "Invalid email, password, or college" });
    }
    req.session.user = user; // Store user info in session
    res.send({ message: "Logged in successfully", user });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.post("/signout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send({ error: "Failed to sign out" });
    }
    res.send({ message: "Signed out successfully" });
  });
});

const populateCurrentUser = (req, res, next) => {
  if (req.session.user) {
    req.user = req.session.user;
  }
  next();
};

module.exports = { router, populateCurrentUser };
// const { OAuth2Client } = require("google-auth-library");
// const socketManager = require("./server-socket");
// create a new OAuth client used to verify google sign-in
//    TODO: replace with your own CLIENT_ID
// const CLIENT_ID = "FILL IN CLIENT ID";
// const client = new OAuth2Client(CLIENT_ID);

// accepts a login token from the frontend, and verifies that it's legit
// function verify(token) {
//   return client
//     .verifyIdToken({
//       idToken: token,
//       audience: CLIENT_ID,
//     })
//     .then((ticket) => ticket.getPayload());
// }

// // gets user from DB, or makes a new account if it doesn't exist yet
// function getOrCreateUser(user) {
//   // the "sub" field means "subject", which is a unique identifier for each user
//   return User.findOne({ googleid: user.sub }).then((existingUser) => {
//     if (existingUser) return existingUser;

//     const newUser = new User({
//       name: user.name,
//       googleid: user.sub,
//     });

//     return newUser.save();
//   });
// }

// function login(req, res) {
//   verify(req.body.token)
//     .then((user) => getOrCreateUser(user))
//     .then((user) => {
//       // persist user in the session
//       req.session.user = user;
//       res.send(user);
//     })
//     .catch((err) => {
//       console.log(`Failed to log in: ${err}`);
//       res.status(401).send({ err });
//     });
// }

// function logout(req, res) {
//   req.session.user = null;
//   res.send({});
// }

// function populateCurrentUser(req, res, next) {
//   // simply populate "req.user" for convenience
//   req.user = req.session.user;
//   next();
// }

// function ensureLoggedIn(req, res, next) {
//   if (!req.user) {
//     return res.status(401).send({ err: "not logged in" });
//   }

//   next();
// }

// module.exports = {
//   login,
//   logout,
//   populateCurrentUser,
//   ensureLoggedIn,
// };
