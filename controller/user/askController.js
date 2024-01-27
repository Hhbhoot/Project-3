import mongoose from "mongoose";
import Ask from "../../modell/askmodel.js";
import Bussiness from "../../modell/bussinesmodel.js";
import Lead from "../../modell/leadmodel.js";
import Deal from "../../modell/dealModel.js";
import { json } from "express";

export const addAsk = async (req, res) => {
  try {
    let createAsk = await Ask.create({
      ...req.body,
      user: req.user._id,
    });
    await createAsk.save();

    let array = [createAsk];

    let lead = array.map((item) => ({
      discription: createAsk.discription,
      user: req.user._id,
    }));

    let admin= await Bussiness.findOne({ category : createAsk.category});

    let createLead = await Lead.create({
      adminId : admin.admin,
      category: createAsk.category,
      lead: lead,
      askId: createAsk._id,
    });

    let generateLead = await Bussiness.updateMany(
      { category: createAsk.category },

      {
        $push: {
          lead: {
            askId: createAsk._id,
            leadId: createLead._id,
            user: req.user._id,
            discription: createAsk.discription,
          },
        },
      }
    );
    if (generateLead) {
      return res.status(200).json({ message: "Lead generated successfully.." });
    } else {
      return res.json({ message: "Something went wrong.." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error.." });
  }
};

export const myAsk = async (req, res) => {
  try {
    let ask = await Ask.find({ user: req.user._id, isDelete: false });
    if (ask.length === 0) {
      return res.status(404).json({ message: "No Ask found..." });
    } else {
      return res.status(200).json(ask);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error.." });
  }
};

export const deleteAsk = async (req, res) => {
  try {
    let { askId } = req.body;
    // askId = new mongoose.Types.ObjectId(askId);
    // console.log(askId)

    let ask = await Ask.findByIdAndUpdate(askId, { $set: { isDelete: true } });
    // console.log(ask)
    if (ask) {
      await Bussiness.updateMany({ 'lead.askId': askId },
      {
        $pull : { lead : { askId : askId}},
      },
      {multi : true}
      );

      await Lead.findOneAndUpdate(
         {askId : askId },
        { $set: { isDelete: true } }
      );
      return res.status(200).json({ message: "Ask deleted successfully.." });
    } else {
      return res.status(200).json({ message: "Ask not found.." });
    }
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error.." });
  }
};

export const updateAsk = async (req, res) => {
  try {
    let { askId , discription } = req.body;
    // askId = new mongoose.Types.ObjectId(askId);
    // console.log(askId)

    let ask = await Ask.findByIdAndUpdate(askId, { $set: { ...req.body} });
    console.log(ask)
    if (ask) {
        let lead = await Lead.findOneAndUpdate({ askId : askId ,'lead.user' : req.user._id},
          {
            $set :  { 'lead.$.discription': discription }
          })
    
      console.log(lead)
      return res.status(200).json({ message: "Ask updated successfully.." });
    } else {
      return res.status(200).json({ message: "Ask not found.." });
    }
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error.." });
  }
};

export const completeAsk = async(req,res)=>{
  try {
       const { amount , askId} = req.body ;

       const lead = await Lead.findOne({ askId : askId ,'lead.user' : req.user._id});

      //  console.log(lead);
 
       let deal = await Deal.create({
          admin : lead.adminId,
          user : req.user._id,
          totalAmount : amount
       }) ;

       if(deal){

        let ask = await Ask.findOneAndUpdate({ _id : askId }, { $set: { isDelete: true } });
        await Bussiness.updateMany({ 'lead.askId': askId },
      {
        $pull : { lead : { askId : askId}},
      },
      {multi : true}
      );
      await Lead.findOneAndUpdate(
         {askId : askId },
        { $set: { isDelete: true } }
      );
      return res.status(500).json({message : "Ask completed successsfully..."})
      }
      else{
        return res.status(404).json({ message : "something went wrong..failed to complete ask"})
      }
    }
       
  catch (error) {
    console.log(error);
    return res.status(500).json({ message : " Internal Server error.."})
  }
}
