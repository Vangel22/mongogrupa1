const express = require("express");

// require("./db/config");
const connectDB = require("./db/config");
connectDB();
const {
  getAllUsers,
  createUser,
  updateUser,
  removeUser,
  getSingleUserById,
} = require("./controllers/user");

const app = express();

app.use(express.json());

app.get("/user", getAllUsers);
app.post("/user", createUser);
app.put("/user/:id", updateUser);
app.delete("/user/:id", removeUser);
app.get("/user/:id", getSingleUserById);

app.listen(3000, () => console.log("Server is listening at port 3000!"));
