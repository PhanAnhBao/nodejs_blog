const express = require('express');
const app = express();
const hdb = require('express-handlebars');
const port = 3000;
const morgan = require('morgan');
const path = require('path');
const route = require('./routes/index.route');
const db = require('./config/db');

//-- Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
//-- HTTP Logger
app.use(morgan('combined'));

//-- Template Engine
app.engine('hbs', hdb.engine({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});