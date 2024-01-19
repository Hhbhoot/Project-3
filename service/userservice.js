import User from "../modell/usermodel.js";

export class userService {

      findUser = async(email)=>{
        return await User.findOne({email : email})
      }

      addUser = async(body)=>{
        return await User.create(body)
      }
}