const express = require('express');
const path = require('path');
const router = require('./router');

const app = express();
app.use(express.json());
app.use('/', router);
app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
