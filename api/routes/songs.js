const router = require("express").Router();
const Song = require("../models/Song");

//CREATE

router.post("/create", async (req, res) => {
    const newSong = new Song(req.body);
    try {
      const savedSong = await newSong.save();
      res.status(201).json(savedSong);
    } catch (err) {
      res.status(500).json(err);
    }
});


//GET ALL SONGS

router.get("/", async (req, res) => {
    try {
      const songs = await Song.find();
      res.status(200).json(songs.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
});


//SEARCH

router.get("/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    res.status(200).json(song);
  } catch (err) {
    res.status(500).json(err);
  }
});


//UPDATE

router.put("/:id", async (req, res) => {
    try {
      const updatedSong = await Song.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedSong);
    } catch (err) {
      res.status(500).json(err);
    }
});



//DELETE

router.delete("/:id", async (req, res) => {
    try {
      await Song.findByIdAndDelete(req.params.id);
      res.status(200).json("The song has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
});


/*
//UPDATE

router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedSong = await Song.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedSong);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//DELETE

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Song.findByIdAndDelete(req.params.id);
      res.status(200).json("The song has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//GET

router.get("/:id", verify, async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    res.status(200).json(song);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL movie

router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const songs = await Song.find();
      res.status(200).json(songs.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

*/ 

module.exports = router;