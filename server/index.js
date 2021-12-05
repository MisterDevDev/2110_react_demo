const path = require("path");
const express = require("express");
const app = express();
const axios = require("axios");
const { db, Post } = require("./db");

const PORT = process.env.PORT || 8080;
const PUBLIC_PATH = path.join(__dirname, "../public");
const DIST_PATH = path.join(__dirname, "../dist");

app.use(express.json());
app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));

app.get('/saved', async (req, res, next) => {
  res.status(200).send(await Post.findAll())
})

app.post('/create', async (req, res, next) => {
  try {
    res.status(201).send(await Post.create(req.body.details))
  } catch (error) {
    console.log(error)
  }
})

app.get("/:category", async (req, res, next) => {
  try {
    const { data } = (
      await axios.get(`https://www.reddit.com/r/${req.params.category}/.json`)
    ).data;
    res.send(data);
  } catch (error) {
    next(error);
  }
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

const init = async () => {
  try {
    await db.sync({ force: false });
    app.listen(PORT, () => {
      console.log(`Server listening on PORT: ${PORT}`);
    });
  } catch (error) {
    console.log("Error Initializing");
  }
};

init();
