import Lead from "../../modell/leadmodel.js";

export const getAllLead = async (req, res) => {
  try {
    let leads = await Lead.find({ adminId: req.user._id, isDelete: false });
    if (leads) {
      return res.status(200).json(leads);
    } else {
      return res.status(404).json({ message: "Leads not found..." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error.." });
  }
};

export const getSpecificUserLead = async (req, res) => {
  try {
    const { userId } = req.body;

    let lead = await Lead.findOne({ "lead.user": userId, isDelete: false });
    if (lead) {
      return res.status(200).json(lead);
    } else {
      return res.status(404).json({ message: "Lead not found..." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error.." });
  }
};
