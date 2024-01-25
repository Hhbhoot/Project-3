 const verifyAdmin = async(req,res,next)=>{
    try {
          if(req.user){
             if(req.user.is_Admin === true){
                next();
             }
             else{
                return res.status(401).json({ message : "unauthorized user.."})
             }
          }

    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}

export default verifyAdmin ;