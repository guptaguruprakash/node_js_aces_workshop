const express =require("express")
const connectToDb =require("./database/databaseConnection")
const Blog = require("./model/blogModel")
const Form=require("./model/formmodel")
const {multer,storage}=require("./middleware/multerConfig.js");
const upload=multer({storage : storage})
const app =express()
connectToDb()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.set('view engine','ejs')

app.listen(3000,()=>{ 
    console.log("Nodejs has started",+3000)})
app.get("/",(req,res)=>{
    res.send("<h1>this is message</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>this is about</h1>")
    
})


app.get("/ejs",(req,res)=>{

    res.render("about.ejs")
    
})
app.get("/blog",(req,res)=>{
    res.render("createblog.ejs")
})
app.get("/contact",(req,res)=>{
    const data="access workshop"
    res.render("contact.ejs",{data})
    
})
app.post("/createblog",upload.single('image') ,async (req,res)=>{
    //console.log(req.body)
    //const title =req.body.tile
    //const subtitle=req.body.subtitle
    //const decription=req.body.description
    //const subtitle=req.body.subtitle
    //const image=req.body.image
    const file = req.file
    console.log(file)
    const {title,subtitle,description}=req.body
    console.log(title,subtitle,description)
    await Blog.create({
        title,
        subtitle,
        description,
        image :file.filename
    })
    
    res.send("post hitted")
})
app.post("/submitform",async (req,res)=>{
    //console.log(req.body)
    //const title =req.body.tile
    //const subtitle=req.body.subtitle
    //const decription=req.body.description
    //const subtitle=req.body.subtitle
    //const image=req.body.image
    const {name,email,message}=req.body
    console.log(name,email,message)

    await Form.create({
        name,
        email,
        message
    }
    );

    res.send("post hitted");
})