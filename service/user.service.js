import User from "../modell/user.model";

export class userService {

      findUser = async(email)=>{
        return await User.find({email : email})
      }

      addUser = async(body)=>{
        return await User.create(body)
      }
}