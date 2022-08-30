const express = require('express');
const app = express();
const hdb = require('express-handlebars');
const port = 3000;
const morgan = require('morgan');
const path = require('path');
const route = require('./routes/index.route');
const db = require('./config/db');
const methodOverride = require('method-override');

//-- Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'))
//-- HTTP Logger
app.use(morgan('combined'));

//-- Template Engine
app.engine('hbs', hdb.engine({
  extname: ".hbs",
  helpers: {
    sum: (a, b) => a + b
  }
}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});