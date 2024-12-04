const express = require('express');
const bodyParser = require('body-parser');
const shortid = require('shortid');
const cors = require('cors');

const app = express();
const port = 5000;

const urlDatabase = {};


app.use(cors());
app.use(bodyParser.json());


app.post('/api/shorten', (req, res) => {
    const { longUrl } = req.body;

    if (!longUrl || !longUrl.startsWith('http')) {
        return res.status(400).json({ error: 'Invalid URL' });
    }

    const shortUrlId = shortid.generate();
    const shortUrl = `http://localhost:${port}/${shortUrlId}`;

    urlDatabase[shortUrlId] = longUrl;

    res.json({ shortUrl });
});


app.get('/:shortUrlId', (req, res) => {
    const { shortUrlId } = req.params;
    const longUrl = urlDatabase[shortUrlId];

    if (longUrl) {
        res.redirect(longUrl);
    } else {
        res.status(404).send('Short URL not found');
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
