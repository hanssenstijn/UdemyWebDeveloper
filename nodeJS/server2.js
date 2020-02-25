const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/', (req, res) => {
    // console.log(req.query);
    // req.body
    //  console.log(req.header);
    console.log(req.params)
    res.status(404).send("not found");
    res.send("getting root")
});

// app.get('/profile', (req, res) => {
//     res.send("getting profile")
// })

// app.post('/profile', (req, res) => {
//     console.log(req.body)
//     res.send('succes');
// })

app.listen(3000);