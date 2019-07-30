const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./pool');
const passport = require('passport');
require('./config/passport')(passport);
const path = require('path');

const account = require('./routes/api/account');
const c_r_u_d = require('./routes/api/c_r_u_d');

const app = express();

//   ##  MIDDLEWARE   ##   //
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Passport middleware
app.use(passport.initialize());


// Routes
app.use('/account',account);
app.use('/account/dashboard', c_r_u_d);

// Error handling
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  res.status(statusCode).json({ type: 'error', message: error.message })
});

// Connect to DB
pool.connect(err => {
  if(err) return console.log('could not connect to postgres', err);
  
  pool.query('SELECT NOW() AS "theTime"', (err, result) => {
    if(err) return console.error('error running query', err);
    const date = new Date(result.rows[0].theTime).toLocaleString().split(',')[0]
    console.log(`Datebase connected on ${date}`);
  })
});


// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));