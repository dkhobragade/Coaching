import jwt from "jsonwebtoken";

export const generateToken = ({ userId, res }) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });

  const isProduction = process.env.NODE_ENV === "production";

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: isProduction ? "None" : "Lax",
    secure: isProduction,
  });

  return token;
};
