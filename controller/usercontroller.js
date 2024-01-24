import { userService } from "../service/userservice.js";
import User from "../modell/usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const UserService = new userService();

export const Register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email, isDelete: false });
    if (user) {
      return res.json({ message: "User Already Exists.." });
    } else {
      let image;
      if (req.file) {
        image = `${req.file.path.replace(/\\/g, "/")}`;
      }
      let salt = 10;
      let hashPassword = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        ...req.body,
        profileimage: image,
        password: hashPassword,
        is_Admin: req.body.is_Admin,
      });
      await user.save();
      res.status(201).json({ message: "User Created Successfully", user });
    }
  } catch (err) {
    console.log(err);
    return res.json({ message: "internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    return res.status(200).json({ message: "Login Successful..." });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

export const updateProfile = async (req, res) => {
  try {
    let filepath;
    if (req.file) {
      filepath = `${req.file.path.replace(/\\/g, "/")}`;
    }
    let updateProfile = await User.findOneAndUpdate({
      _id : req.user._id },
      { $set: { ...req.body, profileimage: filepath } }
  
    );

    if (updateProfile) {
      return res.json({ message: "Profile updated successfully..." });
    } else {
      return res.json({ message: "Something went wrong..." });
    }
  } catch (error) {
    return res.json(error);
  }
};

export const getProfile = async(req , res)=>{
   try {
         if(req.user){
            return res.send(req.user)
         }
      
   } catch (error) {
    console.log(error);
    return res.status(500).json({ message : "Internal server error.."})
   }
};

export const logout = (req,res)=>{
  try {
          
            req.logout(()=>{
              res.redirect('/signup')
            })
                    
          
  } catch (error) {
    console.log(error)
    return res.json({ message : "Internal server error..",error})
  }
}

export const rendorPage =async (req,res)=>{
    await res.render('signup')
}
