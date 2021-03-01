require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const { default: Typed } = require("typed.js");

app.listen(process.env.PORT, () => {
	console.log('=====================');
	console.log('http://localhost:'+process.env.PORT);
	console.log('=====================');
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = true;


app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/home', (res, req) => {
	req.render('home/home')
});
app.get('/skills', (res, req) => {
	req.render('skills/skills')
});
app.get('/projects', (res, req) => {
	req.render('projects/projects')
});
app.get('/contact', (res, req) => {
	req.render('contact/contact')
});