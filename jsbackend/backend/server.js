const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id:1,
            title: "first joke",
            content: "This is the first joke"
        },
        {
            id:2,
            title: "second joke",
            content: "This is the second joke"
        },
        {
            id:3,
            title: "third joke",
            content: "This is the third joke"
        }
    ]
    res.json(jokes);
})

app.listen(process.env.PORT, () => {
    console.log('example app listening on port', process.env.PORT)
})