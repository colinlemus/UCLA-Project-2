var path = require('path');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../', 'public', 'build', 'index.html'));
	});

	app.use((req, res, next) => {
		res.sendFile(path.join(__dirname, '../', 'public', 'build', 'index.html'));
	});
};