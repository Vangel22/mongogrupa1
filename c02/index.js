const mongoose = require("mongoose");
const User = require("./users");

mongoose.connect(
  "mongodb+srv://Vangel22:test1234@cluster0.12jzasd.mongodb.net/grupa1?retryWrites=true&w=majority&appName=Cluster0"
);
// MONGO_USERNAME
// MONGO_PASSWORD
// MONGO_HOST
// MONGO_DB
// mongoose.connect("mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority&appName=Cluster0")

async function run() {
  try {
    const user = new User({
      name: "Vangel Test",
      email: "h.vangel22@gmail.com",
      age: 24,
    });
    await user.save();

    const getUsers = await User.find();
    console.log("ALL USERS", getUsers);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
}

run();
