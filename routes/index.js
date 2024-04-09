var express = require('express');
var router = express.Router();
var userModel = require('./users');
const passport = require('passport');

const localStrategy =  require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));


router.get('/', function(_req, res, _next) {
  res.render('index');
});

router.get('/profile',isLoggedIn, async function (req,res,_next) {
  const user = await userModel.findOne({
    username: req.session.passport.user
  })
  res.render('profile',{user});
})

router.get('/home',isLoggedIn, async function (req,res) {
  const user = await userModel.findOne({
    username: req.session.passport.user
  })
  res.render('home',{user});
})
router.get('/chatwithai',isLoggedIn, async function (req,res) {
  const user = await userModel.findOne({
    username: req.session.passport.user
  })
  res.render('chatwithai',{user});
})

router.get("/login",function (req,res,_next) {
  res.render("login", {error: req.flash("error")});
})

router.post('/register', async function (req,res,_next) {
  const userData =  new userModel({
    username: req.body.username,
    email: req.body.email,
    fullname:req.body.fullname
  });
  
  userModel.register(userData,req.body.password)
  .then(function () {
    passport.authenticate("local")(req,res,function(){
      res.render("login",{error: ""});
    })
  })
})

// code for login
router.post('/login',passport.authenticate("local",{
  successRedirect: "/home",
  failureRedirect: "/login",
  failureFlash: true
}),function (_req,_res) {})

// code for log out
router.post('/logout',function (req,res) {
  req.logout(function (err) {
    if (err) {return next(err)};
    res.redirect('/');
  })  
})

// code for isLoggedIn middleware to protect the profile route
function isLoggedIn(req,res,next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect("/");
} 

module.exports = router;
