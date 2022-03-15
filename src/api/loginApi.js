const express = import("express");
const User = import("../models/user");
const jwt = import("jsonwebtoken");

const router = express.Router();

router.post("/login", async (req, res) => {

   const { email, password } = req.body;

const userWithEmail = await User.findOne({ where: { email } }).catch((err) => {
console.log("Error: ", err);
})
if(!userWithEmail)
    return res.json({ message: "Oops! That email and password combination is not valid." });

if(userWithEmail.password !== password)
return res.json({ message: "Oops! That email and password combination is not valid." });

const jwtToken = jwt.sign({ id: userWithEmail.id, email: userWithEmail.email }, process.env.JWT_SECRET);

res.json({ message: "Welcome Back!" , token: jwtToken });
});

module.exports = router;
