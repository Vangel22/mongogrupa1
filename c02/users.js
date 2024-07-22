// left click
// right click
// scroll + 10 stepeni - ekranot da odi 200px pogore
const mongoose = require("mongoose");

// const user = {
//     _id: String,
//     name: String,
// }

// immutable e nepromenlivo
// mutable e promenlivo

// const test = "zdravo"
// const zdravo = {
//     test: "hello"
// }

const addressSchema = new mongoose.Schema({
  _id: false,
  street: String,
  city: String,
});

// Schema e dokumentot kako ke izgleda
const userSchema = new mongoose.Schema({
  name: String,
  // name: {
  //     type: String
  // },
  age: {
    type: Number,
    min: 1, // funkcionira za broevi
    max: 100,
    validate: {
      validator: (v) => v % 2 === 0, // dali brojot na godini e paren broj
      message: (props) => `${props.value} ne e paren broj!`,
    },
  },
  email: {
    type: String,
    minLength: 10, // funkcionira za stringovi
    lowercase: true,
    // uppercase: false
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true, // ova pole nikogas nema da se promeni
    // default: new Date() // 20:15 -> t.e ovaa ke se izvrsi koga ke napravime node index.js t.e koga ke ja startuvame nasata aplikacija
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  //   address: {
  //     street: {
  //         type: String
  //     },
  //     city: {
  //         type: String
  //     }
  //   }
  address: addressSchema,
  hobbies: [String], // ["fudbal", "rakomet"]
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

// ref e User i go definirame kako prvo pole vo mongoose.model(name, schema, collection)
const UserModel = mongoose.model("User", userSchema, "users");

module.exports = UserModel;
