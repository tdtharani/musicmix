const express = require('express');

const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors  = require('cors');

const app = express();

const songRoute = require('./routes/songs');

app.use(cors());

dotenv.config();

mongoose.connect (process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("DB connected."))
.catch((err) => console.log(err));

app.use(express.json());

app.use("/api/songs", songRoute);
//app.use("/api/playlists", playlistRoute);

app.listen(8800, () => {
  console.log("Backend server is running.");
});