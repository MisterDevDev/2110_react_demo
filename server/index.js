const path = require('path');
const express = require('express');
const app = express();
const axios = require('axios');
const { ContextExclusionPlugin } = require('webpack');

const PORT = process.env.PORT || 8080;
const PUBLIC_PATH = path.join(__dirname, '../public');
const DIST_PATH = path.join(__dirname, '../dist');

app.use(express.json());
app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));

app.get('/posts', async(req, res, next) => {
    try {
        const {data} = (await axios.get('https://www.reddit.com/r/popular/.json')).data
        console.log(data)
        res.json(data)
    } catch (error) {
        next(error)
    }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});