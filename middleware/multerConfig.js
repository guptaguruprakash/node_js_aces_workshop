const multer = require("multer")
const storage = multer.diskStorage({
    destination : function(req,file,cd){
        cd(null,'./storage')
    },
    filename :function (req,file,cd){
        cd(null,Date.now()+'-'+file.originalname)

    }
})
module.exports={multer,storage}