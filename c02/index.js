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
    // const user = new User({
    //   name: "Vangel Test",
    //   email: "h.vangel22@gmail.com",
    //   age: 24,
    // });
    // await user.save();
    // await User.create({
    //   name: "Ivan",
    //   age: 22,
    //   hobbies: ["Books", "Programming"],
    //   email: "vangelTEST@test.com",
    //   address: {
    //     street: "Mara Minanova br.9",
    //     city: "Strumica",
    //   },
    // });

    const getUsers = await User.find();
    // Ispecatete gi site korisnici na ekran
    // Izbrisete eden korisnik od vasata databaza
  } catch (err) {
    console.log(err.message);
    throw err;
  }
}

run();
