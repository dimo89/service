const express = require('express'),
	app = express(),
	path = require('path'),
	PUBLIC_PATH = path.join(__dirname, "../public");

app.use(express.static(PUBLIC_PATH));

app.get('*', function(req, res) {
	res.sendFile(path.join(PUBLIC_PATH, 'index.html'));
});

app.listen(1338, () => {
	console.log('NODE_ENV =', process.env.NODE_ENV);
	console.log('listening on port 1338!');
});