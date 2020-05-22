//passport can handle login with twitter and facebook stuff 
const passport = require('passport')
const localstrategy = require('passport-local').Strategy  //mpi i passport-local
const user = require('./db').user


//defines how user info will store in a session
//save info (username) in session
passport.serializeUser(function (user, done) {
    done(null, user.username)
})

//defines how actuall user object is recover from the session
//recover all the info about username
passport.deserializeUser(function (username, done) {
    user.findOne({
        username: username
    }).then((user) => {
        if (!user) {
            return done(new Error("no such user exist"))
        }
        done(null, user)
    }).catch((err) => {
        done(err)
    })
})

//to aplly strattegy that how server will authenticate user
passport.use(new localstrategy(function (username, password, done) {
    //in this we will define how login will work
    user.findOne({
        where: {
            username: username
        }
    }).then((user) => {
        if (!user) {
            return done(null, false, { message: "no such user" })
        }
        if (user.password != password) {
            return done(null, false, { message: "wrong password" })
        }
        return done(null, user)
    }).catch((err) => {
        return done(err)
    })
}))
exports = module.exports = passport