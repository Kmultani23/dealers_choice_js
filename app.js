const express = require("express");
const morgan = require("morgan");
const animalBank = require('animalBank.js');

const app = express();
app.use(morgan('dev'));
app.use(express.static('public'))

const PORT = 13378;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});