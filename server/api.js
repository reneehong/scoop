/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");
// import models so we can interact with the database
const User = require("./models/User");

// import authentication library
const { router: authRouter, populateCurrentUser } = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();
const bcrypt = require("bcryptjs");
//initialize socket
const socketManager = require("./server-socket");

router.use(populateCurrentUser);
router.use("/auth", authRouter);

router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

router.post("/updatepassword", async (req, res) => {
  try {
    const { _id, currentPassword, newPassword } = req.body;

    const user = await User.findOne({ _id });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordMatch) {
      return res.status(400).send({ error: "Incorrect current password" });
    }

    user.password = newPassword;
    await user.save();

    res.send({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

router.get("/mode/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    res.send({ mode: user.mode });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

// Update the mode for the user
router.post("/mode", async (req, res) => {
  try {
    const { _id, mode } = req.body;

    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    user.mode = mode;
    await user.save();

    res.send({ message: "Mode updated successfully" });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});
// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// anything else falls to this "not found" case

router.get("/findById/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    res.send({ name: user.name });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
