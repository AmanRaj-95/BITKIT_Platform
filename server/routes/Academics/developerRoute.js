const express = require("express");
const Developer =require("../../models/Academics/developer.model");


const router = express.Router();
// router.get("/",getDeveloper);
router.get("/developer",async(req,res)=>{
    try{
        const developer = await Developer.find();
        res.status(200).json(developer);
    }catch(error){
        console.log("Error",error);
        res.status(500).json({ message: "Failed to fetch developers", error });
    }
});
module.exports = router;