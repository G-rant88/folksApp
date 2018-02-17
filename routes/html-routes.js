var path = require("path");


module.exports = function(app) {

	app.get("/", function(req, res) {
		res.render('home');
	});

	app.get("/add", function(req, res) {
		res.render('add');
	});

	app.get("/myposts", function(req, res) {
		res.render('myposts');
	});

	app.get("/savedposts", function(req, res) {
		res.render('savedposts');
	});

	app.get("/updatepost", function(req, res) {
		res.render('updatepost');
	});

	app.get("/search", function(req, res) {
		res.render('search');
	});

		app.get("/mycart", function(req, res) {
		res.render('mycart');
	});


		app.get("*", function(req, res) {
		res.render('home');
	});

	};