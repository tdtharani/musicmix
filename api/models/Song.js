const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    artist: { type: String, default: "Unknown artist"},
    songcover: { type: String, default: "../../images/cover.jpg"},
    audio: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Song", SongSchema);