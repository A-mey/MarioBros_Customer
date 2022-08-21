const express = require("express");
const app = new express();
const session = require('express-session');
const cookieParser = require("cookie-parser");
const path = require('path');
//const nodemailer = require('nodemailer');
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
    cookie: { maxAge: oneDay, secure: true }
}));

app.use(express.static('public'));
app.use(express.static('scripts'));
app.use(express.static('images'));
app.use(express.static('css'));
app.use(express.static('libs'));
app.set('public', __dirname + '\public');
app.set('css', __dirname + 'public\css');
app.set('images', __dirname + 'public\images');
app.set('scripts', __dirname + '\..' + '\scripts');
app.set('libs', __dirname + '\..' + '\libs');
const router = express.Router();

app.get('/',function(_req, res){
  console.log('/')
	//res.sendFile(path.join(public + 'index.html'));
  res.sendFile(path.join('public/index.html'), { root : __dirname});  
  });

  app.get('/test', function(req, res){
    console.log('///////////')
    res.cookie("Customer", "{'UserID': 1}");
    //res.sendFile(path.join('public/index.html'), { root : __dirname});
    res.redirect('/');
  });



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});