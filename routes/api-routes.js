var aws = require('aws-sdk'),
  multer = require('multer'),
  multerS3 = require('multer-s3');

aws.config.update({
  secretAccessKey: process.env.S3_SECRET_KEY || require("../key.js").secretAccessKey,
  accessKeyId: process.env.S3_ACCESS_KEY || require("../key.js").accessKeyId,
  region: 'us-west-1'
});

var s3 = new aws.S3();

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'travelbookpictures',
    key: function(req, file, cb) {
      // console.log(file.originalname);
      cb(null, file.originalname); //use Date.now() for unique file keys
    }
  })
});

var db = require("../models");

module.exports = function(app) {

    app.get("/myposts/:user", function(req, res) {

    db.user.findAll({
      where: {
        username: req.params.user
      },
      include: [db.post]
    }).then(function(results) {

      console.log("MYPOSTS***", results[0].dataValues.posts);

      var userPost = {
        data: results[0].dataValues.posts
      }

      res.render('myposts', {
        userPost
      });

    });

  });

       app.get("/savedposts/:user", function(req, res) {

    db.user.findAll({
      where: {
        username: req.params.user
      },
      include: [db.post]
    }).then(function(results) {

       console.log("SAVEDPOSTS***", results);

      var userPost = {
        data: results[0].dataValues.posts
      }

      res.render('savedposts', {
        userPost
      });

    });

  });

      app.get("/mycart/:user", function(req, res) {

    db.user.findAll({
      where: {
        username: req.params.user
      },
      include: [db.post]
    }).then(function(results) {

       console.log("MYCART***", results);

      var userPost = {
        data: results[0].dataValues.posts
      }

      res.render('mycart', {
        userPost
      });

    });

  });

     app.get("/updatepost/:post", function(req, res) {

    db.posts.findAll({
      where: {
        id: req.params.post
      }
    }).then(function(results) {

       console.log("UPDATEPOSTS***", results);

      var userPost = {
        data: results[0].dataValues.posts
      }

      res.render('updatepost', {
        userPost
      });

    });

  });


  app.post("/signup", function(req, res) {

    db.user.create({

      username: req.body.users,
      password: req.body.pws

    }).then(function(results) {

      console.log("user added");
      console.log(results);

      res.end();
    });
  });

  app.get("/login", function(req, res) {

    db.user.findAll({}).then(function(results) {

      // console.log("found user data");
      // console.log(results);

      res.json(results);
    });

  });
 app.post("/add", upload.array('upl', 1), function(req, res) {

  console.log("***POST REQ***", req.body)

    db.user.findOne({
      where: {
        username: req.body.user
      }
    }).then(function(results) {

      console.log("***USER RES***", results);

      db.post.create({
        image: req.files[0].originalname,
        description: req.body.description,
        item: req.body.item,
        price: parseInt(req.body.price),
        userId: results.id

      }).then(function(results) {

        console.log("SAVED"); 
        res.redirect("/home");
      });

    });

  });


  app.put("/loggedin", function(req, res) {

    db.user.update({

      loggedIn: true
    }, {

      where: {

        id: req.body.info
      }

    }).then(function(results) {

      res.end();

    });
  });
};