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
      name: "Edukacija",
      email: "h.vangel22@gmail.com",
      age: 98,
    });
    await user.save(); // ova linija ke go povika .pre() vo users.js
    // await User.create({ // ova linija ke go povika .pre() vo users.js PROVERETE
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
    console.log(getUsers);
    // Ispecatete gi site korisnici na ekran
    // Izbrisete eden korisnik od vasata databaza
    // await User.deleteOne({ _id: "669ead57173ada78757ca44b" }) treba da go izbrise korisnikot so zadadenoto _id

    // 3 korisnici na ista aplikacija
    // Pero -> daj mi gi site korisnici so ime Test
    // Riste -> daj mi gi site pomali od 20 godini
    // Trpe  -> nesto treto

    await User.updateOne(
      { email: "vangeltest@test.com" },
      { email: "vangel@test.com" } // moze da se koristi i $set
    );

    const updatedUsers = await User.find();
    console.log(updatedUsers);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
}

run();
