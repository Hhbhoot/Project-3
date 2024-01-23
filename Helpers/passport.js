import passport from "passport";
import LocalStrategy from "passport"
import User from "../modell/usermodel";
const LocalStrategy = require('passport-local').Strategy;

authUser = async (user, password, done) => {
    console.log(`Value of "User" in authUser function ----> ${user}`)         //passport will populate, user = req.body.username
    console.log(`Value of "Password" in authUser function ----> ${password}`) //passport will popuplate, password = req.body.password

// Use the "user" and "password" to search the DB and match user/password to authenticate the user
// 1. If the user not found, done (null, false)
// 2. If the password does not match, done (null, false)
// 3. If user found and password match, done (null, user)
    
let user = await User.findOne({user : user , password : password})
 if(!user) return done(null,false)
 if(password !== user.password) return done(null,false)
 return done(null , user)

   
}
passport.use(new LocalStrategy (authUser))

      passport.serializeUser( (user, done) => { 
          console.log(`--------> Serialize User`)
          console.log(user)     
      
          done(null, user.id)})

          passport.deserializeUser((id, done)=> {
            User.findById(id, function(err, user) {
                done(err, user);
            })})