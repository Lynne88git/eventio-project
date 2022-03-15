//const express from "express";
const registerApi = import("https://testproject-api-v2.strv.com/users");

const router = express.Router();
//router.post..?
router.use("/register", (req, res) => {
console.log(req.body);

res.json({message: "Hello world"})
});

module.exports = router;
