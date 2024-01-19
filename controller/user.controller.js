import User from "../modell/user.model";
import { userService } from "../service/user.service";
const UserService = new userService();

export const Register = async(req , res)=>{
     try {

     let user = await UserService.findUser(req.body.email);
     if(user){
        return res.status(200).json({message : 'User already registered..'})
     }
     let newUser = await UserService.addUser(req.body);
     if(newUser){
         return res.status(201).json({ message : "User Registered successfully.."})
     }
     else{
        return res.status(400).json({message :"Failed to Register User.."})
     }

     } catch (error) {
        console.log(error);
        return res.status(500).json({message : 'Internal server error..'})

     }
}