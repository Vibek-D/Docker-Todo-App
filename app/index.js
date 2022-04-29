const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const port = 3000;

app.set('view engine', 'ejs');
app.use(cors());
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Server Pinged');
});

app.listen(port, () => {
  console.log(`App listening at port 3000`);
});
