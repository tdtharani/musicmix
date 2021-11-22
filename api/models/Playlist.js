const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    playlistcover: { type: String },
    desc: {type: String},
    content:{type:Array},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Playlist", PlaylistSchema);