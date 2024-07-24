const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  _id: false,
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema(
  {
    name: String,
    age: {
      type: Number,
      min: 1,
      max: 100,
      //   validate: {
      //     validator: (v) => v % 2 === 0,
      //     message: (props) => `${props.value} ne e paren broj!`,
      //   },
    },
    email: {
      type: String,
      minLength: 10,
      lowercase: true,
      required: true,
    },
    address: addressSchema,
    hobbies: [String],
    bestFriend: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema, "users");

// gi zemame site korisnici
const getAll = async () => {
  return await UserModel.find();
  //   .sort({ name: 1 }).limit(10);
};

// /user
const create = async (data) => {
  // req.body ni e data
  const newUser = new UserModel(data);
  // return await UserModel.create(data);
  return await newUser.save();
};

// req.body -> datata
// req.params -> dinamicniot parametar :id
// req.query -> ?start=1&end=10 -> start e kluc 1 e vrednost itn

// /user/:id
// data = { name: "Test", age: 30 }
const update = async (userId, data) => {
  return await UserModel.updateOne({ _id: userId }, data);
  // return await UserModel.updateOne({ _id: userId }, { $set: { data } })
};

// /user/:id
const remove = async (userId) => {
  return await UserModel.deleteOne({ _id: userId });
};

const getUserById = async (userId) => {
  return await UserModel.findOne({ _id: userId }).populate({
    path: "bestFriend",
    select: "-_id email name",
  });
};

module.exports = {
  getAll,
  create,
  update,
  remove,
  getUserById,
};
