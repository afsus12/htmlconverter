const convertController=require("../controllers/convert.controller");
const express = require("express");
const router = express.Router();
router.get("/:path",convertController.upload);
module.exports =router;  