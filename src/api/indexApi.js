const express = import("express");
const registerApi = import("https://testproject-api-v2.strv.com/users");
const loginApi = import("https://testproject-api-v2.strv.com/auth/native");

const router = express.Router();

router.use(registerApi);
router.use(loginApi);

module.exports = router;

export {};
