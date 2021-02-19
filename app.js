requestAnimationFrame('dotenv').config();
const express = require('express');
const app = express();

app.listen(process.env.PORT, () => {
	console.log('=====================');
	console.log('http://localhost:'+process.env.PORT);
	console.log('=====================');
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = true;

