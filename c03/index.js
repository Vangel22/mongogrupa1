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
// Imame dva get povici so ista sema /user/dinamicen_parametar
app.get("/user/:id", getSingleUserById); // user/1shuishufdshufi
// app.get("/user/:email", getSingleUserByEmail); // user/test@gmail.com

// app.get("/user/email/:email", getSingleUserByEmail); // Ova ke raboti bidejki e razlicna rutata

app.listen(3000, () => console.log("Server is listening at port 3000!"));
