import Bussiness from "../../modell/bussinesmodel.js";

export const addBussiness = async(req,res)=>{
    try {
          let bussiness = await Bussiness.findOne({ admin : req.user._id , isDelete : false});
          if(bussiness){
            return res.status(200).json({message : "You have already registered bussiness..."})
          }
          
          let newBussiness = await Bussiness.create({
            ...req.body,
            admin : req.user._id
          });
          if(newBussiness){
            return res.status(201).json({message : "Bussiness added successfully..."})
          }
          else{
            return res.json({message : 'Failed to add new bussiness..something went wrong..'})
          }

    } catch (error) {

       console.log(error);
       return res.status(500).json({ message : "Internal server error.."})
        
    }
}