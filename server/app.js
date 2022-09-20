

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const appRoute = require('./src/routes');
app.use(cors());

const app = express();
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

// app.use(cors({ origin: "https://vaccine-passport-app-backend.vercel.app", credentials: true }))
// console.log("+++++++++++success" )
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next()
//   })


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', appRoute);


module.exports = app;
