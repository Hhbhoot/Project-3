import passport from "passport";
import User from "../modell/usermodel.js";
import LocalStrategy from "passport-local";
import bcryptjs from "bcrypt";

passport.use(
  new LocalStrategy(async (username, password, done) => {

    // Use the "user" and "password" to search the DB and match user/password to authenticate the user
    // 1. If the user not found, done (null, false)
    // 2. If the password does not match, done (null, false)
    // 3. If user found and password match, done (null, user)

    var user = await User.findOne({ username: username, isDelete: false });

    if (!user) return done(null, false);
    if (user) {
      let salt = await bcryptjs.genSalt(10);
      let hashPassword = await bcryptjs.compare(password, user.password);
      if (hashPassword == true) return done(null, user);
      else return done(null, false);
    }
  })
);

passport.serializeUser((user, done) => {
  //   console.log(user)
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
 let user = User.findById(id)
    if(user)
   return done(null, user);
  else 
   return done(null , false)
  });

export default LocalStrategy;

export const isAuthenticated = (req,res,next)=>{
   if(req.user){
    console.log(req.user)
     next();
   }
}
