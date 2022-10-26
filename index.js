const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const Port = process.env.PORT || 5000;

const courses = require("./data/courses.json");

app.get('/', (req, res) => {
  res.send(courses)
})

app.get('/course/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const course = courses.find(c => c.id === id);
  //   console.log(course)
    res.send(course)
  })

app.listen(Port, () => {
  console.log(`Course server running on ${Port}`)
})