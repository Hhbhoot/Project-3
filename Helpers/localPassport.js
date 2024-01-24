import User from "../modell/usermodel.js";
import bcryptjs from "bcrypt";
import passport from 'passport';
import LocalStrategy from 'passport-local';

passport.use(new LocalStrategy(
  async (username, password, done) => {
    
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
  done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
 let user = await  User.findById(id)
    if(user)
   return done(null, user);
  else 
   return done(null , false)
  });

export default LocalStrategy;

export const isAuthenticated = (req,res,next)=>{
  if (req.isAuthenticated()) {
    return next();
     
   }
}
