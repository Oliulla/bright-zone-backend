const express = require('express');
const cors = require('cors');
const app = express();

const Port = process.env.PORT || 5000;
app.use(cors());

const courses = require("./data/courses.json");

app.get('/', (req, res) => {
  res.send(courses)
})

app.get('/course/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const course = courses.find(c => c.id === id);
    res.send(course)
  })

app.listen(Port, () => {
  console.log(`Course server running on ${Port}`)
})