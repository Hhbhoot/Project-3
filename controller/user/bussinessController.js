import Bussiness from "../../modell/bussinesmodel.js";

export const getAllBussiness = async (req, res) => {
  try {
    let bussiness = await Bussiness.aggregate([
      {
        $match: {
          isDelete: false,
        },
      },
      {
        $project: {
          lead: 0,
          isDelete: 0,
          __v: 0,
        },
      },
    ]);
    if (bussiness) {
      return res
        .status(200)
        .json({ message: "All listed bussinesses..", Bussinesses: bussiness });
    } else {
      return res.status(404).json({
        message: "Something went wrong..could not find any bussiness.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error.." });
  }
};

export const getBussinessByCategory = async (req, res) => {
  try {
    let { category } = req.query;

    let bussiness = await Bussiness.aggregate([
      {
        $match: {
          category: category,
        },
      },
      {
        $project: {
          lead: 0,
          isDelete: 0,
          __v: 0,
        },
      },
    ]);

    if (bussiness.length === 0) {
      return res.status(404).json({ message: "Not found any bussiness" });
    } else {
      return res.status(200).json(bussiness);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error.." });
  }
};

