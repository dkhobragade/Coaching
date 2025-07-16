// import User from "../models/User.js";

// export const getAllUser = async (req, res) => {
//   try {
//     const getUser = await User.find();

//     if (!getUser || getUser.length == 0) {
//       return res.status(404).json({ message: "No user available" });
//     }

//     return res.status(200).json(getUser);
//   } catch (error) {
//     console.log("Error while getting all user", error.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
