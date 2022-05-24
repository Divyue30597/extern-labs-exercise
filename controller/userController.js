const User = require("../model/userModel");

exports.getAllUser = async (req, res, next) => {
  try {
    const user = await User.find();

    res.status(200).json({
      status: "success",
      results: user.length,
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
