const express = require('express');
const app = express();
const hdb = require('express-handlebars');
const port = 3000;
const morgan = require('morgan');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


//-- HTTP Logger
app.use(morgan('combined'));

//-- Template Engine
app.engine('hbs', hdb.engine({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});