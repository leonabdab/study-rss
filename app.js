const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./app-modules/db');
const routes = require('./api/routes')
const emailRouter = require('./routes/email');
const rssRouter = require('./routes/rss');
const dataRouter = require('./routes/data');
const app = express();

app.use(express.json())

db.connect();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes.email, emailRouter);
app.use(routes.rss, rssRouter);
app.use(routes.data, dataRouter);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}...`)
});