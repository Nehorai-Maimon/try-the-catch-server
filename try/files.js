const express = require('express'),
router = express.Router(),
multer = require('multer'),
path = require('path');


const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"try/uploads")
    },
    filename: (req,file,cb)=>{
        console.log(file);
        cb(null,Date.now()+ path.extname(file.originalname));
    }
})


const upload = multer({storage});


router.post("/single", upload.single("nehorai"), (req,res)=>{
    res.redirect("/")
})

router.post("/many", upload.array("nehorai",4), (req,res)=>{
    console.log(req.body);
    res.send("success");
})

module.exports = router