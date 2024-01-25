import Ask from "../../modell/askmodel.js";
import Lead from "../../modell/leadmodel.js";

export const addAsk = async(req,res)=>{
    try {
         
        let createAsk = await Ask.create({
             ...req.body,
             user : req.user._id
        })
         await createAsk.save();
 
        return res.json(createAsk);  
        
        

    } catch (error) {
        console.log(error)
        return res.status(500).json({message : "Internal server error.."})
    }
}