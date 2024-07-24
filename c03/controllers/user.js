const {
  getAll,
  create,
  update,
  remove,
  getUserById,
} = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const users = await getAll();
    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send("Invalid server error");
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await create(req.body);
    // return res.status(201).send("Uspesno kreiran korisnik")
    return res.status(200).send(newUser);
  } catch (err) {
    return res.status(500).send("Invalid server error");
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await update(req.params.id, req.body);
    return res.status(200).send(updatedUser);
  } catch (err) {
    return res.status(500).send("Invalid server error");
  }
};

const removeUser = async (req, res) => {
  try {
    const removedUser = await remove(req.params.id);
    return res.status(200).send(removedUser);
  } catch (err) {
    return res.status(500).send("Invalid server error");
  }
};

const getSingleUserById = async (req, res) => {
  try {
    const foundUser = await getUserById(req.params.id);
    return res.status(200).send(foundUser);
  } catch (err) {
    return res.status(500).send("Invalid server error");
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  removeUser,
  getSingleUserById,
};
