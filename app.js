const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
// const v1 = require("./router/v1")
const morgan = require("morgan");
require("dotenv").config({ path: path.join(__dirname, "./config/.env") });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.status(200).json({ message: "Initial Route Working!!" });
});

// app.use('/v1', v1)
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(process.env.PORT || 2002, () => {
      console.log(
        "🚀 SeRvEr StArTeD At : ",
        process.env.PORT || 2001,
        "🚀"
      );
    });
  }) 
  .catch((error) => {
    console.error("💥 MoNgOdB cOnNeCtIon fAiLeD..!!", error);
  });