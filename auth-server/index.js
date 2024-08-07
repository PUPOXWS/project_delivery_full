const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const imageRouter = require("./routes/imagen");
const cors = require("cors");
const app = express();

dotenv.config();
const port = process.env.PORT || 8000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected to Mongo");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("connected");
});
app.use("/api/v1/all",imageRouter); //midleware montar imagenes nube
app.use(express.json({ limit: "3mb" }));

app.listen(port, () => {
  connect();
  console.log(`ejecutandose  desde ${port}`);
});
